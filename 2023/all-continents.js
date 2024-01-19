var list1 = [
    { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
    { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
    { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
    { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
    { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceadnia', age: 65, language: 'PHP' },
  ];

const allContinents = (list) => {
    const continents = new Set(list.map(x => x.continent));
    return continents.size === 5;
}

console.log(allContinents(list1));