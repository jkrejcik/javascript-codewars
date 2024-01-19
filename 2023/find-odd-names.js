var list1 = [
    { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
    { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];

const oddNames = (list) => {
    const result = [];
    list.forEach(element => {
        let test = element.firstName.split("").reduce(
            (acc, curr) => acc + curr.charCodeAt(0), 0,
        );

        if (test % 2 != 0) {
            result.push(element);
        }
    });
    return result;
}

console.log(oddNames(list1));

// I could return filter method...that way no need for pushing objects into array

