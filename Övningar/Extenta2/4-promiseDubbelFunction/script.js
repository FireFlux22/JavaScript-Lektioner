/* Implement your solution here */

// FUNKAR! 
// getData().then(function (array) {
//   formatData(array).then(function (r) {
//     let names = JSON.parse(r);
//     renderList(names.data);
//   });
// });

/*=======================
  Varför kan jag inte skriva: 
  getData().then(function(array) {
    formatData(array);
  });
  formatData().then(function(x){
    parse bla bla 
  });
  =======================*/

getData().then(array => formatData(array))
  .then(function(x) {
    let names = JSON.parse(x);
    renderList(names.data);
  });


function renderList(array) {
  const ulEl = document.createElement("ul");
  document.querySelector("main").appendChild(ulEl);

  for (let i = 0; i < array.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = array[i].name;
    ulEl.appendChild(listItem);
  }
}

/* Do NOT touch this function */
function getData() {
  return new Promise(function (resolve, reject) {
    resolve([
      { name: 'Knatte' },
      { name: 'Fnatte' },
      { name: 'Tjatte' },
    ]);
  });
}

/* Do NOT touch this function */
function formatData(data) {
  return new Promise(function (resolve, reject) {
    resolve(JSON.stringify({
      data: data.map(x => {
        x.name = x.name.toUpperCase();
        return x;
      })
    }));
  });
}
