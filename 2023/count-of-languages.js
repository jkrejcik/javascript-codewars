var list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
    { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
  ];

const countOfLanguages = (list) => {
    let result = {};
    let languages = new Set();
    
    list.forEach(element => {
        languages.add(element.language);
    });
    
    languages.forEach(lang => {
        result[lang] = list.filter((x) => x.language == lang).length;
    });

    return result;
}

console.log(countOfLanguages(list1));