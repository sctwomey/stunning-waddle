// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input

inquirer.prompt([
    {
        type: "input",
        message: "What is the URL to your GitHub profile?",
        name: "github",
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email",
    },
    {
        type: "input",
        message: "What is the title of your project? (Required)",
        name: "title",
    },
    {
        type: "editor",
        message: "Describe your project.",
        name: "description",
        default: "No description provided."
    },
    {
        type: "input",
        message: "What are the installation instructions for your project?",
        name: "installation",
        default: "No installation instructions provided."
    },
    {
        type: "input",
        message: "How do you use your project?",
        name: "usage",
        default: "No usage information provided."
    },
    {
        type: "list",
        message: "Please choose a license for your project.",
        name: "license",
        choices: [
            'APACHE2.0',
            'CC',
            'CC0v1',
            'GPL',
            'GPLv3',
            'MIT',
            'PostgreSQL'
        ],
    },
    {
        type: "input",
        message: "What type of contributions will be allowed for your project?",
        name: "contributing",
        default: "No contribution information provided."
    },
    {
        type: "editor",
        message: "Are there any test instructions for your project?",
        name: "tests",
        default: "No test information provided."
    },

])
    .then((data) => {
        console.log(data);

        fs.writeFile("README.md", generateMarkdown(data), (error) => {
            error ? console.log(error) : console.log("Success!");
        });

    });
