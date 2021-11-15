const inquirer = require("inquirer");
var clear = require('clear-screen');
const chalk = require('chalk');
const { getDate, getTime, getDepartments } = require('../utils/functions');
const pressAnyKey = require('press-any-key');
const connection = require('../db/connection');
require('console.table');


function mainMenuPrompt() {
    chalk.green(
    inquirer
      .prompt({
        type: "list",
        name: "task",
        message: "What would you like to do?",
        choices: [
            "View",
            "Add",
            "Delete",
            "Update",
            "Exit"]
      })
        .then(function({ task }){
            switch (task) {
                case "View":
                    viewMenu();
                    break;
                case "Add":
                    addMenu();
                    break;
                case "Delete":
                    delMenu();
                    break;
                case "Update":
                    updMenu();
                    break;
                case "Exit":
                    chalk.green(console.log("Logging off STAFFMATRIX...."));
                    chalk.green(console.log("Goodbye Human"));
                    connection.end;
                    break;
            };
        })
    )
};

function viewMenuPrompt(){
    chalk.green(
        inquirer
          .prompt({
            type: "list",
            name: "task",
            message: "What would you like to do?",
            choices: [
                "View All Employees",
                "View Employees by Department",
                "View All Departments",
                "View All Roles",
                "View Budget",
                "Return to Main Menu"]
          })
            .then(function({ task }){
                switch (task) {
                    case "View All Employees":
                        viewAll();
                        break;
                    case "View Employees by Department":
                        viewByDep();
                        break;
                    case "View All Departments":
                        viewDeps();
                        break;
                    case "View All Roles":
                        viewRoles();
                        break;
                    case "View Budget":
                        viewBudget();
                        break;
                    case "Return to Main Menu":
                        menuScreen();
                        break;
                };
            })
        )   
};

function addMenuPrompt(){
    chalk.green(
        inquirer
          .prompt({
            type: "list",
            name: "task",
            message: "What would you like to do?",
            choices: [
                "Add Employee",
                "Add Department",
                "Add Role",
                "Return to Main Menu"]
          })
            .then(function({ task }){
                switch (task) {
                    case "Add Employee":
                        addEmp();
                        break;
                    case "Add Department":
                        addDep();
                        break;
                    case "Add Role":
                        addRole();
                        break;
                    case "Return to Main Menu":
                        menuScreen();
                        break;
                };
            })
        )   
};

function delMenuPrompt(){
    chalk.green(
        inquirer
          .prompt({
            type: "list",
            name: "task",
            message: "What would you like to do?",
            choices: [
                "Delete Employee",
                "Delete Department",
                "Delete Role",
                "Return to Main Menu"]
          })
            .then(function({ task }){
                switch (task) {
                    case "Delete Employee":
                        delEmp();
                        break;
                    case "Delete Department":
                        delDep();
                        break;
                    case "Delete Role":
                        delRole();
                        break;
                    case "Return to Main Menu":
                        menuScreen();
                        break;
                };
            })
        )   
};

function updMenuPrompt(){
    chalk.green(
        inquirer
          .prompt({
            type: "list",
            name: "task",
            message: "What would you like to do?",
            choices: [
                "Update Employee Role",
                "Update Employee Manager",
                "Return to Main Menu"]
          })
            .then(function({ task }){
                switch (task) {
                    case "Update Employee Role":
                        updEmpRole();
                        break;
                    case "Update Employee Manager":
                        updEmpMgr();
                        break;
                    case "Return to Main Menu":
                        menuScreen();
                        break;
                };
            })
        )   
};


