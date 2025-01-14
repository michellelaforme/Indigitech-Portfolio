let billAmount = Number(prompt("What is the bill amount?"));
let tipPercent = Number(prompt("What percentage would you like to tip?"));

let tipAmount = (billAmount * tipPercent) / 100;
let total = tipAmount + billAmount;
alert(
  "The amount that you are tipping is " +
    tipPercent +
    "% which is equal to $" +
    tipAmount +
    ", which would make the total bill amount $" +
    total
);
