var list1 = [
    { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
];


function getAverageAge(list) {
    return Math.round(list.reduce((x, y) => x + y.age, 0) / list.length);
}

console.log(getAverageAge(list1));
  
  