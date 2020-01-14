/* Implement your solution here */


/* Do NOT touch this function */
function getData() {
  return new Promise(function(resolve, reject) {
    resolve(JSON.stringify({
      "elements": [
        {
          "name": "Hydrogen", 
          "number": 1, 
          "symbol": "H", 
        }, 
        {
          "name": "Helium", 
          "number": 2, 
          "symbol": "He", 
        }, 
        {
          "name": "Lithium", 
          "number": 3, 
          "symbol": "Li", 
        }, 
        {
          "name": "Beryllium", 
          "number": 4, 
          "symbol": "Be", 
        }, 
        {
          "name": "Boron", 
          "number": 5, 
          "symbol": "B", 
        }, 
      ]
    }));
  })
}

