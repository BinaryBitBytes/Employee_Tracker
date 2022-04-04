DROP DATABASE IF EXISTS department_db, roles_db, employees_db;
CREATE DATABASE department_db, roles_db, employees_db;

USE department_db, roles_db, employees_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(18) NOT NULL
)

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (18) NOT NULL
)

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (22) NOT NULL