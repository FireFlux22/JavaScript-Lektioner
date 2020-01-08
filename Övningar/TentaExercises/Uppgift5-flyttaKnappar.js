
// I index.html ligger det två knappar och en box. 
// När vi trycker på en av knapparna ska boxen antingen 
// röra sig 10 pixlar åt vänster eller höger från sin nuvarande position. 
// Lägg på eventlyssnare på knapparna och lös problemet.

//document.querySelector("main").style.position = "relative";

let currentPos = 0;

document.getElementById("left").addEventListener("click", goLeft);
document.getElementById("right").addEventListener("click", goRight);

function goLeft() {

    if(currentPos <= 0) {
        return;
    }
    currentPos -= 10;

    //document.getElementById("box").style.cssText = "position:absolute; left:" + currentPos + "px";
    document.getElementById("box").style.transform = "translateX(" + currentPos + "px)";
}

function goRight() {
    currentPos += 10;
    //document.getElementById("box").style.cssText = "position:absolute; left:" + currentPos + "px";
    document.getElementById("box").style.transform = "translateX(" + currentPos + "px)";
}

