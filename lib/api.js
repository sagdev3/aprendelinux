const crypto = require("crypto");

const DEFAULT_SESSION_SECRET = "dev-only-change-me";
const sessionSecret = process.env.SESSION_SECRET || DEFAULT_SESSION_SECRET;
const sessionTtlMs = 7 * 24 * 60 * 60 * 1000;
const rateWindowMs = 15 * 60 * 1000;

const allowedRoles = new Set(["Estudiante", "Administrador", "Docente", "Autodidacta"]);
const allowedLevels = new Set(["Inicial", "Básico", "Intermedio", "Avanzado"]);
const unsafeMethods = new Set(["POST", "PUT", "PATCH", "DELETE"]);

function assertSecureSecret() {
  if (process.env.NODE_ENV === "production" && sessionSecret === DEFAULT_SESSION_SECRET) {
    throw new Error("SESSION_SECRET es obligatorio en producción.");
  }
}

function securityHeaders() {
  return {
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
    "X-Frame-Options": "DENY"
  };
}

function json(res, status, body) {
  res.writeHead(status, {
    ...securityHeaders(),
    "Content-Type": "application/json; charset=utf-8"
  });
  res.end(JSON.stringify(body));
}

function noContent(res) {
  res.writeHead(204, securityHeaders());
  res.end();
}

function parseCookies(req) {
  return Object.fromEntries((req.headers.cookie || "").split(";").filter(Boolean).map((part) => {
    const index = part.indexOf("=");
    if (index === -1) return [part.trim(), ""];
    return [part.slice(0, index).trim(), decodeURIComponent(part.slice(index + 1))];
  }));
}

function sign(value, purpose = "session") {
  return crypto.createHmac("sha256", sessionSecret).update(`${purpose}:${value}`).digest("hex");
}

function signedToken(purpose) {
  const value = crypto.randomBytes(32).toString("hex");
  return `${value}.${sign(value, purpose)}`;
}

function verifySignedToken(token = "", purpose = "session") {
  const [value, signature] = String(token).split(".");
  if (!value || !signature) return false;
  const expected = sign(value, purpose);
  if (signature.length !== expected.length) return false;
  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected)) ? value : false;
}

function cookieOptions({ httpOnly = true, maxAge = 604800 } = {}) {
  const secure = process.env.NODE_ENV === "production" ? "; Secure" : "";
  const httpOnlyFlag = httpOnly ? "; HttpOnly" : "";
  return `${httpOnlyFlag}; SameSite=Strict; Path=/; Max-Age=${maxAge}${secure}`;
}

function appendSetCookie(res, cookie) {
  const current = res.getHeader?.("Set-Cookie") || res.headers?.["set-cookie"];
  if (!current) {
    res.setHeader("Set-Cookie", cookie);
  } else if (Array.isArray(current)) {
    res.setHeader("Set-Cookie", [...current, cookie]);
  } else {
    res.setHeader("Set-Cookie", [current, cookie]);
  }
}

function setSessionCookie(res, token) {
  appendSetCookie(res, `lq_session=${encodeURIComponent(token)}${cookieOptions()}`);
}

function clearSessionCookie(res) {
  appendSetCookie(res, `lq_session=${cookieOptions({ maxAge: 0 })}`);
}

function setCsrfCookie(res, token) {
  appendSetCookie(res, `lq_csrf=${encodeURIComponent(token)}${cookieOptions({ httpOnly: false })}`);
}

function makeSessionToken() {
  return signedToken("session");
}

function makeCsrfToken() {
  return signedToken("csrf");
}

function hashPassword(password, salt = crypto.randomBytes(16).toString("hex")) {
  const hash = crypto.pbkdf2Sync(password, salt, 120000, 32, "sha256").toString("hex");
  return { hash, salt };
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1024 * 1024) {
        req.destroy();
        reject(new Error("Body demasiado grande"));
      }
    });
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch {
        reject(new Error("JSON inválido"));
      }
    });
  });
}

