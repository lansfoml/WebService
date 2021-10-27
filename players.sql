DROP TABLE IF EXISTS players;

CREATE TABLE players (
  id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
  number INT,
  firstName TEXT NOT NULL,
  lastName TEXT NOT NULL,
  age INT,
  team TEXT NOT NULL,
  is_deleted INT DEFAULT 0


);

INSERT INTO players(number, firstName, lastName, age, team)
VALUES(3,"j", "Reddick", 21, "Heat");