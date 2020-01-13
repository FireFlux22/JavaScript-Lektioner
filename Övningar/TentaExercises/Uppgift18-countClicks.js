
// I index.html ligger det en knapp och ett p-element. 
// Skapa en räknare i JS som håller koll på hur många gånger vi har tryckt på knappen. 
// Visa antalet i p-elementet.

let count = 0; 

document.querySelector("button").addEventListener("click", onClick);

function onClick(){
    document.querySelector("p").textContent = ++count;
}

