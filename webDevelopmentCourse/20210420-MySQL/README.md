
1) Explain something you have learned today?

# My SQL

## SQL Manipulation

## Column Constraints(制約)
- PRIMARY KEY: uniquely identify the row
- UNIQUE: every row has different value(重複しない)
- NOT NULL: column must have a value
- DEFAULT: assign a default value for the column when no value is specified

### Create Table Statement
The CREATE TABLE statement creates a new table in a database.
```SQL
CREATE TABLE table_name (
    `column_name` data_type,
    `column_name` data_type
);
```

### Add a record
The INSERT INTO is used to add a new record(row) to a table.
- Insert into columns in order
```SQL
INSERT INTO table_name
VALUES ( value1, value2 );
```
- Insert into columns by name
```SQL
INSERT INTO table_name ( column1, column2)
VALUES ( value1, value2 );
```

### Add a column (change the table)
The ALTER TABLE statement is DDL, and it is used to modify the columns of an existing table.
```SQL
ALTER TABLE table_name
ADD column_name data_type;
```

### Delete a record in the table
The DELETE statement is used to delete records(rows) in a table.
```SQL
DELETE FROM table_name
WHERE some_column = some_value;
```
If the WHERE clause is omitted, all records will be deleted.

### Update the data in the table
The UPDATE statement is DML, and it is used to edi records(rows) in a table.
```SQL
UPDATE table_name
SET column1 = value1, column2 = value2
WHERE some_column = some_value;
```

## Queries

### Multiple conditions
The AND operator allows multiple conditions to be combined.
Records must match both conditions.
```SQL
SELECT column_name
FROM table_name
WHERE some_column = some_value
    AND some_column = some_value;
```
If you use `OR` instead of `AND`, it is also multiple conditions but records does not have to match both.

### Rename column name
Columns or tables can be aliased using the AS clause. This allows columns or tables to be specifically renamed in the returned result set.
```SQL
SELECT column_name AS 'another_name'
FROM table_name;
```

### Selects all data words starting with the specified character.
The % wildcard can be used in a LIKE operator pattern to math zero or more unspecified character(s).
```SQL
SELECT *
FROM table_name
WHERE column_name LIKE 'The%';
```

### Get all data
The SELECT * statement returns all columns from the provided table in the result set.
```SQL
SELECT *
FROM table_name;
```
You can output the table with using this.

### Selects all data starting with any character and followed by the specified character
The _ wildcard can be used in a LIKE operator pattern to match any single unspecified character.
```SQL
SELECT column_name
FROM table_name
WHERE column_name LIKE '_ove';
```

### Sorting data
The ORDER BY clause can be used to sort the result set by a particular column either alphabetically or numerically.
- DESC is a keyword used to sort the results in descending order.
- ASC is a keyword used to sort the results in ascending order. (default)
```SQL
SELECT *
FROM table_name
ORDER BY birth_date DESC;
```

### Characters ending in "pudding
The LIKE operator can be used inside of a WHERE clause to match a specified pattern.
```SQL
SELECT column_name
FROM table_name
WHERE column_name LIKE 'Star%';
```
- 'Star%' -> get data starting with character 'Star'
- '%Star' -> get data ending with character 'Star'

### Omit and retrieve duplicate data
The SELECT DISTINCT statement is used to return only distinct (different) values.
```SQL
SELECT DISTINCT column_name
FROM table_name;
```

### Selects all data with specified range
The BETWEEN operator can be used to filter by a range of values. The range of values can be text, numbers, or date data.
It is inclusive: begin and end values are included.
```SQL
SELECT *
FROM table_name
WHERE column_name BETWEEN value1 AND value2;
```

### Extract only those records that fulfill a specified condition
The WHERE clause is used to filter records(rows) that match a certain condition.


2) Tell me something you found more interesting than others?

You can use wildcard for selecting all data words starting/ending with the specified character.
Also if you use `NOT` operator before using LIKE operator, you can specify the opposite of what you specified.


3) Tell me something you found more difficult than others?

These three are all similar manipulation for me, and make me confused at first.

### Differences between INSERT, ALTER, and UPDATE
- INSERT INTO -> Add record
- ALTER TABLE = DDL -> Change the table(Add column)
- UPDATE = DML -> Change data in the table