const inquirer = require("inquirer");
const {writeFile} = require("./utils/generateHTML");
const generateIndexHTML = require("./src/htmlTemplate");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const validator = require("email-validator");

const teamArray = [];

const questionsManager = [
    {
        type: "input",
        name: "nameManager",
        message: "What is the Manager's name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            }
            else {
                console.log('\x1b[31m', " You must enter a name!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "idManager",
        message: "What is the Manager's employee ID?",
        validate: idInput => {
            if (!isNaN(idInput)) {
                return true;
            }
            else {
                console.log('\x1b[31m', " You must enter a number for the manager's ID");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "emailManager",
        message: "What is the Manager's email address?",
        validate: emailInput => {
            if (validator.validate(emailInput)) {
                return true;
            }
            else {
                console.log('\x1b[31m', " You must enter a valid email address!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "officeManager",
        message: "What is the Manager's office number?",
        validate: officeInput => {
            if (!isNaN(officeInput)) {
                return true;
            }
            else {
                console.log('\x1b[31m', " You must a number for the manager's office number!");
                return false;
            }
        }
    }
];

const questionsEngineer = [
    {
        type: "input",
        name: "nameEngineer",
        message: "What is the Engineer's name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            }
            else {
                console.log('\x1b[31m', " You must enter a name!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "idEngineer",
        message: "What is the Engineer's employee ID?",
        validate: idInput => {
            if (!isNaN(idInput)) {
                return true;
            }
            else {
                console.log('\x1b[31m', " You must enter a number for the Engineer's ID");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "emailEngineer",
        message: "What is the Engineer's email address?",
        validate: emailInput => {
            if (validator.validate(emailInput)) {
                return true;
            }
            else {
                console.log('\x1b[31m', " You must enter a valid email address!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "githubEngineer",
        message: "What is the Engineer's GitHub username?",
        validate: githubInput => {
            if (githubInput) {
                return true;
            }
            else {
                console.log('\x1b[31m', " You must enter a GitHub username!");
                return false;
            }
        }
    }
];

const questionsIntern = [
    {
        type: "input",
        name: "nameIntern",
        message: "What is the Intern's name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            }
            else {
                console.log('\x1b[31m', " You must enter a name!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "idIntern",
        message: "What is the Intern's employee ID?",
        validate: idInput => {
            if (!isNaN(idInput)) {
                return true;
            }
            else {
                console.log('\x1b[31m', " You must enter a number for the Intern's ID");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "emailIntern",
        message: "What is the Intern's email address?",
        validate: emailInput => {
            if (validator.validate(emailInput)) {
                return true;
            }
            else {
                console.log('\x1b[31m', " You must enter a valid email address!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "schoolIntern",
        message: "What school is the Intern attending?",
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            }
            else {
                console.log('\x1b[31m', " You must a number for the manager's office number!");
                return false;
            }
        }
    }
];

const questionsNewMember = [
    {
        type: "list",
        name: "newMember",
        message: "Please select a new member to add to your team.",
        choices: [
            "Add an Engineer",
            "Add an Intern",
            "I'm finished building my Team Profile"
        ]
    }
];

const promptUserManager = () => {
    inquirer.prompt(questionsManager)
    .then(answers => {
        const manager = new Manager(answers.nameManager, answers.idManager, answers.emailManager, answers.officeManager);
        teamArray.push(manager);
        addMember();
    })
    .catch(err => {
        console.log(err);
    });
};

const promptUserEngineer = () => {
    inquirer.prompt(questionsEngineer)
    .then(answers => {
        const engineer = new Engineer(answers.nameEngineer, answers.idEngineer, answers.emailEngineer, answers.githubEngineer);
        teamArray.push(engineer);
        addMember();
    })
    .catch(err => {
        console.log(err);
    });
};

const promptUserIntern = () => {
    inquirer.prompt(questionsIntern)
    .then(answers => {
        const intern = new Intern(answers.nameIntern, answers.idIntern, answers.emailIntern, answers.schoolIntern);
        teamArray.push(intern);
        addMember();
    })
    .catch(err => {
        console.log(err);
    });
};

const addMember = () => {
    inquirer.prompt(questionsNewMember)
    .then(answers => {
        switch(answers.newMember) {
            case "Add an Engineer":
                promptUserEngineer();
                break;
            case "Add an Intern":
                promptUserIntern();
                break;
            case "I'm finished building my Team Profile":
                finishHTML();
                break;
        }
    })
};

const finishHTML = () => {
    writeFile(generateIndexHTML(teamArray))
    .then(writeFileResponse => {
        console.log('\x1b[32m', writeFileResponse.message),
        '\n';
        console.log('\x1b[32m', "You can find your new Team Profile index.html in the 'dist' folder!");
    })
    .catch(err => {
        console.log(err);
    });
};

promptUserManager();