function clientIp(req) {
  const forwarded = String(req.headers["x-forwarded-for"] || "").split(",")[0].trim();
  return forwarded || req.socket?.remoteAddress || "local";
}

async function cleanupExpiredSecurityRows(pool) {
  await pool.execute("DELETE FROM user_sessions WHERE expires_at <= NOW()");
  await pool.execute("DELETE FROM rate_buckets WHERE reset_at <= NOW()");
}

async function rateLimit(req, key, pool, { limit = 8, windowMs = rateWindowMs } = {}) {
  const bucketKey = `${key}:${clientIp(req)}`;
  const resetAt = new Date(Date.now() + windowMs);
  await pool.execute(
    `INSERT INTO rate_buckets (bucket_key, count, reset_at)
     VALUES (?, 1, ?)
     ON DUPLICATE KEY UPDATE
      count = IF(reset_at <= NOW(), 1, count + 1),
      reset_at = IF(reset_at <= NOW(), VALUES(reset_at), reset_at)`,
    [bucketKey, resetAt]
  );
  const [rows] = await pool.execute("SELECT count FROM rate_buckets WHERE bucket_key = ?", [bucketKey]);
  return Number(rows[0]?.count || 0) <= limit;
}

async function createSession(pool, userId) {
  await pool.execute(
    `DELETE FROM user_sessions
     WHERE user_id = ?
      AND session_id NOT IN (
        SELECT session_id FROM (
          SELECT session_id
          FROM user_sessions
          WHERE user_id = ?
          ORDER BY created_at DESC
          LIMIT 4
        ) AS recent_sessions
      )`,
    [userId, userId]
  );
  const token = makeSessionToken();
  const sessionId = token.split(".")[0];
  await pool.execute(
    "INSERT INTO user_sessions (session_id, user_id, expires_at) VALUES (?, ?, ?)",
    [sessionId, userId, new Date(Date.now() + sessionTtlMs)]
  );
  return token;
}

async function deleteSession(pool, sessionId) {
  if (!sessionId) return;
  await pool.execute("DELETE FROM user_sessions WHERE session_id = ?", [sessionId]);
}

async function currentUserId(req, pool) {
  const token = parseCookies(req).lq_session;
  const sessionId = verifySignedToken(token, "session");
  if (!sessionId) return null;
  const [rows] = await pool.execute(
    "SELECT user_id FROM user_sessions WHERE session_id = ? AND expires_at > NOW()",
    [sessionId]
  );
  return rows[0]?.user_id || null;
}

function createMysqlPool() {
  assertSecureSecret();
  let mysql;
  try {
    mysql = require("mysql2/promise");
  } catch {
    throw new Error("Falta instalar dependencias. Ejecuta npm install antes de iniciar el servidor.");
  }
  return mysql.createPool({
    host: process.env.DB_HOST || "127.0.0.1",
    port: Number(process.env.DB_PORT || 3306),
    user: process.env.DB_USER || "linux_quest",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "linux_quest",
    waitForConnections: true,
    connectionLimit: 10
  });
}

async function currentUser(req, pool) {
  const userId = await currentUserId(req, pool);
  if (!userId) return null;
  const [rows] = await pool.execute("SELECT id, name, email FROM users WHERE id = ?", [userId]);
  return rows[0] || null;
}

async function requireUser(req, res, pool) {
  const user = await currentUser(req, pool);
  if (!user) {
    json(res, 401, { error: "No has iniciado sesión" });
    return null;
  }
  return user;
}

function validateCsrf(req, res, pathname) {
  if (!unsafeMethods.has(req.method) || pathname === "/api/csrf") return true;
  const cookies = parseCookies(req);
  const headerToken = req.headers["x-csrf-token"];
  if (!cookies.lq_csrf || !headerToken || cookies.lq_csrf !== headerToken || !verifySignedToken(headerToken, "csrf")) {
    json(res, 403, { error: "Token CSRF inválido" });
    return false;
  }
  return true;
}

