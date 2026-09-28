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
  name       VARCHAR(12)  NOT NULL,           -- 3-12 letras/números, filtrado de insultos en la API
  score      INT UNSIGNED NOT NULL,
  created_at INT UNSIGNED NOT NULL,
  KEY idx_score (score)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Si ya creaste la tabla con la versión anterior (iniciales de 3 letras), ejecuta solo esto:
-- ALTER TABLE arcade_scores MODIFY name VARCHAR(12) NOT NULL;
