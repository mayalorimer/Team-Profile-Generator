//functions to create the cards in html
const makeTeam = team => {
    const generateManagerCard = manager => {
        return `
        <div class="card" style="width: 18rem;">

        <div class="card-body">
          <h5 class="card-title">${manager.id}</h5>
          <h6>Manager</h6>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${manager.name}</li>
          <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
          <a href="mailto:${manager.email}"> <li class="list-group-item">Email: ${manager.email}</li></a>
        </ul>
      </div>
        `

    }

    
    const generateEngineerCard = engineer => {
      return `
      <div class="card" style="width: 18rem;">

      <div class="card-body">
        <h5 class="card-title">${engineer.id}</h5>
        <h6>Engineer</h6>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.name}</li>
        <a href="https://github.com/${engineer.github}" target="_blank"><li class="list-group-item">Github: ${engineer.github}</li></a>
        <a href="mailto:${engineer.email}"> <li class="list-group-item">Email: ${engineer.email}</li></a>
      </ul>
      </div>
      `

  }

  const generateInternCard = intern => {
    return `
    <div class="card" style="width: 18rem;">

    <div class="card-body">
      <h5 class="card-title">${intern.id}</h5>
      <h6>Intern</h6>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${intern.name}</li>
      <li class="list-group-item">School: ${intern.school}</li>
      <a href="mailto:${intern.email}"> <li class="list-group-item">Email: ${intern.email}</li></a>
    </ul>
    </div>
    `

  }

  
  const html = []; 

  html.push(team.filter(employee => employee.getRole() === 'Manager')
  .map(manager => generateManagerCard(manager)))

  html.push(team.filter(employee => employee.getRole() === 'Engineer')
  .map(engineer => generateEngineerCard(engineer)))

  html.push(team.filter(employee => employee.getRole() === 'Intern')
  .map(intern => generateInternCard(intern)))

  console.log(html);
  return html.join('');
  
}

module.exports = team => {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Team Display</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" type="text/css" href="style.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
      </head>
    
      
      <body>
        <header>
        <h1>My Team</h1>
        </header>

        <div class="card-holder">
          ${makeTeam(team)}
        </div>
      </body>

    </html>
    `;
};
