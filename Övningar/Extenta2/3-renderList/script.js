/* Implement your solution here */

function renderTable(array) {
  const table = document.createElement("table");
  table.style.border = "thin solid black";

  const tHead = document.createElement("thead");
  const tBody = document.createElement("tbody");
  const tr = document.createElement("tr");
  
  const thName = document.createElement("th");
  thName.textContent = "Name";
  
  const thGender = document.createElement("th");
  thGender.textContent = "Gender";
  
  const thAge = document.createElement("th");
  thAge.textContent = "Age";

  document.querySelector("main").appendChild(table);
  table.appendChild(tHead);
  table.appendChild(tBody);
  tHead.appendChild(tr);
  tr.appendChild(thName);
  tr.appendChild(thGender);
  tr.appendChild(thAge);

  for (let i = 0; i < array.length; i++) {
    let row = document.createElement("tr");

    let tdName = document.createElement("td");
    tdName.textContent = array[i].name;

    let tdGender = document.createElement("td");
    tdGender.textContent = array[i].gender;

    let tdAge = document.createElement("td");
    tdAge.textContent = array[i].age;

    tBody.appendChild(row);
    row.appendChild(tdName);
    row.appendChild(tdGender);
    row.appendChild(tdAge);
  }
}

/* Do not touch anything below this line */
let data = [
  {name: 'Rachel Green', gender: 'Female', age: 24},
  {name: 'Monica Geller', gender: 'Female', age: 24},
  {name: 'Phoebe Buffay', gender: 'Female', age: 27},
  {name: 'Joey Tribbiani', gender: 'Male', age: 25},
  {name: 'Chandler Bing', gender: 'Male', age: 26},
  {name: 'Ross Geller', gender: 'Male', age: 26},
];
renderTable(data);
