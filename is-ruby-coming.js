var list1 = [
    { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
  ];


const isRubyComing = (list) => {
    let isRubyHere = false;

    list.forEach(element => {
        if (element.language == 'Ruby' ) {
            isRubyHere = true;
        }
    });

    return isRubyHere;
}

console.log(isRubyComing(list1));

// Better way about it is using .some on a list:  return list.some(e => e.language === 'Ruby');
