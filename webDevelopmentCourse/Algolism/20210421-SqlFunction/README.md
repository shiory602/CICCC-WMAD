
> 1) Explain something you have learned today?

# Aggregate Functions - 集約関数 -
Aggregate Functions return single value.
`COUNT(column)` will not count `NULL` values.


## `SUM()`（レコードの合計）
The `SUM()` aggregate function takes the name of a column as an argument and returns the sum of all the value in that column.
```SQL
SELECT SUM(column_name)
FROM table_name;
```

## `AVG()`（平均）
The `AVG()` aggregate function returns the average value in a column.
```SQL
SELECT AVG(column_name)
FROM table_name
WHERE condition;
```

## `COUNT()`（データの合計）
The `COUNT()` aggregate function returns the total number of rows that match the specified criteria. 
**If you want to include _`NULL`_, set _`*`_ instead of 'column_name'.**
```SQL
SELECT COUNT(*) -- column_name
FROM table_name
WHERE condition;
```

## `MAX()`（最大データの取得）
The `MAX()` aggregate function takes the name of a column as an argument and returns the largest value in a column.
```SQL
SELECT MAX(column_name)
FROM table_name;
```

## `MIN()`（最小データの取得）
The `MIN()` aggregate function returns the smallest value in a column.
```SQL
SELECT MIN(column_name)
FROM table_name;
```


# Multiple Table

## Primary Key (主キー)
- A primary key column in a SQL table is used to uniquely identify each record in that table.
- A primary key cannot be NULL.
- The same value cannot re-occur in a primary key column.
Specifying a primary key allows for fast searches and integration with other tables.
### How to create a Primary key
Add the code at the end of `CREATE TABLE` in the parent table.
```SQL
CREATE TABLE parent_table_name1 (
    `ID` INT NOT NULL, -- Number for primary key
    `column_name` DATA_TYPE,
    PRIMARY KEY (ID) -- Primary Key
)
```

## Foreign Key（外部キー）
- A foreign key is a reference in one table's records to the primary key of another table.
- To maintain multiple records for a specific row, the use of foreign key plays a vital role.
### How to create a Foreign key
Add the code at the end of `CREATE TABLE` in the child table.
```SQL
CREATE TABLE child_table_name2 (
    `ID` INT NOT NULL, -- Number for primary key
    `anotherID` CHAR(5) NOT NULL, -- Number for foreign key
    `column_name` DATA_TYPE,
    `column_name` DATA_TYPE,
    `column_name` DATA_TYPE,
    PRIMARY KEY (ID), -- Primary Key
    FOREIGN KEY(anotherID) -- Foreign Key
    REFERENCES parent_table_name1(ID)
);
```

## Union Clause
The `UNION` clause is used to combine results that appear from multiple SELECT statements and filter duplicates.
```SQL
SELECT column_name
FROM table_name1
UNION
SELECT column_name
FROM table_name2
```

## Inner Join
The `JOIN` clause allows for the return of results from more than one table by joining them together with other results based on common column values specified using an `ON` clause.
`INNER JOIN` is the default `JOIN` and it will only return results matching the condition specified by `ON`.
1. Joining tables together
2. After joining, execute `SELECT` statement
```SQL
SELECT *
FROM table_name1
JOIN table_name2
ON condition: table_name1.foreignKey = table_name2.primaryKey;
```


> 2) Tell me something you found more interesting than others?

## Foreign Key has some features

### Features
- Making it an error to register a value that does not exist in the parent table
- Making it an error to delete a value that exists in a child table

### How to add the Foreign Key afterwards
1. Create a child_table without foreign key.
```SQL
CREATE TABLE child_table_name3 (
    `ID` INT NOT NULL,
    `column_name` DATA_TYPE,
    `column_name` DATA_TYPE,
    `column_name` DATA_TYPE,
    PRIMARY KEY (ID) -- Primary Key
);
```
2. Add foreign key with using `ALTER TABLE`
```SQL
ALTER TABLE child_table_name3 ADD FOREIGN KEY(no3) 
REFERENCES child_table_name1(ID);
```

### How to delete the Foreign Key
1. Check the ID of Foreign key
```SQL
SHOW CREATE TABLE sample2_employees;
```
2. Delete Foreign key with the ID
```SQL
ALTER TABLE child_table_name3 DROP FOREIGN KEY sample2_employees_ibfk_1;
```

> 3) Tell me something you found more difficult than others?

### Do NOT use quotations'' for COUNT()

EXAMPLE DATA
```SQL
CREATE TABLE Student (
    `ID` INT NOT NULL,
    `Name` CHAR(225),
    `Age`INT,
);


INSERT INTO Student
VALUE(1, 'Alice', 13);  

INSERT INTO Student
VALUE(2, 'Bob', 15);

INSERT INTO Student
VALUE(3, 'Peter', 11);

```


So this time if you use '' like `'Music'`, it is an error.
The column_name should be without any quotation marks.
```SQL
SELECT COUNT(*)
FROM Score
WHERE Music > 60;
```

Same things can say to `PRIMARY KEY`.
Do NOT use any quotation marks.
```SQL
CREATE TABLE Score(
  `StudentID` INT NOT NULL,
  `Student` CHAR(225),
  `Math` INT,
  `English` INT,
  `Science` INT,
  `Music` INT,
  PRIMARY KEY (StudentID)
  );
```

