-- Build schema --------------------------------
CREATE TABLE Student (
    `ID` INT NOT NULL, -- Number for foreign key
    `Name` CHAR(225),
    `Age`INT,
    PRIMARY KEY (ID) -- Primary Key
);


INSERT INTO Student
VALUE(1, 'Alice', 13);  

INSERT INTO Student
VALUE(2, 'Bob', 15);

INSERT INTO Student
VALUE(3, 'Peter', 11);


CREATE TABLE Score(
    `ID`INT NOT NULL,
    `StudentID` INT NOT NULL,
    `Math` INT,
    `English` INT,
    `Science` INT,
    `Music` INT,
    PRIMARY KEY (ID),
    FOREIGN KEY(StudentID) -- Foreign Key
    REFERENCES Student(ID)
);

INSERT INTO Score
VALUE(1, 1, 32, 89, 62, 77);

INSERT INTO Score
VALUE(2, 2, 91, 83, 89, 76);

INSERT INTO Score
VALUE(3, 1, 89, 62, 77, 5);
-----------------------------------------

-- Run SQL -----------------------------
SELECT *
FROM Student ;

SELECT *
FROM Student
JOIN Score
ON Score.StudentID = Student.ID;

SELECT Name
FROM Student
UNION
SELECT Math
FROM Score;

SELECT SUM(Math)
FROM Score;

SELECT AVG(Math)
FROM Score;

SELECT COUNT(*)
FROM Score
WHERE Music > 60;

SELECT MAX(Math)
FROM Score;

SELECT MIN(Math)
FROM Score;

----------------------------