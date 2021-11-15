const inquirer = require("inquirer");
const chalk = require('chalk');

function mainMenuPrompt() {
    chalk.green(
    inquirer
      .prompt({
        type: "list",
        name: "task",
        message: "Would you like to do?",
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

function viewMenuPrompt(){};

function addMenuPrompt(){};
function delMenuPrompt(){};
function updMenuPrompt(){};

module.exports = {mainMenuPrompt, addMenuPrompt, delMenuPrompt, updMenuPrompt};