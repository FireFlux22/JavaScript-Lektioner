/* Implement your solution here */

let counter = 0; 

document.querySelector(".addButton").addEventListener("click", onClick);


// Overkill att skapa nya eventlyssnare varje gång vi lägger till en knapp. 
// Lägg till eventlyssnare direkt på knappen när den skapas istället
function addButtonListener() {
    let buttons = document.querySelectorAll("button");

    // börjar på 1 för att inte ta med den första knappen ("originalknappen")
    for (let i = 1; i < buttons.length; i++) {
        buttons[i].addEventListener("click", onClickDelete);
    }
}


function onClick() {
    let newButton = document.createElement("button");
    newButton.textContent = ++counter;
    document.querySelector(".container").appendChild(newButton);
    addButtonListener();
}

function onClickDelete() {
    event.target.remove();
}