function normalizeEmail(value) {
  const email = String(value || "").trim().toLowerCase();
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 190;
  return valid ? email : "";
}

function normalizeProgress(body) {
  const active = Math.min(10000, Math.max(0, Math.trunc(Number(body.active || 0))));
  const mode = body.mode === "pro" ? "pro" : "kid";
  const done = Array.isArray(body.done)
    ? body.done.map((value) => Math.trunc(Number(value))).filter((value) => Number.isInteger(value) && value >= 0 && value <= 10000)
    : [];
  return { active, mode, done: [...new Set(done)].slice(0, 500) };
}

function normalizeProfile(body, fallbackName) {
  const displayName = String(body.displayName || fallbackName).trim().slice(0, 80);
  const role = allowedRoles.has(body.role) ? body.role : "Estudiante";
  const goal = String(body.goal || "").trim().slice(0, 120);
  const level = allowedLevels.has(body.level) ? body.level : "Inicial";
  const bio = String(body.bio || "").trim().slice(0, 300);
  return { displayName, role, goal, level, bio };
}

function verifyPassword(password, user) {
  const storedHash = String(user.password_hash || "");
  const { hash } = hashPassword(password, user.password_salt);
  if (storedHash.length !== hash.length) return false;
  return crypto.timingSafeEqual(Buffer.from(hash), Buffer.from(storedHash));
}

