/* Implement your solution here */


function renderList(ar) {
  const createList = document.createElement("ul");
  document.querySelector("main").appendChild(createList);

  for (let i = 0; i < ar.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = ar[i].name;
    createList.appendChild(listItem);
  }
}

getData()
  .then(function (list) {
    const names = JSON.parse(list);
    renderList(names.data);
  });


/* Do NOT touch this function */
function getData() {
  return new Promise(function (resolve, reject) {
    resolve(JSON.stringify({
      data: [
        { name: 'Knatte' },
        { name: 'Fnatte' },
        { name: 'Tjatte' },
      ],
    }));
  });
}
