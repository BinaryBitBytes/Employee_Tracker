const express = require('express'); //importing the express package
const mysql = require('mysql2'); //importing mysql2 package
const inquirer = require('inquirer'); //importing the inquirer package

const PORT = process.env.PORT || 3001; //using port 3001 for the service
const app = express(); //using express as the middleware

//using express to import json for middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//connecting to all 3 of my databases on localhost
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '1qwerty6',
        database: 'Employee_db' //Employee database
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
        database: 'Employee_db' //employees database
    },
    console.log('Connected to the employees database.')
);
//! routes
// Create a employee
app.post('/api/new-employee', ({ body }, res) => {
    const sql = `INSERT INTO employee (employee_name)
      VALUES (?)`;
    const params = [body.employee_name];
    
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success adding new employee name',
        data: body
      });
    });
  });
  
  // Read all employees
  app.get('/api/employee', (req, res) => {
    const sql = `SELECT id, employee_name AS name FROM employee`;
    
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
         return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
  });
  
  // Delete a employee
  app.delete('/api/employee/:id', (req, res) => {
    const sql = `DELETE FROM employee WHERE id = ?`;
    const params = [req.params.id];
    
    db.query(sql, params, (err, result) => {
      if (err) {
        res.statusMessage(400).json({ error: res.message });
      } else if (!result.affectedRows) {
        res.json({
        message: 'Employee was not found'
        });
      } else {
        res.json({
          message: 'deleted',
          changes: result.affectedRows,
          id: req.params.id
        });
      }
    });
  });
  
  // Read list of all departments and associated jobsTitle name using LEFT JOIN
  app.get('/api/department-roles', (req, res) => {
    const sql = `SELECT department.dept_label AS department, roles.jobTitle FROM department LEFT JOIN roles ON roles.role_id = role.id ORDER BY department.dept_label;`;
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
  });
  
  // BONUS: Update roles name
  app.put('/api/roles/:id', (req, res) => {
    const sql = `UPDATE reviews SET review = ? WHERE id = ?`;
    const params = [req.body.review, req.params.id];
  
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
      } else if (!result.affectedRows) {
        res.json({
          message: 'Role was not found'
        });
      } else {
        res.json({
          message: 'success',
          data: req.body,
          changes: result.affectedRows
        });
      }
    });
  });
  
  // Default response for any other request (Not Found)
  app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  


//! Adding inquirer prompt

// inquirer
//     .prompt([
//         (Main ={
//             type: "list",
//             message: "What Would you like to do? (Use arrow Keys)",
//             choices:["View All Employees","Add Employee", "Update Employee Role", "View All Roles", "Add Role","View All Departments", "Add Department","Quit"],
//         },
//         {

//         })
//     ]); 


//!