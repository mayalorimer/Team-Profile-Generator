//hold info for questions
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const renderTeam = require("./src/html-templates");

const teamMemberObjArr = [];

const init = () => {
    const createManager = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name', 
                message: 'What is the Managers name?',
            },
            {
                type: 'input',
                name: 'id', 
                message: 'What is the managers id',
            },
            {
                type: 'input',
                name: 'email', 
                message: 'What is the managers email',
            },
            {
                type: 'input',
                name: 'officeNumber', 
                message: 'What is the managers office number?',
            },
        ])
        .then(answers => {
            const manager = new Manager(
                answers.id, answers.name, answers.email, answers.officeNumber
            )
            teamMemberObjArr.push(manager);
            addEmployees()
        })
    };

    function addEmployees(){
        inquirer.prompt([
            {
                type: 'list',
                message: 'What employees would you like to add?',
                name: 'choice', 
                choices: ['engineer', 'intern', "I'm done"],
            },
        ])
        .then(answer => {
            switch(answer.choice){
                case 'engineer':
                    createEngineer()
                    break;
                case 'intern':
                    createIntern()
                    break;
                default:
                    buildTeam()
                    break; 
            }
        })
    }

    function createEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name', 
                message: 'What is the engineers name?',
            },
            {
                type: 'input',
                name: 'id', 
                message: 'What is the engineers id',
            },
            {
                type: 'input',
                name: 'email', 
                message: 'What is the engineers email',
            },
            {
                type: 'input',
                name: 'github', 
                message: 'What is the engineers github',
            },
        ])
        .then(answers => {
            const engineer = new Engineer(
                answers.id, answers.name, answers.email, answers.github
            )
            teamMemberObjArr.push(engineer);
            addEmployees()
        })
    }


    function buildTeam(){
        fs.writeFile("./dist/index.html", renderTeam(teamMemberObjArr), "utf-8")
    }

    createManager();

};

init();