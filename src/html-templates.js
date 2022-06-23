//functions to create the cards in html
const makeTeam = team => {
    const generateManagerCard = manager => {
        return `
        <div class="card" style="width: 18rem;">

    <div class="card-body">
      <h5 class="card-title">${manager.name}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${manager.id}</li>
      <li class="list-group-item">${manager.officeNumber}</li>
      <a href="mailto:${manager.email}"> <li class="list-group-item">${manager.email}</li></a>
    </ul>
  </div>
        `

    }

    const html = []; 

    html.push(team.filter(employee => employee.getRole() === 'manager')
    .map(manager => generateManagerCard(manager)))

    return html.join('')
}

module.exports = teamHtml => {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Team Display</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" type="text/css" href="./dist/style.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
      </head>
    
      <body>
        ${makeTeam(team)}
      </body>

    </html>
    `;
};
