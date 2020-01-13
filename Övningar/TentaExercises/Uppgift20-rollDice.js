/* Implement your solution here */

// I script.js skriv en funktion rollDice som "rullar" en tärning 
// och returnerar resultatet. 
// Funktionen ska ta ett argument som berättar hur stor tärningen är. 
// Om ingenting har angetts som argument, ska funktionen anta att storleken är 6.

function rollDice(size) {

    if (size === undefined) {
        size = 6;
    }
    // +1 för att returnera tal mellan 1 och tärningssize
    let random = Math.floor(Math.random() * size++) + 1;
    return random;
}

console.log(rollDice());
console.log(rollDice(10));
