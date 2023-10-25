/*
25/10/2023
https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/javascript
*/

function squareOrSquareRoot(array) {
  
    const arraySquare = array.map((x) => (Math.sqrt(x) % 1 != 0) ? Math.pow(x,2) : Math.sqrt(x))
    
    
    return arraySquare;  
}

console.log(squareOrSquareRoot([4,3,9,7,2,1]));

