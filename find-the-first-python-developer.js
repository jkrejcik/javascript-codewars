var list1 = [
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Psython' },
    { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
  ];


const firstPythonDev = (list) => {
    const dev = list.find(dev => dev.language == 'Python');
    return (dev) ? `${dev.firstName}, ${dev.country}` : "There will be no Python developers";
}

console.log(firstPythonDev(list1));