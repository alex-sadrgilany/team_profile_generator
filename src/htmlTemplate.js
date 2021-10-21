const generateManager = dataManager => {
    return `
<div class="card">
    <div class="card-header">
        <h2 class="card-title">${dataManager.getName()}</h2>
        <h3 class="card-title">${dataManager.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${dataManager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${dataManager.getEmail()}">${dataManager.getEmail()}</a></li>
            <li class="list-group-item">Office Number: ${dataManager.officeNumber}</li>
        </ul>
    </div>
</div>`;
};

const generateEngineer = dataEngineer => {
    return `
<div class="card">
    <div class="card-header">
        <h2 class="card-title">${dataEngineer.getName()}</h2>
        <h3 class="card-title">${dataEngineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${dataEngineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${dataEngineer.getEmail()}">${dataEngineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${dataEngineer.getGithub()}" target="_blank">${dataEngineer.getGithub()}</a></li>
        </ul>
    </div>
</div>`;
}

const generateIntern = dataIntern => {
    return `
<div class="card">
    <div class="card-header">
        <h2 class="card-title">${dataIntern.getName()}</h2>
        <h3 class="card-title">${dataIntern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${dataIntern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${dataIntern.getEmail()}">${dataIntern.getEmail()}</a></li>
            <li class="list-group-item">School: ${dataIntern.getSchool()}</li>
        </ul>
    </div>
</div>`;
}