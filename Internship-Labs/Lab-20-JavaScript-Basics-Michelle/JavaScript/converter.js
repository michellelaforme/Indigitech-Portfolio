let USD = Number(prompt("Enter the amount in USD you would like converted"));
let currentExchange = 1.41;
let previousExchange = 1.38;

let CAD = USD * currentExchange;
let previousCAD = USD * previousExchange;

let result1 = CAD >= previousCAD;
console.log(result1);
let result2 = currentExchange > previousExchange;
console.log(result2);

alert(
  "The current exchange amount in CAD is " +
    CAD +
    " and the most recent exchange amount (yesterday) was " +
    previousCAD +
    ". The exchange rate has increased."
);

console.log(USD);
console.log(CAD);
console.log(previousCAD);
