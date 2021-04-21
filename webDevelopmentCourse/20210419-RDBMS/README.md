2021/04/19


> 1) Explain something you have learned today?
RDBMS - Relational DataBase Management System -
SQL is case insensitive language
- DDL: Data Definition Language -> create/change/delete entire table
- DML: Data Manipulation Language -> create/change/delete data
- DCL: Data Control Language -> create/change/delete authority

## How to manipulate tables of database.
### Add data
```SQL
INSERT INTO table_name ( column_name )
VALUE ( value );
```
You don't need to put `id` since it is added by auto increment.
If you don't put `column_name`, the place would be `NULL`.

### Create a list of NULL/NOT NULL
`NULL`: there is no value
```SQL
SELECT column_name
FROM table_name
WHERE column_name IS NULL;
```
```SQL
SELECT column_name
FROM table_name
WHERE column_name IS NOT NULL;
```
You cannot use `=` when you use NULL.

### Update columns of records
```SQL
UPDATE table_name
SET column = value
WHERE condition;
```
If you don't put `WHERE`, all records in the table would be updated.

### Delete records of the table
```SQL
DELETE FROM table_name WHERE condition;
```
If you don't put `WHERE`, all table data would be deleted.

### Specify the maximum number of records to retrieve.
```SQL
SELECT column_name
FROM table_name
WHERE condition
LIMIT numbers;
```

### Select all records in the table
```SQL
SELECT * FROM table_name
LIMIT numbers;
```

### Return the MIN/MAX value of the selected column
```SQL
SELECT MIN( column_name )
FROM table_name
WHERE condition;
```
```SQL
SELECT MAX( column_name )
FROM table_name
WHERE condition;
```




> 2) Tell me something you found more interesting than others?
You can save data such as text or numbers in a table.
There is not only one language to manipulate the data. This time I'll learn MySQL.


> 3) Tell me something you found more difficult than others?
Sometime if you don't put `WHERE`, you change/delete all data.
I feel it is a little bit dangerous.