var list1 = [
    { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];

const missingDetails = (list) => {
    list.forEach(element => {
        Object.entries(element).forEach(pair => {
            if (pair[1] == null) {
                element['question'] = `Hi, could you please provide your ${pair[0]}.`
            }
        });  
    });

    return list.filter(element => Object.values(element).includes(null));
}

console.log(missingDetails(list1));
