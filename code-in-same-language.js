var list1 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
  ];


const codeInSameLanguage = (list) => {
    const coderLanguage = list[0].language;
    return list.every(coder => coder.language == coderLanguage)
}

console.log(codeInSameLanguage(list1));