function mainScreen() {
    clear();

    console.log(
        chalk.green(
`SIGNON                           BUSINESSCO LLC AT INDUSTRY PARK       DATE: ${getDate()}
SYSTEM: STAFFMATRIX       BUSINESS ADMINISTRATIVE INFORMATION SYSTEMS  TIME: ${getTime()}
TERMID: BOSS01                    P R O D U C T I O N  "C I C S"
=========================================================================================
Customer Assistance and Problem Reporting, call the Help desk at 612-555-1234.

  █████████  ███████████   █████████   ███████████ ███████████                     
  ███░░░░░███░█░░░███░░░█  ███░░░░░███ ░░███░░░░░░█░░███░░░░░░█                     
 ░███    ░░░ ░   ░███  ░  ░███    ░███  ░███   █ ░  ░███   █ ░                      
 ░░█████████     ░███     ░███████████  ░███████    ░███████                        
  ░░░░░░░░███    ░███     ░███░░░░░███  ░███░░░█    ░███░░░█                        
  ███    ░███    ░███     ░███    ░███  ░███  ░     ░███  ░                         
 ░░█████████     █████    █████   █████ █████       █████                           
  ░░░░░░░░░     ░░░░░    ░░░░░   ░░░░░ ░░░░░       ░░░░░                            
           ██████   ██████   █████████   ███████████ ███████████   █████ █████ █████
          ░░██████ ██████   ███░░░░░███ ░█░░░███░░░█░░███░░░░░███ ░░███ ░░███ ░░███ 
           ░███░█████░███  ░███    ░███ ░   ░███  ░  ░███    ░███  ░███  ░░███ ███  
           ░███░░███ ░███  ░███████████     ░███     ░██████████   ░███   ░░█████   
           ░███ ░░░  ░███  ░███░░░░░███     ░███     ░███░░░░░███  ░███    ███░███  
           ░███      ░███  ░███    ░███     ░███     ░███    ░███  ░███   ███ ░░███ 
           █████     █████ █████   █████    █████    █████   █████ █████ █████ █████
          ░░░░░     ░░░░░ ░░░░░   ░░░░░    ░░░░░    ░░░░░   ░░░░░ ░░░░░ ░░░░░ ░░░░░ 

`
    )
);
pressAnyKey(chalk.green("Press any key to continue..."))
    .then(() => {
        menuScreen();
    })
}

function menuScreen() {
    clear();

    console.log(
        chalk.green(
`SIGNON                           BUSINESSCO LLC AT INDUSTRY PARK       DATE: ${getDate()}
SYSTEM: STAFFMATRIX       BUSINESS ADMINISTRATIVE INFORMATION SYSTEMS  TIME: ${getTime()}
TERMID: BOSS01                          M A I N  M E N U
=========================================================================================
`))
    mainMenuPrompt();
}

function viewMenu() {
    clear();

    console.log(
        chalk.green(
`SIGNON                           BUSINESSCO LLC AT INDUSTRY PARK       DATE: ${getDate()}
SYSTEM: STAFFMATRIX       BUSINESS ADMINISTRATIVE INFORMATION SYSTEMS  TIME: ${getTime()}
TERMID: BOSS01                          V I E W  M E N U
=========================================================================================
`))
    viewMenuPrompt();

}

function addMenu() {
    clear();

    console.log(
        chalk.green(
`SIGNON                           BUSINESSCO LLC AT INDUSTRY PARK       DATE: ${getDate()}
SYSTEM: STAFFMATRIX       BUSINESS ADMINISTRATIVE INFORMATION SYSTEMS  TIME: ${getTime()}
TERMID: BOSS01                           A D D  M E N U
=========================================================================================
`))
    addMenuPrompt();

}

function delMenu() {
    clear();

    console.log(
        chalk.green(
`SIGNON                           BUSINESSCO LLC AT INDUSTRY PARK       DATE: ${getDate()}
SYSTEM: STAFFMATRIX       BUSINESS ADMINISTRATIVE INFORMATION SYSTEMS  TIME: ${getTime()}
TERMID: BOSS01                       D E L E T E  M E N U
=========================================================================================
`))
    delMenuPrompt();

}

function updMenu() {
    clear();

    console.log(
        chalk.green(
`SIGNON                           BUSINESSCO LLC AT INDUSTRY PARK       DATE: ${getDate()}
SYSTEM: STAFFMATRIX       BUSINESS ADMINISTRATIVE INFORMATION SYSTEMS  TIME: ${getTime()}
TERMID: BOSS01                        U P D A T E  M E N U
=========================================================================================
`))
    updMenuPrompt();

}

function viewAll(){
    clear();

    console.log(
        chalk.green(
`SIGNON                           BUSINESSCO LLC AT INDUSTRY PARK       DATE: ${getDate()}
SYSTEM: STAFFMATRIX       BUSINESS ADMINISTRATIVE INFORMATION SYSTEMS  TIME: ${getTime()}
TERMID: BOSS01                        A L L  E M P L O Y E E S
=========================================================================================
`))
    var query = 
    `SELECT 
        e.emp_id AS \`Employee ID\`, 
        e.first_name AS \`First Name\`, 
        e.last_name AS \`Last Name\`, 
        d.dep_name AS Department, 
        r.title AS Title, 
    FORMAT(r.salary,0) AS Salary, 
    CONCAT(m.first_name, " ", m.last_name) AS Manager
        FROM employee e
    LEFT JOIN roles r
        ON e.role_id = r.rol_id
    LEFT JOIN department d
        ON r.department_id = d.dep_id
    LEFT JOIN employee m
        ON m.emp_id = e.manager_id
    ORDER BY \`Last Name\` ASC`

    connection.query(query, function (err,res) {
        if(err) throw err;

        console.table(res);
    pressAnyKey(chalk.green("Press any key to return to View Menu..."))
        .then(() => {
            viewMenu();
        })    
    })
};

