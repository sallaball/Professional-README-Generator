// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project',
    },
    {
        type: 'input',
        name: 'content',
        message: 'Create the table of content'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide step-by-step installation instruction for your project. (Required)',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log("Please enter your installation instructions!");
                return false;
            }
        }
        },
            {
                type: 'input',
                name: 'usage',
                message: 'Please provide instruction and example for use. (Required)',
                validate: usageInput => {
                    if (usageInput) {
                        return true;
                    } else {
                        console.log('Please provide your usage instructions!');
                        return false;
                    }

                }
            },
        {
            type: 'list',
            name: 'license',
            message: 'Please select which license you will use for your project',
            choices: ['agpl', 'apache', 'mit', 'No license']
        },
        {
            type: 'confirm',
            name: 'confirmContribtors',
            message: 'Will you allow others to contribute?'
            default: true
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please provide guidelines for contributing. (Required)',
            when: ({ confirmContributors }) => {
                if (confirmContributors) {
                    return true;
                } else {
                    return false;
                }
            }
            ,
            validate: contributorInput => {
                if (contributorInput) {
                    return true;
                } else {
                    console.log('Please enter contributor guidelines!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Provide instructions on how to test the app. (Required)',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please enter test instructions');
                    return false;
                }
            }
        },
    {
        type: 'input',
        name: 'githubUserName',
        message: 'What is you GitHub Username? (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
