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


module.exports = teamHtml = (
    return `
    <DOCType>

    <body>
    ${makeTeam(team)}
    </body>
    `
)
}