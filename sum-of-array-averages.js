/*
25/10/2023
https://www.codewars.com/kata/56d5166ec87df55dbe000063/train/javascript
*/

const sumAverage = (arr) => {
    let result = 0;
    // Your code here
    for (let x = 0; x < arr.length; x++) {
        let sum = arr[x].reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        sum = sum / arr[x].length
        result += sum;
    }
    return Math.floor(result);
}

console.log(sumAverage([[1, 2, 2, 1], [2, 2, 2, 1]]));
console.log("Heloooo")