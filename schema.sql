CREATE DATABASE IF NOT EXISTS linux_quest CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE linux_quest;

CREATE TABLE IF NOT EXISTS users (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(80) NOT NULL,
  email VARCHAR(190) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  password_salt VARCHAR(64) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY users_email_unique (email)
);

CREATE TABLE IF NOT EXISTS user_progress (
  user_id INT UNSIGNED NOT NULL,
  active_module INT UNSIGNED NOT NULL DEFAULT 0,
  mode VARCHAR(12) NOT NULL DEFAULT 'kid',
  done_modules JSON NOT NULL,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id),
  CONSTRAINT user_progress_user_fk
    FOREIGN KEY (user_id) REFERENCES users (id)
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS student_profiles (
  user_id INT UNSIGNED NOT NULL,
  display_name VARCHAR(80) NOT NULL,
  role VARCHAR(40) NOT NULL DEFAULT 'Estudiante',
  goal VARCHAR(120) NOT NULL DEFAULT '',
  level VARCHAR(40) NOT NULL DEFAULT 'Inicial',
  bio VARCHAR(300) NOT NULL DEFAULT '',
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id),
  CONSTRAINT student_profiles_user_fk
    FOREIGN KEY (user_id) REFERENCES users (id)
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS user_sessions (
  session_id VARCHAR(64) NOT NULL,
  user_id INT UNSIGNED NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  expires_at TIMESTAMP NOT NULL,
  PRIMARY KEY (session_id),
  KEY user_sessions_user_id_index (user_id),
  KEY user_sessions_expires_at_index (expires_at),
  CONSTRAINT user_sessions_user_fk
    FOREIGN KEY (user_id) REFERENCES users (id)
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS rate_buckets (
  bucket_key VARCHAR(200) NOT NULL,
  count INT UNSIGNED NOT NULL DEFAULT 0,
  reset_at TIMESTAMP NOT NULL,
  PRIMARY KEY (bucket_key),
  KEY rate_buckets_reset_at_index (reset_at)
);
