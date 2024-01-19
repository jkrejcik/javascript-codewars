var list1 = [
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
  ];

const addUsername = (list) => {
    const yearNow = new Date().getFullYear();

    list.forEach(element => element['username'] = `${element.firstName.toLowerCase()}${element.lastName[0].toLowerCase()}${yearNow - element.age}`);
    return list;
}

console.log(addUsername(list1));
