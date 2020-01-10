/* Implement your solution here */

function positiveSum(ar) {
    total = 0; 
    for (let i = 0; i < ar.length; i++) {
        let positive = Math.abs(ar[i]);
        total += positive;        
    }
    console.log(total);
    return total;
}

/* Do not touch code below this line, but make sure that these examples work */
if (positiveSum([-1, 2, 3]) !== 6) console.error('Invalid solution');
else if (positiveSum([]) !== 0) console.error('Invalid solution');
else if (positiveSum([-7, 2]) !== 9) console.error('Invalid solution');
else if (positiveSum([1, 2, -3, 4, 5, -6, 7, 8, 9]) !== 45) console.error('Invalid solution');
else console.log('Solved!');
