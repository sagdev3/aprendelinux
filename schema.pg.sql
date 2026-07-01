-- Schema PostgreSQL para Linux Quest
-- Usar en Render PostgreSQL (o cualquier DB Postgres)
-- Ejecutar con: psql $DATABASE_URL -f schema.pg.sql

CREATE TABLE IF NOT EXISTS users (
  id        SERIAL PRIMARY KEY,
  name      VARCHAR(80)  NOT NULL,
  email     VARCHAR(190) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  password_salt VARCHAR(64)  NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS user_progress (
  user_id       INT NOT NULL PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  active_module INT NOT NULL DEFAULT 0,
  mode          VARCHAR(12) NOT NULL DEFAULT 'kid',
  done_modules  JSONB NOT NULL DEFAULT '[]',
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS student_profiles (
  user_id      INT NOT NULL PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  display_name VARCHAR(80)  NOT NULL,
  role         VARCHAR(40)  NOT NULL DEFAULT 'Estudiante',
  goal         VARCHAR(120) NOT NULL DEFAULT '',
  level        VARCHAR(40)  NOT NULL DEFAULT 'Inicial',
  bio          VARCHAR(300) NOT NULL DEFAULT '',
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS user_sessions (
  session_id VARCHAR(64)  NOT NULL PRIMARY KEY,
  user_id    INT          NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
  expires_at TIMESTAMPTZ  NOT NULL
);

CREATE INDEX IF NOT EXISTS user_sessions_user_id_idx   ON user_sessions(user_id);
CREATE INDEX IF NOT EXISTS user_sessions_expires_at_idx ON user_sessions(expires_at);

CREATE TABLE IF NOT EXISTS rate_buckets (
  bucket_key VARCHAR(200) NOT NULL PRIMARY KEY,
  count      INT          NOT NULL DEFAULT 0,
  reset_at   TIMESTAMPTZ  NOT NULL
);

CREATE INDEX IF NOT EXISTS rate_buckets_reset_at_idx ON rate_buckets(reset_at);
