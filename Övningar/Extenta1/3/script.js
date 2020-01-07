/* Implement your solution here */

function renderTable(array) {
  let tableEl = document.createElement("table");
  let tHeadEl = document.createElement("thead");
  let tBodyEl = document.createElement("tbody");
  let trEl = document.createElement("tr");

  tableEl.style.border = "solid black";

  let thNameEl = document.createElement("th");
  let thOccEl = document.createElement("th");
  let thAgeEl = document.createElement("th");

  thNameEl.textContent = "Name";
  thOccEl.textContent = "Occupation";
  thAgeEl.textContent = "Age";

  document.querySelector("main").appendChild(tableEl);
  tableEl.appendChild(tHeadEl);
  tableEl.appendChild(tBodyEl);

  tHeadEl.appendChild(trEl);
  
  trEl.appendChild(thNameEl);
  trEl.appendChild(thOccEl);
  trEl.appendChild(thAgeEl);

  for (let i = 0; i < array.length; i++) {
    
    // Skapa element
    let trEl = document.createElement("tr");

    let tdNameEl = document.createElement("td");
    let tdOccEl = document.createElement("td");
    let tdAgeEl = document.createElement("td");

    // Ge elementen ett innehåll
    tdNameEl.textContent = array[i].name;
    tdOccEl.textContent = array[i].occupation;
    tdAgeEl.textContent = array[i].age;

    // Sätt ut elementen i DOMen
    tBodyEl.appendChild(trEl);
    trEl.appendChild(tdNameEl);
    trEl.appendChild(tdOccEl);
    trEl.appendChild(tdAgeEl);
  }

}

/* Do not touch anything below this line */
let data = [
  {name: 'Rachel Green', occupation: 'Waitress', age: 24},
  {name: 'Monica Geller', occupation: 'Chef', age: 24},
  {name: 'Phoebe Buffay', occupation: 'Massage therapist', age: 27},
  {name: 'Joey Tribbiani', occupation: 'Actor', age: 25},
  {name: 'Chandler Bing', occupation: 'Transponster?', age: 26},
  {name: 'Ross Geller', occupation: 'Paleontologist', age: 26},
];
renderTable(data);
