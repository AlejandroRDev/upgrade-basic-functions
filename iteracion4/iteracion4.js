const numbers = [12, 21, 38, 5, 45, 37, 6];


function sumAll(param){
    let firstNumb = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let sumNumbers = numbers[i] + firstNumb;    
        firstNumb = sumNumbers;  
    }
    return result = firstNumb;
}

console.log(sumAll());

function average(param) {

   return average = result / numbers.length;
   
}  

console.log(average());

