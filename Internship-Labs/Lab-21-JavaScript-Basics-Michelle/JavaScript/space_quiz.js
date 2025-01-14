alert(
  "Welcome to our interactive space quiz! Here, we'll be asking random trivia questions about our solar system."
);
// question 1
let answer1 = prompt("Do you currently live on planet Earth?");

if (answer1 == "yes") {
  alert("Correct!");
}
let quote =
  "That's one small step for a quiz taker, one giant leap for knowledge!";
console.log(quote);

if (answer1 == "no") {
  alert("Incorrect.... (Are you an alien?)");
}
// question 2
let answer2 = prompt(
  "Which planet has visible rings on it? (Saturn or Uranus)"
);
if (answer2 == "Saturn") {
  alert("Correct!");
} else {
  alert("Incorrect (womp womp)");
}
// question 3
let answer3 = prompt("Which planet is known as the ice giant?");
if (answer3 == "Uranus") {
  alert("Correct");
} else if (answer3 == "Jupiter") {
  alert("Incorrect");
} else if (answer3 == "Mercury") {
  alert("Incorrect");
} else if (answer3 == "Venus") {
  alert("Incorrect");
} else if (answer3 == "Earth") {
  alert("Incorrect");
} else if (answer3 == "Mars") {
  alert("Incorrect");
} else if (answer3 == "Saturn") {
  alert("Incorrect");
} else if (answer3 == "Neptune") {
  alert("Incorrect");
} else if (answer3 == "Pluto") {
  alert("Incorrect");
} else {
  alert("Is that even a planet?");
}
// question 4
let answer4 = Number(prompt("How many planets are in our solar system?"));
if (answer4 == 8) {
  alert("Wrong. We recognize Pluto in this household.");
} else if (answer4 == 9) {
  alert("Correct!");
} else {
  alert("Incorrect");
}
console.log(answer4);

// question 5
let answer5 = prompt("True or false: Mars is known as the red planet");
if (answer5 == "true") {
  alert("Correct!");
} else {
  alert("Incorrect");
}
console.log(answer5);
