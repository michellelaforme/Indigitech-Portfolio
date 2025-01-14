// task 1- welcome pirate aboard
function welcomePirate(name) {
  document.write(
    "<h2>Ahoy, " + name + "! Welcome aboard the Black Pearl!</h2>"
  );
}

welcomePirate(prompt("Please enter your name"));

// task 2- calculate treasure
let total = 0;
// define the variable globally
function calculateTreasure(goldCoins, silverCoins) {
  let gold = goldCoins * 1000;
  let silver = silverCoins * 100;
  total = gold + silver;
}
calculateTreasure(40, 20);
// output should be.... 42,000.
document.write(
  "<p>The total value of all coins is " + total + " doubloons</p>"
);

// task 3- ready for battle?
function checkBattleReadiness(shipStatus) {
  if (shipStatus == "yes") {
    document.write("<p>Your ship is ready for battle, Captain!</p>");
  } else {
    console.log("Your ship is not ready, prepare for battle!");
  }
}

checkBattleReadiness(prompt("Is the pirate ship ready for battle?"));

// task 4- member count

let membersArray = [];
membersArray[0] = 2;
membersArray[1] = 4;
membersArray[2] = 7;
membersArray[3] = Number(prompt("How many crew members are sleeping?"));
let index;
let crewList = 0;
for (index = 0; index < membersArray.length; index++) {
  crewList = crewList + membersArray[index];
}
function countCrewMembers(crewList) {
  document.write("<p>There are " + crewList + " members in the crew!</p>");
}

countCrewMembers(crewList);

// task 5- sail to a new island
let days;
function sailtToIsland(islandName, distance) {
  days = distance / 30;
  document.write(
    "<p>It will take " + days + " days to get to " + islandName + "</p>"
  );
}
sailtToIsland("MayaLand", 300);

// task 6- pirate rations
function calculateRations(days) {
  let rations = crewList * 3;
  let totalRations = days * rations;
  document.write(
    "<p>For the entire crew, for " +
      days +
      " days, the ship will need at least " +
      totalRations +
      " rations </p>"
  );
}
// crew * 3 * days = rations
calculateRations(days);

// task 7- coordinates
function displayCoordinates(latitude, longitude) {
  document.write(
    "<p>Current coordinates are: " + latitude + ", " + longitude + "</p>"
  );
}
displayCoordinates("11.3493° N", "142.1996° E");
