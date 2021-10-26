DROP TABLE IF EXISTS players;

CREATE TABLE players (
  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  number INT,
  firstName TEXT NOT NULL,
  lastName TEXT NOT NULL,
  age INT,
  team TEXT NOT NULL,
  is_deleted INT DEFAULT 0


);

INSERT INTO players(id, number, firstName, lastName, age, team)
VALUES(1,3,"j", "Reddick", 21, "Heat");