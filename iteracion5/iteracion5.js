const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];
function averageWord(param) {
  let sumAll = 0;
  for (let index = 0; index < mixedElements.length; index++) {
    if (typeof mixedElements[index] === "number") {
      sumAll = sumAll + mixedElements[index];
    } else {
      sumAll = sumAll + mixedElements[index].length;
    }
  console.log(sumAll);  }
return result = sumAll;
}

averageWord(mixedElements);

console.log(result);