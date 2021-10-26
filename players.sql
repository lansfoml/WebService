DROP TABLE IF EXISTS players;

CREATE TABLE players (
  id INT,
  number INT,
  firstName TEXT NOT NULL,
  lastName TEXT NOT NULL,
  age INT,
  team TEXT NOT NULL,
  is_deleted INT DEFAULT 0


);