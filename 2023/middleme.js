/*
26/10/2023
https://www.codewars.com/kata/59cd155d1a68b70f8e000117/train/javascript
*/

function middleMe(N, X, Y){
    //get a working solution then try to make it less than 70 characters!
  let result = "";

    const makeString = (char) => {
        for (let i = 0; i < N / 2; i++) {
            result += char;
        }
    }

    if (N % 2 === 0) {
        makeString(Y);
        result += X;
        makeString(Y);
    } else {
        result = X;
    }
   
  return result;
}

console.log(middleMe(18, 'z', '#'))

/*
Better solution: Using on String.repeat(N) and save it as variable 
*/