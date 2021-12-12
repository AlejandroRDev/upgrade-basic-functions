const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
  let numero1 = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
      const sumaTotal = numbers[i] + numero1;
      numero1 = sumaTotal;
      
  }
 return numero1;
}

console.log(sumAll(numbers));