function viewDeps(){
    clear();

    console.log(
        chalk.green(
`SIGNON                           BUSINESSCO LLC AT INDUSTRY PARK       DATE: ${getDate()}
SYSTEM: STAFFMATRIX       BUSINESS ADMINISTRATIVE INFORMATION SYSTEMS  TIME: ${getTime()}
TERMID: BOSS01                     A L L  D E P A R T M E N T S
=========================================================================================
`))
    var query = 
    `SELECT 
        dep_id AS Id,  
        dep_name AS Department 
    FROM department
    ORDER BY Department ASC`

    connection.query(query, function (err,res) {
        if(err) throw err;

        console.table(res);
    pressAnyKey(chalk.green("Press any key to return to View Menu..."))
        .then(() => {
            viewMenu();
        })    
    })
};

function viewRoles(){
    clear();

    console.log(
        chalk.green(
`SIGNON                           BUSINESSCO LLC AT INDUSTRY PARK       DATE: ${getDate()}
SYSTEM: STAFFMATRIX       BUSINESS ADMINISTRATIVE INFORMATION SYSTEMS  TIME: ${getTime()}
TERMID: BOSS01                          A L L  R O L E S
=========================================================================================
`))
    var query = 
    `SELECT 
        r.rol_id AS Id,  
        r.title AS Title,
        FORMAT(r.salary,0) AS Salary,
        d.dep_name AS Department
    FROM roles
        AS r
    LEFT JOIN department d
        ON r.department_id = d.dep_id
    ORDER BY Title ASC`

    connection.query(query, function (err,res) {
        if(err) throw err;

        console.table(res);
    pressAnyKey(chalk.green("Press any key to return to View Menu..."))
        .then(() => {
            viewMenu();
        })    
    })
};

function viewByDep(){
    var query = 
    `SELECT 
        dep_id AS Id, 
        dep_name AS Name 
    FROM department 
    ORDER 
        BY Name ASC`

    connection.query(query, function (err,res) {
        if(err) throw err;

        chalk.green(console.table(res));
        const departmentChoices = res.map(data => ({
            value: data.Id, name: data.Name
        }));
        deptPrompt(departmentChoices);
    });
}

function deptPrompt(departmentChoices){;
clear();

console.log(
    chalk.green(
`SIGNON                           BUSINESSCO LLC AT INDUSTRY PARK       DATE: ${getDate()}
SYSTEM: STAFFMATRIX       BUSINESS ADMINISTRATIVE INFORMATION SYSTEMS  TIME: ${getTime()}
TERMID: BOSS01                     D E P A R T M E N T  V I E W
=========================================================================================
`))
    inquirer
        .prompt([
            {
                type: "list",
                name: "departmentId",
                message: "Which department would you like to view?",
                choices: departmentChoices
            }
        ])
        .then(function (answer) {
            clear();

            console.log(
                chalk.green(
        `SIGNON                           BUSINESSCO LLC AT INDUSTRY PARK       DATE: ${getDate()}
SYSTEM: STAFFMATRIX       BUSINESS ADMINISTRATIVE INFORMATION SYSTEMS  TIME: ${getTime()}
TERMID: BOSS01                    D E P A R T M E N T  V I E W
=========================================================================================
        `))
        var query = 
        `SELECT e.emp_id, e.first_name, e.last_name, r.title, d.dep_name AS Department 
        FROM employee 
            AS e
        JOIN roles 
            AS r
            ON e.role_id = r.rol_id
        JOIN department 
            AS d
        ON 
            d.dep_id = r.department_id
        WHERE d.dep_id = ?`

        connection.query(query, answer.departmentId, function (err, res) {
            if (err) throw err;

            chalk.green(console.table("response", res));
            pressAnyKey(chalk.green("Press any key to return to View Menu..."))
            .then(() => {
                viewMenu();
            });   
        });
    })
};

function viewBudget(){
    clear();

    console.log(
        chalk.green(
`SIGNON                           BUSINESSCO LLC AT INDUSTRY PARK       DATE: ${getDate()}
SYSTEM: STAFFMATRIX       BUSINESS ADMINISTRATIVE INFORMATION SYSTEMS  TIME: ${getTime()}
TERMID: BOSS01                             B U D G E T
=========================================================================================
`))
    var query = 
    `SELECT 
        d.dep_id AS \`Department ID\`, 
        d.dep_name as \`Department Name\`, 
    CONCAT(FORMAT(SUM(r.salary),0)) AS Budget
        FROM employee 
        AS e
    LEFT JOIN roles 
        AS r
	    ON e.role_id = r.rol_id
    LEFT JOIN department 
        AS d
        ON d.dep_id = r.department_id
    GROUP BY d.dep_id, d.dep_name`

    connection.query(query, function (err,res) {
        if(err) throw err;

        console.table(res);
    pressAnyKey(chalk.green("Press any key to return to View Menu..."))
        .then(() => {
            viewMenu();
        })    
    })
};

