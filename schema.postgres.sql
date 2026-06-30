CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(80) NOT NULL,
  email VARCHAR(190) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  password_salt VARCHAR(64) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS user_progress (
  user_id INTEGER NOT NULL,
  active_module INTEGER NOT NULL DEFAULT 0,
  mode VARCHAR(12) NOT NULL DEFAULT 'kid',
  done_modules JSONB NOT NULL DEFAULT '[]'::jsonb,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id),
  CONSTRAINT user_progress_user_fk
    FOREIGN KEY (user_id) REFERENCES users (id)
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS student_profiles (
  user_id INTEGER NOT NULL,
  display_name VARCHAR(80) NOT NULL,
  role VARCHAR(40) NOT NULL DEFAULT 'Estudiante',
  goal VARCHAR(120) NOT NULL DEFAULT '',
  level VARCHAR(40) NOT NULL DEFAULT 'Inicial',
  bio VARCHAR(300) NOT NULL DEFAULT '',
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id),
  CONSTRAINT student_profiles_user_fk
    FOREIGN KEY (user_id) REFERENCES users (id)
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS user_sessions (
  session_id VARCHAR(64) NOT NULL,
  user_id INTEGER NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  expires_at TIMESTAMP NOT NULL,
  PRIMARY KEY (session_id),
  CONSTRAINT user_sessions_user_fk
    FOREIGN KEY (user_id) REFERENCES users (id)
    ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS user_sessions_user_id_index ON user_sessions (user_id);
CREATE INDEX IF NOT EXISTS user_sessions_expires_at_index ON user_sessions (expires_at);

CREATE TABLE IF NOT EXISTS rate_buckets (
  bucket_key VARCHAR(200) NOT NULL,
  count INTEGER NOT NULL DEFAULT 0,
  reset_at TIMESTAMP NOT NULL,
  PRIMARY KEY (bucket_key)
);

CREATE INDEX IF NOT EXISTS rate_buckets_reset_at_index ON rate_buckets (reset_at);
