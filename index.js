// Included packages needed for this application.
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// An array of questions for user input.
inquirer.prompt([
    {
        type: "input",
        message: "What is the URL to your GitHub profile? [Required]",
        name: "github",
        validate: urlValidation
    },
    {
        type: "input",
        message: "What is your email? [Required]",
        name: "email",
        validate: emailValidation
    },
    {
        type: "input",
        message: "What is the title of your project? [Required]",
        name: "title",
        validate: inputValidation
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
            'PostgreSQL',
            'None'
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

        fs.writeFile("README.md", generateMarkdown(data), (error) => {
            error ? console.log(error) : console.log("Success!");
        });

    });

// Validation function for github url from user input (regex from https://regexr.com/3e6m0).
function urlValidation(data) {

    const urlPattern = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

    if (!urlPattern.test(data)) {
        return 'Please enter the required url!';
    };
    return true;
};

// Validation for required user input that is not a url or email.
function inputValidation(data) {
    if (!data) {
        return 'Please enter the required information!';
    };
    return true;
};

// Validation for user email being RFC 5322 compliant (regex from https://regex101.com/r/3uvtNl/1).
function emailValidation(data) {

    const emailPattern = /^((?:[A-Za-z0-9!#$%&'*+\-\/=?^_`{|}~]|(?<=^|\.)"|"(?=$|\.|@)|(?<=".*)[ .](?=.*")|(?<!\.)\.){1,64})(@)((?:[A-Za-z0-9.\-])*(?:[A-Za-z0-9])\.(?:[A-Za-z0-9]){2,})$/gm;

    if (!emailPattern.test(data)) {
        return 'Please enter a valid email!';
    };
    return true;
};