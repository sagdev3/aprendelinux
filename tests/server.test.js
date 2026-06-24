const assert = require("assert");
const { Readable } = require("stream");
const { handleApi, resetApiStateForTests } = require("../lib/api");

class MockPool {
  constructor() {
    this.users = [];
    this.progress = new Map();
    this.nextUserId = 1;
  }

  async execute(sql, params = []) {
    if (sql.startsWith("SELECT id, name, email FROM users WHERE id = ?")) {
      const user = this.users.find((item) => item.id === params[0]);
      return [[user ? { id: user.id, name: user.name, email: user.email } : undefined].filter(Boolean)];
    }

    if (sql.startsWith("INSERT INTO users")) {
      if (this.users.some((item) => item.email === params[1])) {
        const error = new Error("Duplicate entry");
        error.code = "ER_DUP_ENTRY";
        throw error;
      }
      const user = {
        id: this.nextUserId++,
        name: params[0],
        email: params[1],
        password_hash: params[2],
        password_salt: params[3]
      };
      this.users.push(user);
      return [{ insertId: user.id }];
    }

    if (sql.startsWith("INSERT INTO user_progress") && sql.includes("JSON_ARRAY()")) {
      this.progress.set(params[0], { active_module: 0, mode: "kid", done_modules: [] });
      return [{ affectedRows: 1 }];
    }

    if (sql.startsWith("INSERT INTO student_profiles") && !sql.includes("ON DUPLICATE KEY UPDATE")) {
      this.profile = {
        user_id: params[0],
        display_name: params[1],
        role: "Estudiante",
        goal: "",
        level: "Inicial",
        bio: ""
      };
      return [{ affectedRows: 1 }];
    }

    if (sql.startsWith("SELECT * FROM users WHERE email = ?")) {
      return [this.users.filter((item) => item.email === params[0])];
    }

    if (sql.startsWith("SELECT active_module, mode, done_modules FROM user_progress WHERE user_id = ?")) {
      const row = this.progress.get(params[0]);
      return [[row].filter(Boolean)];
    }

    if (sql.startsWith("INSERT INTO user_progress") && sql.includes("ON DUPLICATE KEY UPDATE")) {
      this.progress.set(params[0], {
        active_module: params[1],
        mode: params[2],
        done_modules: JSON.parse(params[3])
      });
      return [{ affectedRows: 1 }];
    }

    if (sql.startsWith("SELECT display_name, role, goal, level, bio, updated_at FROM student_profiles")) {
      return [[this.profile].filter(Boolean)];
    }

    if (sql.startsWith("INSERT INTO student_profiles") && sql.includes("ON DUPLICATE KEY UPDATE")) {
      this.profile = {
        user_id: params[0],
        display_name: params[1],
        role: params[2],
        goal: params[3],
        level: params[4],
        bio: params[5]
      };
      return [{ affectedRows: 1 }];
    }

    if (sql.startsWith("UPDATE users SET name = ? WHERE id = ?")) {
      const user = this.users.find((item) => item.id === params[1]);
      if (user) user.name = params[0];
      return [{ affectedRows: user ? 1 : 0 }];
    }

    throw new Error(`SQL no simulada: ${sql}`);
  }
}

function createReq(method, pathname, body = null, headers = {}) {
  const req = new Readable({ read() {} });
  req.method = method;
  req.url = pathname;
  req.headers = Object.fromEntries(
    Object.entries({ host: "localhost", ...headers }).map(([key, value]) => [key.toLowerCase(), value])
  );
  process.nextTick(() => {
    if (body !== null && body !== undefined) {
      req.push(JSON.stringify(body));
    }
    req.push(null);
  });
  return req;
}

function createRes() {
  return {
    statusCode: 200,
    headers: {},
    body: "",
    getHeader(name) {
      return this.headers[name.toLowerCase()];
    },
    setHeader(name, value) {
      this.headers[name.toLowerCase()] = value;
    },
    writeHead(statusCode, headers = {}) {
      this.statusCode = statusCode;
      for (const [key, value] of Object.entries(headers)) {
        this.headers[key.toLowerCase()] = value;
      }
    },
    end(chunk = "") {
      this.body += chunk.toString();
    }
  };
}

async function request(pool, method, path, options = {}) {
  const req = createReq(method, path, options.body ?? null, options.headers || {});
  const res = createRes();
  await handleApi(req, res, path, pool);
  return {
    response: res,
    body: res.body ? JSON.parse(res.body) : {},
    headers: res.headers
  };
}

