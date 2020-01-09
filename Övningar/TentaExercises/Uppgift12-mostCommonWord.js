/* Implement your solution here */

// I script.js skapa en funktion mostCommonWord som tar en sträng som argument. 
// Funktionen ska returnera det ordet som förekom flest gånger i strängen.


// https://medium.com/@AmJustSam/how-to-find-most-frequent-item-of-an-array-12015df68c65

function mostCommonWord(str) {
    const words = str.split(" ");

    let counts = {}; //We are going to count occurrence of item here
    let compare = 0;  //We are going to compare using stored value
    let mostFrequent;  //We are going to store most frequent item

    for (var i = 0; i < words.length; i++) {
        let word = words[i];

        if (counts[word] === undefined) { // if count[word] doesn't exist
            counts[word] = 1;             // set count[word] value to 1
        } else {                             //if exists
            counts[word] = counts[word] + 1; //increment existing value
        }
        if (counts[word] > compare) {  //counts[word] > 0(first time)
            compare = counts[word];   //set compare to counts[word]
            mostFrequent = words[i];  //set mostFrequent value
        }
    }
    return mostFrequent;
}

/* Do not touch anything below this line */
if (mostCommonWord('Hello this is a text that is cool and stuff') !== 'is') console.error('Invalid solution');
else console.log('Solved!');