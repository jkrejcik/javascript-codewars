var list1 = [
    { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 35, language: 'Ruby' },
    { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
    { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
    { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
    { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
    { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 91, language: 'PHP' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 148, language: 'JavaScript' }
  ];

const ageDiversity = (list) => {
    let check = new Set();
    
    list.forEach(e => {
        let value = e.age;

        if (value >= 10 && value < 20) {
            check.add(10);
        } else if (value >= 20 && value < 30) {
            check.add(20);
        } else if (value >= 30 && value < 40) {
            check.add(30);
        } else if (value >= 40 && value < 50) {
            check.add(40);
        } else if (value >= 50 && value < 60) {
            check.add(50);
        } else if (value >= 60 && value < 70) {
            check.add(60);
        } else if (value >= 70 && value < 80) {
            check.add(70);
        } else if (value >= 80 && value < 90) {
            check.add(80);
        } else if (value >= 90 && value < 100) {
            check.add(90);
        } else if (value >= 100 && value < 200) {
            check.add(100);
        }
    });

    return check.size == 10;
}




console.log(ageDiversity(list1))