async function handleApi(req, res, pathname, pool) {
  assertSecureSecret();

  try {
    if (req.method === "POST" && pathname === "/api/csp-report") {
      const body = await readBody(req).catch(() => ({}));
      if (process.env.NODE_ENV !== "test") {
        console.warn("[CSP violation]", JSON.stringify(body));
      }
      return noContent(res);
    }

    if (req.method === "GET" && pathname === "/api/csrf") {
      const token = makeCsrfToken();
      setCsrfCookie(res, token);
      return json(res, 200, { csrfToken: token });
    }

    if (!validateCsrf(req, res, pathname)) return;

    if (req.method === "GET" && pathname === "/api/me") {
      return json(res, 200, { user: await currentUser(req, pool) });
    }

    if (req.method === "POST" && pathname === "/api/register") {
      if (!(await rateLimit(req, "register", pool))) return json(res, 429, { error: "Demasiados intentos. Intenta más tarde." });
      await cleanupExpiredSecurityRows(pool);
      const body = await readBody(req);
      const name = String(body.name || "").trim();
      const email = normalizeEmail(body.email);
      const password = String(body.password || "");
      if (name.length < 2 || !email || password.length < 8 || password.length > 128) {
        return json(res, 400, { error: "Nombre, email o contraseña inválidos. Usa entre 8 y 128 caracteres." });
      }
      const { hash, salt } = hashPassword(password);
      try {
        const [result] = await pool.execute(
          "INSERT INTO users (name, email, password_hash, password_salt) VALUES (?, ?, ?, ?)",
          [name.slice(0, 80), email, hash, salt]
        );
        await pool.execute(
          "INSERT INTO user_progress (user_id, active_module, mode, done_modules) VALUES (?, 0, 'kid', JSON_ARRAY())",
          [result.insertId]
        );
        await pool.execute(
          "INSERT INTO student_profiles (user_id, display_name) VALUES (?, ?)",
          [result.insertId, name.slice(0, 80)]
        );
        const token = await createSession(pool, result.insertId);
        setSessionCookie(res, token);
        return json(res, 201, { user: { id: result.insertId, name: name.slice(0, 80), email } });
      } catch (error) {
        if (error.code === "ER_DUP_ENTRY") return json(res, 409, { error: "Ese email ya está registrado" });
        throw error;
      }
    }

    if (req.method === "POST" && pathname === "/api/login") {
      if (!(await rateLimit(req, "login", pool))) return json(res, 429, { error: "Demasiados intentos. Intenta más tarde." });
      await cleanupExpiredSecurityRows(pool);
      const body = await readBody(req);
      const email = normalizeEmail(body.email);
      const password = String(body.password || "");
      if (!email || password.length > 128) return json(res, 401, { error: "Credenciales incorrectas" });
      const [rows] = await pool.execute("SELECT * FROM users WHERE email = ?", [email]);
      const user = rows[0];
      if (!user || !verifyPassword(password, user)) return json(res, 401, { error: "Credenciales incorrectas" });
      const token = await createSession(pool, user.id);
      setSessionCookie(res, token);
      return json(res, 200, { user: { id: user.id, name: user.name, email: user.email } });
    }

    if (req.method === "POST" && pathname === "/api/logout") {
      const token = parseCookies(req).lq_session;
      const sessionId = verifySignedToken(token, "session");
      await deleteSession(pool, sessionId);
      clearSessionCookie(res);
      return json(res, 200, { ok: true });
    }

    if (req.method === "GET" && pathname === "/api/progress") {
      const user = await requireUser(req, res, pool);
      if (!user) return;
      const [rows] = await pool.execute("SELECT active_module, mode, done_modules FROM user_progress WHERE user_id = ?", [user.id]);
      const row = rows[0] || { active_module: 0, mode: "kid", done_modules: [] };
      return json(res, 200, {
        active: row.active_module,
        mode: row.mode === "pro" ? "pro" : "kid",
        done: Array.isArray(row.done_modules) ? row.done_modules : JSON.parse(row.done_modules || "[]")
      });
    }

    if (req.method === "PUT" && pathname === "/api/progress") {
      const user = await requireUser(req, res, pool);
      if (!user) return;
      const body = await readBody(req);
      const { active, mode, done } = normalizeProgress(body);
      await pool.execute(
        `INSERT INTO user_progress (user_id, active_module, mode, done_modules)
         VALUES (?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE active_module = VALUES(active_module), mode = VALUES(mode), done_modules = VALUES(done_modules)`,
        [user.id, active, mode, JSON.stringify(done)]
      );
      return json(res, 200, { ok: true });
    }

    if (req.method === "GET" && pathname === "/api/profile") {
      const user = await requireUser(req, res, pool);
      if (!user) return;
      const [rows] = await pool.execute(
        "SELECT display_name, role, goal, level, bio, updated_at FROM student_profiles WHERE user_id = ?",
        [user.id]
      );
      const profile = rows[0] || {
        display_name: user.name,
        role: "Estudiante",
        goal: "",
        level: "Inicial",
        bio: "",
        updated_at: null
      };
      return json(res, 200, { profile });
    }

    if (req.method === "PUT" && pathname === "/api/profile") {
      const user = await requireUser(req, res, pool);
      if (!user) return;
      const body = await readBody(req);
      const { displayName, role, goal, level, bio } = normalizeProfile(body, user.name);
      if (displayName.length < 2) return json(res, 400, { error: "El nombre visible debe tener al menos 2 caracteres" });
      await pool.execute(
        `INSERT INTO student_profiles (user_id, display_name, role, goal, level, bio)
         VALUES (?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE
          display_name = VALUES(display_name),
          role = VALUES(role),
          goal = VALUES(goal),
          level = VALUES(level),
          bio = VALUES(bio)`,
        [user.id, displayName, role, goal, level, bio]
      );
      await pool.execute("UPDATE users SET name = ? WHERE id = ?", [displayName, user.id]);
      return json(res, 200, {
        profile: { display_name: displayName, role, goal, level, bio }
      });
    }

    return json(res, 404, { error: "Ruta API no encontrada" });
  } catch (error) {
    console.error(error);
    const status = /JSON inválido|Body demasiado grande/.test(error.message) ? 400 : 500;
    return json(res, status, { error: status === 400 ? error.message : "Error interno del servidor" });
  }
}

function resetApiStateForTests() {
}

module.exports = {
  assertSecureSecret,
  createMysqlPool,
  handleApi,
  hashPassword,
  resetApiStateForTests,
  securityHeaders
};
