const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  function repeatCounter(param) {
      let repeticiones = {};
   for (let i = 0; i < param.length; i++) {
       if (param[i] in repeticiones) {
           repeticiones[param[i]]++;
       } else {
           repeticiones[param[i]] = 1;
       }
       
   }
   return console.log(repeticiones);
}
  

repeatCounter(counterWords);