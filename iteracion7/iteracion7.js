const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function finderName(param, value) {
      for (let i = 0; i < nameFinder.length; i++) {
          nameFinder.includes(value);
          
      }
    return console.log(nameFinder.includes(value));
  }

finderName(nameFinder, 'Jose');

finderName(nameFinder, 'Peggy');