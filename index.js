const inquirer = require("inquirer");
const {writeFile} = require("./utils/generateHTML");
const generateIndexHTML = require("./src/htmlTemplate");

const questions = [
    {
        type: "input",
        name: "nameM",
        message: "What is the Manager's name?"
    },
    {
        type: "input",
        name: "idM",
        message: "What is the Manager's employee ID?"
    },
    {
        type: "input",
        name: "emailM",
        message: "What is the Manager's email address?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the Manager's office number?"
    },
    {
        type: "list",
        name: "continue",
        message: "Please select an option to continue",
        choices: [
            "Add an Engineer",
            "Add an Intern",
            "Finish Team"
        ]
    }
];

const promptUser = () => {
    return inquirer.prompt(questions);
}

const init = () => {
    promptUser()
    .then(answers => {
        return generateIndexHTML(answers);
    })
    .then(html => {
        return writeFile(html);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse.message);
    })
    .catch(err => {
        console.log(err);
    });
};

init();