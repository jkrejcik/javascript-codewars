let alphabetObject = {};
let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

for(let i = 0; i < alphabet.length; i++) {
    alphabetObject[alphabet[i]] = i + 1;
}


function wordValue(a) {
  const finalArr = [];
    for (let i = 0; i < a.length; i++) {
        let result = 0;
        a[i].replace(/\s+/g, '').split("").map((x) => result += alphabetObject[x]);
        finalArr.push(result * (i + 1));
    }
 return finalArr;
}

console.log(wordValue(["ab","ab","aaa  rrttt "]));
