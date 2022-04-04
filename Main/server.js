const mysql = require('mysql2'); //importing mysql2 package
const express = require('express'); //importing the express package
const inquirer = require('inquirer'); //importing the inquirer package

const PORT = 3001; //using port 3001 for the service
const app = express(); //using express as the middleware

//using express to import json for middleware
app.use(express.json());

//connecting to all 3 of my databases on localhost
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '1qwerty6',
        database: 'department_db' //department database
    },
    console.log('Connected to the department database.'),
    {
        host: 'localhost',
        user: 'root',
        password: '1qwerty6',
        database: 'roles_db' //roles database
    },
    console.log('Connected to the roles database.'),
    {
        host: 'localhost',
        user: 'root',
        password: '1qwerty6',
        database: 'employees_db' //employees database
    },
    console.log('Connected to the employees database.')
);
//! Adding inquirer prompt
inquirer
    .prompt([
        (Main ={
            type: "list",
            message: "What Would you like to do? (Use arrow Keys)",
            choices:["View All Employees","Add Employee", "Update Employee Role", "View All Roles", "Add Role","View All Departments", "Add Department","Quit"],
        },
        {

        })
    ]); 


//!
db.query('If errors in databases they will be deleted', (error,result) => {
    if (error) {
        console.log(error);
    }
    console.log(result);
    });

//using the query method to select the databases
db.query('SELECT * FROM departments, roles, & employees databases', 
    function (error, results) {
        console.log(results);
    });
    
//Returning an error for an invalid request using destination not found error 404
app.use((req,res) => {
    res.status(404).end(); // end method closes the stream if the error arises for no destination
});

app.listen(PORT, () => {
    console.log(`The server is running at 127.0.0.1:${PORT} AKA the localhost on port ${PORT}`);
});