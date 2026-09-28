-- Ranking global de BUG RUN. Ejecutar una vez en phpMyAdmin (hPanel → Bases de datos).

CREATE TABLE IF NOT EXISTS arcade_runs (
  token      CHAR(32)     NOT NULL PRIMARY KEY,
  ip_hash    CHAR(64)     NOT NULL,           -- HMAC de la IP, nunca la IP en claro; se borra a las 24 h
  started_at INT UNSIGNED NOT NULL,
  used       TINYINT(1)   NOT NULL DEFAULT 0,
  KEY idx_ip_time (ip_hash, started_at),
  KEY idx_started (started_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS arcade_scores (
  id         INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name       CHAR(3)      NOT NULL,           -- 3 letras A-Z, estilo recreativa
  score      INT UNSIGNED NOT NULL,
  created_at INT UNSIGNED NOT NULL,
  KEY idx_score (score)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