function cookieHeaderFromSetCookie(setCookie) {
  return (Array.isArray(setCookie) ? setCookie : [setCookie])
    .filter(Boolean)
    .map((cookie) => cookie.split(";")[0])
    .join("; ");
}

async function csrf(pool) {
  const result = await request(pool, "GET", "/api/csrf");
  assert.strictEqual(result.response.statusCode, 200);
  assert.ok(result.body.csrfToken);
  return {
    token: result.body.csrfToken,
    cookie: cookieHeaderFromSetCookie(result.headers["set-cookie"])
  };
}

(async () => {
  resetApiStateForTests();
  const pool = new MockPool();

  try {
    let result = await request(pool, "GET", "/api/me");
    assert.strictEqual(result.response.statusCode, 200);
    assert.strictEqual(result.body.user, null);

    result = await request(pool, "POST", "/api/register", {
      body: {
        name: "Mallory",
        email: "mallory@example.com",
        password: "segura123"
      }
    });
    assert.strictEqual(result.response.statusCode, 403);

    const csrfData = await csrf(pool);

    result = await request(pool, "POST", "/api/register", {
      headers: { Cookie: csrfData.cookie, "X-CSRF-Token": csrfData.token },
      body: {
        name: "Ada",
        email: "ada@example.com",
        password: "segura123"
      }
    });
    assert.strictEqual(result.response.statusCode, 201);
    assert.strictEqual(result.body.user.email, "ada@example.com");
    const cookie = cookieHeaderFromSetCookie(result.headers["set-cookie"]);
    assert.ok(cookie.includes("lq_session="));

    result = await request(pool, "GET", "/api/progress", {
      headers: { Cookie: cookie }
    });
    assert.strictEqual(result.response.statusCode, 200);
    assert.deepStrictEqual(result.body, { active: 0, mode: "kid", done: [] });

    result = await request(pool, "GET", "/api/profile", {
      headers: { Cookie: cookie }
    });
    assert.strictEqual(result.response.statusCode, 200);
    assert.strictEqual(result.body.profile.display_name, "Ada");
    assert.strictEqual(result.body.profile.role, "Estudiante");

    result = await request(pool, "PUT", "/api/profile", {
      headers: { Cookie: `${cookie}; ${csrfData.cookie}`, "X-CSRF-Token": csrfData.token },
      body: {
        displayName: "Ada Linux",
        role: "Rol inválido",
        goal: "Administrar servidores",
        level: "Nivel inválido",
        bio: "Aprendiendo Linux paso a paso"
      }
    });
    assert.strictEqual(result.response.statusCode, 200);
    assert.strictEqual(result.body.profile.display_name, "Ada Linux");
    assert.strictEqual(result.body.profile.role, "Estudiante");
    assert.strictEqual(result.body.profile.level, "Inicial");

    result = await request(pool, "PUT", "/api/progress", {
      headers: { Cookie: `${cookie}; ${csrfData.cookie}`, "X-CSRF-Token": csrfData.token },
      body: { active: 4.8, mode: "pro", done: [0, 1, 4, 4, -1, "x"] }
    });
    assert.strictEqual(result.response.statusCode, 200);
    assert.deepStrictEqual(result.body, { ok: true });

    result = await request(pool, "GET", "/api/progress", {
      headers: { Cookie: cookie }
    });
    assert.strictEqual(result.response.statusCode, 200);
    assert.deepStrictEqual(result.body, { active: 4, mode: "pro", done: [0, 1, 4] });

    result = await request(pool, "POST", "/api/login", {
      headers: { Cookie: csrfData.cookie, "X-CSRF-Token": csrfData.token },
      body: { email: "ada@example.com", password: "incorrecta" }
    });
    assert.strictEqual(result.response.statusCode, 401);

    result = await request(pool, "POST", "/api/logout", {
      headers: { Cookie: `${cookie}; ${csrfData.cookie}`, "X-CSRF-Token": csrfData.token },
      body: {}
    });
    assert.strictEqual(result.response.statusCode, 200);
    assert.deepStrictEqual(result.body, { ok: true });

    result = await request(pool, "GET", "/api/progress", {
      headers: { Cookie: cookie }
    });
    assert.strictEqual(result.response.statusCode, 401);

    console.log("server.test.js: OK");
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  }
})();
