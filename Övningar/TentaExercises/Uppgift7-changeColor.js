
// I index.html ligger det ett input-fält. 
// Du ska skriva kod så att om man skriver in en färg i fältet 
// (T.ex. "red" eller #FF0000) så ska du ändra bakgrundsfärgen 
// på .container elementet till att vara den färgen vi har skrivit in.

document.getElementById("color").addEventListener("change", changeColor);

// kan även använda "input"

function changeColor(e) {
    document.querySelector(".container").style.backgroundColor 
        = document.getElementById("color").value;
}