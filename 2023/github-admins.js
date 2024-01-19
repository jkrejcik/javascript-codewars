var list1 = [
    { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
  ];

  function findAdmin(list, lang) {
    // thank you for checking out the Coding Meetup kata :)
    result = [];
    list.forEach(element => {
        if (element.language === lang && element.githubAdmin === 'yes')   {
            result.push(element);
        }
    });
    return result;
  }

//   Better way is using filter: return list.filter(p => p.language === lang && p.githubAdmin === 'yes');

  console.log(findAdmin(list1, 'JavaScript'));