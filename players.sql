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
VALUES(7,"Carmello", "Anthony", 37, "Lakers");
VALUES(3,"Anthony", "Davis", 28, "Lakers");
VALUES(6,"Lebron", "James", 36, "Lakers");
VALUES(1,"Trevor", "Ariza", 36, "Lakers");
VALUES(7,"Kevin", "Durant", 33, "Nets");
VALUES(11,"Kyrie", "Irving", 29, "Nets");
VALUES(13,"James", "Harden", 32, "Nets");
VALUES(12,"Joe", "Harris", 30, "Nets");
VALUES(2,"LaMelo", "Ball", 20, "Hornets");
VALUES(25,"PJ", "Washington", 23, "Hornets");
VALUES(1,"John", "Wall", 31, "Rokcets");
VALUES(0,"Jalen", "Green", 19, "Rokcets");
VALUES(10,"Eric", "Gordon", 32, "Rokcets");