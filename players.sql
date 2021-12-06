DROP TABLE IF EXISTS players;

CREATE TABLE players (
  id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
  number INT,
  firstName TEXT NOT NULL,
  lastName TEXT NOT NULL,
  age INT,
  team TEXT NOT NULL,
  position TEXT NOT NULL,
  is_deleted INT DEFAULT 0


);



-- LAKERS
INSERT INTO players(number, firstName, lastName, age, team, position)
VALUES(7,"Carmello", "Anthony", 37, "Lakers", "PF");
INSERT INTO players(number, firstName, lastName, age, team, position)
VALUES(3,"Anthony", "Davis", 28, "Lakers", "PF");
INSERT INTO players(number, firstName, lastName, age, team, position)
VALUES(6,"Lebron", "James", 36, "Lakers", "SF");
INSERT INTO players(number, firstName, lastName, age, team, position)
VALUES(1,"Trevor", "Ariza", 36, "Lakers", "SF");
INSERT INTO players(number, firstName, lastName, age, team, position)
VALUES(1,"Avery", "Bradley", 31, "Lakers", "PG");
INSERT INTO players(number, firstName, lastName, age, team, position)
VALUES(9,"Kent", "Bazemore", 23, "Lakers", "SF");
INSERT INTO players(number, firstName, lastName, age, team, position)
VALUES(10,"Deandre", "Jordan", 33, "Lakers", "C");
INSERT INTO players(number, firstName, lastName, age, team, position)
VALUES(0,"Russell", "Westbrook", 33, "Lakers", "PG");

