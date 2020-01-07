/* Implement your solution here */

// Skriv en funktion renderOrderedList som tar en array som argument. 
// Arrayen innehåller strängar. 
// Du ska rendera alla värden i en ordnad lista under main elementet i index.html.



function renderOrderedList (ar) {

    const orderedList = document.createElement("ol");
    document.querySelector("main").appendChild(orderedList);

    for (let i = 0; i < ar.length; i++) {
        let listItem = document.createElement("li");
        listItem.textContent = ar[i];
        orderedList.appendChild(listItem);
    }
}

/* Do not touch the code below */
renderOrderedList(["Alpha", "Beta", "Gamma", "Delta", "Epsilon"]);