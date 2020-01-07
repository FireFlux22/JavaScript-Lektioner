/* Implement your solution here */

// I script.js filen skapa en funktion min som tar en array som argument. 
// Arrayen innehåller objekt som värden och alla objekt har nyckeln value som är ett nummer. 
// Funktionen ska returnera det objekt som har det lägsta värdet satt i sin value nyckel.

function min(array) {

    let minValue = {
        value: array[0].value,
    } 

    for (let i = 0; i < array.length; i++) {
        if (minValue.value > array[i].value){
            minValue.value = array[i].value;
        }
    }
    return minValue;
}

console.log(min([{ value: 3 }, { value: 7 }, { value: -1 }, { value: 5 }, { value: 100 }]).value);

/* Do not touch the code below this line, but make sure the examples work */

if (min([{ value: 3 }, { value: 7 }, { value: -1 }, { value: 5 }, { value: 100 }]).value !== -1) console.error('Invalid solution');
else console.log('Solved!');





