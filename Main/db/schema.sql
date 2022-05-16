DROP DATABASE IF EXISTS Employee_db;/*department_db, roles_db, employees_db;*/
CREATE DATABASE Employee_db;/*department_db, roles_db, employees_db;*/

USE Employee_db;/*department_db, roles_db, employees_db;*/

CREATE TABLE department (
    department_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dept_label VARCHAR(40) NOT NULL
);

CREATE TABLE roles (
    role_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    jobTitle VARCHAR (40) NOT NULL
);

CREATE TABLE employee (
    employee_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    role_id int,
    /*department_id INT,*/
    employee_name TEXT NOT NULL,
    FOREIGN KEY (department_id)
    REFERENCES roles(role_id)
    ON DELETE SET NULL
);