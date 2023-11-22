var list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
      meal: 'vegetarian' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
      meal: 'standard' },
    { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
      meal: 'vegan' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
      meal: 'vegetarian' },
];

function orderFood(list) {
    let result = {};
    let menu = new Set();

    list.forEach(element => {
        menu.add(element.meal);
    });
   
    menu.forEach(option => {
        result[option] = list.filter(x => x.meal == option).length
    });
    
   return result;
}

console.log(orderFood(list1));
