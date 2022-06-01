# Employee Tracker DB
 ### Description

Employee Tracker database that allows me to add employees, roles, and departments to keep track of employees

![MIT](https://img.shields.io/badge/license-MIT-green)
    [https://choosealicense.com/licenses/mit/](https://choosealicense.com/licenses/mit/)
    

------------------
Table of Contents:
------------------ 
* [Demo](#demo)

* [Installation](#installation)

* [Usage](#usage)

* [Contributions](#contributions)

* [Testing](#testing)

* [License](#license)

* [Questions](#questions)

### Demo
-----------------

![EmployeeTrackerSubmit](https://user-images.githubusercontent.com/94703967/171483046-cd62b6ff-d3f2-4cb8-a2fb-bcb5220b9b17.gif)


### Installation
-----------------

install Dependancies then run mysql -u root -p enter password, select use database then enter data into the table fields. Then Seed the database. After that you can run the server to view the database

### Usage
----------

>> Use employee_db, then seed the database with db/seeds.sql. You can use SELECT * from table name: employee, roles, departments to view the data bases. mysql -u root -p. 

- mysql -u root -p
- Use employee_db;
- source db/schema.sql;
- Source db/seeds.sq;
- Show tables;
- select * from department; 
- select * from employee; 
- select * from roles;   
- INSERT INTO employee (id,role_id,employee_name) Values(6,6,’Jackson’);
- INSERT INTO roles (role_id, jobTitle) Values(7,”Security”);
- INSERT INTO employee (role_id, employee_name) Values(7,’Phoenix’);
- Node server


### Contributions

------------------

BinaryBitBytes

### Testing

------------

Tested by added departments, roles, and employees.

### License
------------

* ![MIT](https://img.shields.io/badge/license-MIT-green)
    [https://choosealicense.com/licenses/mit/](https://choosealicense.com/licenses/mit/)
    

### Questions

-------------

[Github Profile](https://github.com/BinaryBitBytes)  |  To reach me via Email 117mwc117@gmail.com
