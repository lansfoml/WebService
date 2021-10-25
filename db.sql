-- Remove any existing database and user.
DROP DATABASE IF EXISTS db;
DROP USER IF EXISTS db_user@localhost;

-- Create Unforget database and user. Ensure Unicode is fully supported.
CREATE DATABASE db CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
CREATE USER db_user@localhost IDENTIFIED WITH mysql_native_password BY 'Vavenom27';
GRANT ALL PRIVILEGES ON db.* TO db_user@localhost;


DROP TABLE IF EXISTS team;

CREATE TABLE team (
  id SERIAL PRIMARY KEY,
  number INT,
  name VARCHAR(255),
  day INT,

  is_deleted INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);