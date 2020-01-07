/* Implement your solution here */

// Skriv en funktion renderOrderedList som tar en array som argument. 
// Arrayen innehåller strängar. 
// Du ska rendera alla värden i en ordnad lista under main elementet i index.html.



function renderOrderedList (ar) {

    const listEl = document.createElement("ol");
    document.querySelector("main").appendChild(listEl);

    for (let i = 0; i < ar.length; i++) {
        let listItemEl = document.createElement("li");
        listItemEl.textContent = ar[i];
        listEl.appendChild(listItemEl);
    }
}

/* Do not touch the code below */
renderOrderedList(["Alpha", "Beta", "Gamma", "Delta", "Epsilon"]);