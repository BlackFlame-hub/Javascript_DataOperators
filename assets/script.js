// Request a username and show a greeting using string template
let username = prompt("Enter your username:");
console.log(`Hello, ${username}! Welcome!`);

// Request names and ages for two children
let child1Name = prompt("Enter the name of the first child:");
let child1Age = Number(prompt("Enter the age of the first child:"));
let child2Name = prompt("Enter the name of the second child:");
let child2Age = Number(prompt("Enter the age of the second child:"));

// Check if child 1 is older and if its name is Tim
if (child1Age > child2Age && child1Name === "Tim") {
  console.log("Child 1 is older and their name is Tim.");
} else {
  console.log("Child 1 is not older or their name is not Tim.");
}

// Request a color and check if it is on the flag of the Republic of South Africa
let color = prompt("Enter a color:");
let southAfricaFlagColors = [
  "red",
  "blue",
  "green",
  "yellow",
  "black",
  "white",
];
if (southAfricaFlagColors.includes(color.toLowerCase())) {
  console.log(`${color} is on the flag of the Republic of South Africa.`);
} else {
  console.log(`${color} is not on the flag of the Republic of South Africa.`);
}

// Request a number and check if it is an odd number
let number = Number(prompt("Enter a number:"));
if (number % 2 !== 0) {
  console.log(`${number} is an odd number.`);
} else {
  console.log(`${number} is not an odd number.`);
}

// Request two numbers, divide them, and check if the result is an integer
let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
if (num2 !== 0 && num1 % num2 === 0) {
  console.log(`The result of dividing ${num1} by ${num2} is an integer.`);
} else {
  console.log(`The result of dividing ${num1} by ${num2} is not an integer.`);
}

// Request date of birth, calculate age, and check if the person is over 18
let dob = prompt("Enter your date of birth (YYYY-MM-DD):");
let birthDate = new Date(dob);
let today = new Date();
let age = today.getFullYear() - birthDate.getFullYear();
if (
  today.getMonth() < birthDate.getMonth() ||
  (today.getMonth() === birthDate.getMonth() &&
    today.getDate() < birthDate.getDate())
) {
  age--;
}
console.log(`You are ${age} years old.`);
if (age >= 18) {
  console.log("You are over 18.");
} else {
  console.log("You are under 18.");
}

// Declare a variable without initializing it and check if it is of type null or undefined
let uninitializedVariable;
if (uninitializedVariable === undefined) {
  console.log("The variable is undefined.");
} else if (uninitializedVariable === null) {
  console.log("The variable is null.");
}

// Request a number, check if it is a number and if it is between 10 and 50
let userNumber = prompt("Enter a number:");
if (!isNaN(userNumber) && userNumber >= 10 && userNumber <= 50) {
  console.log(`${userNumber} is a number and is between 10 and 50.`);
} else {
  console.log(
    `${userNumber} is not a valid number or is not in the range of 10 to 50.`
  );
}
