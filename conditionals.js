
var userChoice;
var randomNumber;
var computerChoice;

//Part 1

userChoice = prompt("Choose heads or tails.");
//Computer Random Choice
randomNumber = Math.round(Math.random());
if(randomNumber == 0) {
    computerChoice = "heads";
} else {
    computerChoice = "tails";
}
//Compare Choices and Output
if(userChoice == computerChoice) {
    alert("You guessed right! The coin flip landed on " + userChoice + ".");
} else {
    alert("Sorry, the coin flip landed on " + computerChoice + ".");
}


//Part 2

var birthYear;
var age;
//Prompt User for Input
birthYear = prompt("What year were you born?");
//Calculate age using year: 2023
age = 2023 - birthYear;
//Compare age to 21 and Output
if(age > 21) {
    alert("You are old enough to drink in the US.");
} else if (age == 21) {
    alert("You are old enough to drink in the US... barely.");
} else {
    alert("Sorry, you are not old enough to drink in the US.");
}