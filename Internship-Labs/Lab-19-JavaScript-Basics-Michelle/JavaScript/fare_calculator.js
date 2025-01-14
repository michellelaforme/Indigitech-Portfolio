let name = prompt("What is your name?");
let base = Number(
  prompt(name + ", what is the base fare of the Ride Share? (in CAD)?")
);
let distance = Number(
  prompt(name + ", what is the distance you will be traveling (in km)?")
);
let rate = Number(
  prompt(
    name +
      ", what is the rate charged by the Ride Share per km? (also known as mileage)"
  )
);
let tip = Number(
  prompt(name + ", would you like to add a tip? Enter the percentage.")
);

let price = base + distance * rate;
// so to get the price without a tip, you're adding the base fare to the mileage rate, which is determined by a per km amount, multiplied by the number of km traveled
let total = price + (tip / 100) * price;
// in order to get the total, you're adding taking the tip amount, dividing by 100 to get the percentage (eg. 20% is 0.2) and then multiplying that by the initial price amount, and then adding the price together with the tip amount

alert("The total amount to pay to the driver is " + total);
