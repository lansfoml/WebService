-- Remove any existing database and user.
DROP DATABASE IF EXISTS players;
DROP USER IF EXISTS db_user@localhost;

-- Create Unforget database and user. Ensure Unicode is fully supported.
CREATE DATABASE players CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
CREATE USER db_user@localhost IDENTIFIED WITH mysql_native_password BY 'password';
GRANT ALL PRIVILEGES ON unforget.* TO db_user@localhost;
