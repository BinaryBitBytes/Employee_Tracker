DROP DATABASE IF EXISTS Employee_db;/*department_db, roles_db, employees_db;*/
CREATE DATABASE Employee_db;/*department_db, roles_db, employees_db;*/
USE Employee_db;/*department_db, roles_db, employees_db;*/
CREATE TABLE employee (
    id INT NOT NULL,
    -- employee_id INT AUTO_INCREMENT PRIMARY KEY,
    role_id INT,
    employee_name TEXT NOT NULL,
    PRIMARY KEY (id)
    -- FOREIGN KEY (department_id)
   
 );
CREATE TABLE roles (
    role_id INT AUTO_INCREMENT PRIMARY KEY,
    jobTitle VARCHAR (50) NOT NULL
);
CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY,
    -- department_id INT AUTO_INCREMENT PRIMARY KEY,
    dept_label VARCHAR(40) NOT NULL
);



