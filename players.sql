DROP TABLE IF EXISTS players;

CREATE TABLE players (
  id INT,
  number INT,
  firstName VARCHAR(255),
  lastName VARCHAR(255),
  age INT,
  team VARCHAR(255),
  is_deleted INT DEFAULT 0


);