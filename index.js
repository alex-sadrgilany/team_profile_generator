const inquirer = require("inquirer");
const {writeFile} = require("./utils/generateHTML");
const generateIndexHTML = require("./src/htmlTemplate");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const teamArray = [];

const questionsManager = [
    {
        type: "input",
        name: "nameManager",
        message: "What is the Manager's name?"
    },
    {
        type: "input",
        name: "idManager",
        message: "What is the Manager's employee ID?"
    },
    {
        type: "input",
        name: "emailManager",
        message: "What is the Manager's email address?"
    },
    {
        type: "input",
        name: "officeManager",
        message: "What is the Manager's office number?"
    }
];

const questionsEngineer = [
    {
        type: "input",
        name: "nameEngineer",
        message: "What is the Engineer's name?"
    },
    {
        type: "input",
        name: "idEngineer",
        message: "What is the Engineer's employee ID?"
    },
    {
        type: "input",
        name: "emailEngineer",
        message: "What is the Engineer's email address?"
    },
    {
        type: "input",
        name: "githubEngineer",
        message: "What is the Engineer's GitHub username?"
    }
];

const questionsIntern = [
    {
        type: "input",
        name: "nameIntern",
        message: "What is the Intern's name?"
    },
    {
        type: "input",
        name: "idIntern",
        message: "What is the Intern's employee ID?"
    },
    {
        type: "input",
        name: "emailIntern",
        message: "What is the Intern's email address?"
    },
    {
        type: "input",
        name: "schoolIntern",
        message: "What school is the Intern attending?"
    }
];

const questionsNewMember = [
    {
        type: "rawlist",
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
                console.log(teamArray);
                init();
                break;
        }
    })
}

const init = () => {
    generateIndexHTML(teamArray)
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

promptUserManager();