function addDep(){
    clear();

    console.log(
        chalk.green(
`SIGNON                           BUSINESSCO LLC AT INDUSTRY PARK       DATE: ${getDate()}
SYSTEM: STAFFMATRIX       BUSINESS ADMINISTRATIVE INFORMATION SYSTEMS  TIME: ${getTime()}
TERMID: BOSS01                      A D D  D E P A R T M E N T
=========================================================================================
`))
    inquirer.prompt([
        {
          name: "addDep",
          type: "input",
          message: "What department would you like to add?"
        }
      ]).then(function(answer) {
        connection.query(`INSERT INTO department (dep_name) VALUES ('${answer.addDep}')`, (err, res) => {
          if (err) throw err;
          pressAnyKey(chalk.green("Department added! Press any key to view departments..."))
          .then(() => {
              viewDeps();
          })    
        }) 
      })
};

function addRole(){};
clear();

console.log(
    chalk.green(
`SIGNON                           BUSINESSCO LLC AT INDUSTRY PARK       DATE: ${getDate()}
SYSTEM: STAFFMATRIX       BUSINESS ADMINISTRATIVE INFORMATION SYSTEMS  TIME: ${getTime()}
TERMID: BOSS01                            A D D  R O L E
=========================================================================================
`))
var query =
`SELECT d.dep_id, d.dep_name, FORMAT(r.salary,0) AS budget
FROM employee e
JOIN roles r
ON e.role_id = r.rol_id
JOIN department d
ON d.dep_id = r.department_id
GROUP BY d.dep_id, d.dep_name`

connection.query(query, function (err, res) {
if (err) throw err;

const departmentChoices = res.map(({ id, name }) => ({
  value: id, name: `${id} ${name}`
}));


promptAddRole(departmentChoices);
});

function promptAddRole(departmentChoices) {

    inquirer
      .prompt([
        {
          type: "input",
          name: "roleTitle",
          message: "Role title?"
        },
        {
          type: "input",
          name: "roleSalary",
          message: "Role Salary"
        },
        {
          type: "list",
          name: "departmentId",
          message: "Department?",
          choices: departmentChoices
        },
      ])
      .then(function (answer) {
  
        var query = `INSERT INTO roles SET ?`
  
        connection.query(query, {
          title: answer.title,
          salary: answer.salary,
          department_id: answer.departmentId
        },
          function (err, res) {
            if (err) throw err;
  
            console.table(res);
            pressAnyKey(chalk.green("Role added! Press any key to view roles..."))
            .then(() => {
                viewRoles();
            })  
          });
  
      });
  }

function addEmp(){
    clear();

    console.log(
        chalk.green(
`SIGNON                           BUSINESSCO LLC AT INDUSTRY PARK       DATE: ${getDate()}
SYSTEM: STAFFMATRIX       BUSINESS ADMINISTRATIVE INFORMATION SYSTEMS  TIME: ${getTime()}
TERMID: BOSS01                        A D D  E M P L O Y E E
=========================================================================================
    `))
    var query =
    `SELECT r.rol_id, r.title, r.salary 
    FROM role AS r`

  connection.query(query, function (err, res) {
    if (err) throw err;

    const roleChoices = res.map(({ id, title, salary }) => ({
      value: id, title: `${title}`, salary: `${salary}`
    }));

    promptInsert(roleChoices);
  });
}

function promptInsert(roleChoices) {

  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "What is the employee's first name?"
      },
      {
        type: "input",
        name: "last_name",
        message: "What is the employee's last name?"
      },
      {
        type: "list",
        name: "roleId",
        message: "What is the employee's role?",
        choices: roleChoices
      },
    ])
    .then(function (answer) {
      var query = `INSERT INTO employee SET ?`
      connection.query(query,
        {
          first_name: answer.first_name,
          last_name: answer.last_name,
          role_id: answer.roleId,
          manager_id: answer.managerId,
        },
        function (err, res) {
          if (err) throw err;
          console.table(res);
          pressAnyKey(chalk.green("Employee added! Press any key to view employees..."))
          .then(() => {
              viewRoles();
          })
        });
    });
}


function delEmp(){};
function delDep(){};
function delRole(){};
function updEmpRole(){};
function updEmpMgr(){};


module.exports = {mainScreen};