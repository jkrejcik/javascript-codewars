var list1 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
    { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
  ];

const diverseMeetup = (list) => {
   let rby = 0;
   let js = 0;
   let py = 0;

   list.forEach(element => {
    if (element.language == 'Python') {
        py += 1;
    } else if (element.language == 'JavaScript') {
        js += 1;
    } else if (element.language == 'Ruby') {
        rby += 1;
    }
   });

  return (Math.max(rby, js, py) / Math.min(rby, js, py)) <= 2
}

console.log(diverseMeetup(list1));

