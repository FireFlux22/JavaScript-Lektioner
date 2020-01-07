/* Implement your solution here */

document.querySelector(".red").addEventListener("click", turnRed);

function turnRed () {
    document.querySelector(".container").style.backgroundColor = "red";
}

document.querySelector(".blue").addEventListener("click", turnBlue);

function turnBlue () {
    document.querySelector(".container").style.backgroundColor = "blue";
}

document.querySelector(".green").addEventListener("click", turnGreen);

function turnGreen () {
    document.querySelector(".container").style.backgroundColor = "green";
}


