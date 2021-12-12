const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

let  avengersLength = [];
let longestWords = [];

function findLongestWord() {
 
 for (let i = 0; i < avengers.length; i++) {
   avengersLength.push(avengers[i].length);
    if (avengers[i].length > 9){
        longestWords.push(avengers[i]);
    }
 }
}

findLongestWord();


longestWords.pop();

console.log(longestWords);

//** REPASAR, has conseguido el ejercicio pero en cuanto se añadan mas valores al array puede fallar. */