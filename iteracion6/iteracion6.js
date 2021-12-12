const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];

  function removeDuplicates(param) {
      let duplicatesVerify = [];
    for (let index = 0; index < duplicates.length; index++) {
        if (!duplicatesVerify.includes(duplicates[index])) {
            duplicatesVerify.push(duplicates[index])          
        }  
       
    }
    return console.log(duplicatesVerify)
  }

  removeDuplicates(duplicates);
 

