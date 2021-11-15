var clear = require('clear-screen');
const chalk = require('chalk');
const { getDate } = require('../utils/functions');
const { getTime } = require('../utils/functions');
const pressAnyKey = require('press-any-key');
const { mainMenuPrompt, viewMenuPrompt, addMenuPrompt, delMenuPrompt, updMenuPrompt } = require('./inquirer');
const Connection = require('mysql2/typings/mysql/lib/Connection');
require('console.table');

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

function viewByDep(){};
function viewByManager(){};
function viewBudget(){};


module.exports = {mainScreen, menuScreen, viewMenu, addMenu, delMenu, updMenu}