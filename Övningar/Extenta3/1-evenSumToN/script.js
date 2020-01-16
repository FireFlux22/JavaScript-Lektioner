/* Implement your solution here */

function evenSumToN(num) {
    let total = 0;

    for (let i = 0; i <= num ; i+=2) {
        total += i;
    }
    
    console.log(total);
    return total;
}

/* Do not touch code below this line, but make sure that these examples work */
if (evenSumToN(10) !== 30) console.error('Invalid solution');
else if (evenSumToN(0) !== 0) console.error('Invalid solution');
else if (evenSumToN(9) !== 20) console.error('Invalid solution');
else if (evenSumToN(100) !== 2550) console.error('Invalid solution');
else console.log('Solved!');
