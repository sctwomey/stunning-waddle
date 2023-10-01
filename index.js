// Packages needed for this application.
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// An array of questions for user input, and the write function for creating the README file.
inquirer.prompt([
    {
        type: "input",
        message: "What is your GitHub profile username?",
        name: "github",
        default: "None"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email",
        default: "None"
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
            'AFL-3.0',
            'APACHE-2.0',
            'BSL-1.0',
            'CC',
            'CC-BY-4.0',
            'MIT',
            'MPL-2.0',
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
