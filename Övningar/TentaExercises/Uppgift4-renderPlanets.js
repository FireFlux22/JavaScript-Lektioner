/* Implement your solution here */

// Skriv en funktion renderPlanets som tar en array med objekt som argument. 
// Funktionen ska skapa en tabell som listar alla planeter givna i arrayen. 
// Skapa 3 kolumner där du visar allt i objektet förutom hur många månar planeterna har. 
// Tabellen ska renderas i main elementet.

function renderPlanets(ar) {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    const row = document.createElement("tr");

    const thName = document.createElement("th");
    const thMass = document.createElement("th");
    const thPeriod = document.createElement("th");

    thName.textContent = "Name";
    thMass.textContent = "Mass";
    thPeriod.textContent = "Period";

    document.querySelector("main").appendChild(table);
    table.appendChild(thead);
    table.appendChild(tbody);
    thead.appendChild(row);

    row.appendChild(thName);
    row.appendChild(thMass);
    row.appendChild(thPeriod);

    for (let i = 0; i < ar.length; i++) {
        const rowBody = document.createElement("tr");
        const tdName = document.createElement("td");
        const tdMass = document.createElement("td");
        const tdPeriod = document.createElement("td");

        tdName.textContent = ar[i].name;
        tdMass.textContent = ar[i].mass;
        tdPeriod.textContent = ar[i].period;

        tbody.appendChild(rowBody);
        rowBody.appendChild(tdName);
        rowBody.appendChild(tdMass);
        rowBody.appendChild(tdPeriod);
    }
}


/* Do not touch the code below this line */
renderPlanets([
    {name: 'Mercury', mass:  0.06, period: 0.24, moons: 0},
    {name: 'Venus', mass: 0.82, period: 0.62, moons: 0},
    {name: 'Earth', mass: 1.0, period: 1.0, moons: 1},
    {name: 'Mars', mass: 0.11, period: 1.88, moons: 2},
    {name: 'Jupiter', mass: 317.8, period: 11.86, moons: 79},
    {name: 'Saturn', mass: 95.2, period: 29.46, moons: 62},
    {name: 'Uranus', mass: 14.6, period: 84.01, moons: 27},
    {name: 'Neptune', mass: 17.2, period: 164.8, moons: 14},
  ]);