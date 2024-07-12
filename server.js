const inquirer = require("inquirer");
const mysql = require("mysql");

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employees_db'
},
console.log('Connected to the employees_db database.')
);

async function promptManager(){
    const answers= await inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'What Would you like to do?',
            choices: [
                'View All Employees',
                'Add Employee',
                'Update Employee Role',
                'View All Roles',
                'Add Role',
                'Update Role',
                'View All Departments',
                'Add Department',
                'Update Department',
            ]
        }
    ]);
  
    if (answers.menu === "View all departments"){
        db.query(`SELECT * FROM department`,(err,result)=>{
            if (err) throw err
            console.table (result)
            promptManager();        
        });
    }

}
