

// I index.html ligger det en knapp i en box. 
// Det ligger också ett p-element ovanför boxen. 
// Skriv JS kod så att när vi trycker på boxen ska 
// texten "Tryckte på boxen" visas i p-elementet. 
// När vi trycker på knappen ska det istället visas "Tryckte på knappen". 
// Som vanligt, du får inte lov att ändra HTML strukturen.

document.querySelector("button").addEventListener("click", clickButton);
document.querySelector("div").addEventListener("click", clickBox);

function clickButton() {
    document.querySelector("p").textContent = "Tryckte på knappen";
    event.stopPropagation(); // så att inte nästa function körs! 
}

function clickBox() {
    document.querySelector("p").textContent = "Tryckte på boxen";
}
