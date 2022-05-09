DROP DATABASE IF EXISTS Company_db;/*department_db, roles_db, employees_db;*/
CREATE DATABASE Company_db;/*department_db, roles_db, employees_db;*/

USE Company_db;/*department_db, roles_db, employees_db;*/

CREATE TABLE department (
    id PRIMARY KEY INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(18) NOT NULL
)

CREATE TABLE roles (
    id PRIMARY KEY INT NOT NULL AUTO_INCREMENT,
    name VARCHAR (18) NOT NULL
)

CREATE TABLE employee (
    id PRIMARY KEY INT NOT NULL AUTO_INCREMENT,
    name VARCHAR (22) NOT NULL