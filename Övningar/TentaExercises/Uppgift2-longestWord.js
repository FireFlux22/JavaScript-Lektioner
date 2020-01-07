/* Implement your solution here */

// Skriv en funktion longestWord som tar en sträng som argument. 
// Funktionen ska returnera det ord i strängen som har flest bokstäver.

function longestWord (string) {
    const array = string.split(" ");
    let word = "";

    for (var i = 0; i < array.length; i++) {
        if (array[i].length > word.length) {
            word = array[i];
        }
    }
    return word;
}

console.log(longestWord("I am a computer and I like to calculate stuff"));

/* Do not touch the code below this line, but make sure the examples work */
if (longestWord("I am a computer and I like to calculate stuff") !== "calculate") console.error('Invalid solution');
else console.log('Solved!');