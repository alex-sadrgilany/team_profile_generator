// function that will generate the proper html output with the data the user entered for a manager
const generateManager = dataManager => {
    return `
                <div class="card">
                    <div class="card-header">
                        <h2 class="card-title">${dataManager.getName()}</h2>
                        <h3 class="card-title"><i class="fas fa-briefcase"></i> ${dataManager.getRole()}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item"><span class="card-subtitle">Employee ID:</span> ${dataManager.getId()}</li>
                            <li class="list-group-item"><span class="card-subtitle">Email:</span> <a href="mailto:${dataManager.getEmail()}">${dataManager.getEmail()}</a></li>
                            <li class="list-group-item"><span class="card-subtitle">Office Number:</span> ${dataManager.officeNumber}</li>
                        </ul>
                    </div>
                </div>`;
};

// function that will generate the proper html for a team engineer
const generateEngineer = dataEngineer => {
    return `
                <div class="card">
                    <div class="card-header">
                        <h2 class="card-title">${dataEngineer.getName()}</h2>
                        <h3 class="card-title"><i class="fas fa-tools"></i> ${dataEngineer.getRole()}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item"><span class="card-subtitle">Employee ID:</span> ${dataEngineer.getId()}</li>
                            <li class="list-group-item"><span class="card-subtitle">Email:</span> <a href="mailto:${dataEngineer.getEmail()}">${dataEngineer.getEmail()}</a></li>
                            <li class="list-group-item"><span class="card-subtitle">GitHub:</span> <a href="https://github.com/${dataEngineer.getGithub()}" target="_blank">${dataEngineer.getGithub()}</a></li>
                        </ul>
                    </div>
                </div>`;
};

// function that will generate the proper html for a team intern
const generateIntern = dataIntern => {
    return `
                <div class="card">
                    <div class="card-header">
                        <h2 class="card-title">${dataIntern.getName()}</h2>
                        <h3 class="card-title"><i class="fas fa-user-graduate"></i> ${dataIntern.getRole()}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item"><span class="card-subtitle">Employee ID:</span> ${dataIntern.getId()}</li>
                            <li class="list-group-item"><span class="card-subtitle">Email:</span> <a href="mailto:${dataIntern.getEmail()}">${dataIntern.getEmail()}</a></li>
                            <li class="list-group-item"><span class="card-subtitle">School:</span> ${dataIntern.getSchool()}</li>
                        </ul>
                    </div>
                </div>`;
};

// function to generate each card in the team's array and return the html all joined together
const generateCards = (array) => {
    const html = [];

    html.push(array
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(array
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(array
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );
    return html.join("");
};

// final function to generate the complete webpage
const generateWebPage = team => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kanit&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.13.0/css/all.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="./style.css"/>
    <title>My Team</title>
</head>
<body>
    <header class="jumbotron">
        <h1 class="display-4 text-center">My Team</h1>
    </header>
    <main>
        <div class="container">
            <div class="row justify-content-center">${generateCards(team)}
            </div>
        </div>
    </main>
</body>
</html>`;
};

module.exports = generateWebPage;