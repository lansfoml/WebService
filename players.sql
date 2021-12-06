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
INSERT INTO players(number, firstName, lastName, age, team)
VALUES(7,"Carmello", "Anthony", 37, "Lakers", "PF");
INSERT INTO players(number, firstName, lastName, age, team)
VALUES(3,"Anthony", "Davis", 28, "Lakers", "PF");
INSERT INTO players(number, firstName, lastName, age, team)
VALUES(6,"Lebron", "James", 36, "Lakers", "SF");
INSERT INTO players(number, firstName, lastName, age, team)
VALUES(1,"Trevor", "Ariza", 36, "Lakers", "SF");
INSERT INTO players(number, firstName, lastName, age, team)
VALUES(1,"Avery", "Bradley", 31, "Lakers", "PG");
INSERT INTO players(number, firstName, lastName, age, team)
VALUES(9,"Kent", "Bazemore", 23, "Lakers", "SF");
INSERT INTO players(number, firstName, lastName, age, team)
VALUES(10,"Deandre", "Jordan", 33, "Lakers", "C");
INSERT INTO players(number, firstName, lastName, age, team)
VALUES(0,"Russell", "Westbrook", 33, "Lakers", "PG");


--NETS
INSERT INTO players(number, firstName, lastName, age, team)
VALUES(7,"Kevin", "Durant", 33, "Nets");
INSERT INTO players(number, firstName, lastName, age, team)
VALUES(11,"Kyrie", "Irving", 29, "Nets");
INSERT INTO players(number, firstName, lastName, age, team)
VALUES(13,"James", "Harden", 32, "Nets");
INSERT INTO players(number, firstName, lastName, age, team)
VALUES(12,"Joe", "Harris", 30, "Nets");

--HORNETS
INSERT INTO players(number, firstName, lastName, age, team)
VALUES(2,"LaMelo", "Ball", 20, "Hornets");
INSERT INTO players(number, firstName, lastName, age, team)
VALUES(25,"PJ", "Washington", 23, "Hornets");
INSERT INTO players(number, firstName, lastName, age, team)
VALUES(1,"John", "Wall", 31, "Rockets");
INSERT INTO players(number, firstName, lastName, age, team)
VALUES(0,"Jalen", "Green", 19, "Rockets");
INSERT INTO players(number, firstName, lastName, age, team)
VALUES(10,"Eric", "Gordon", 32, "Rockets");