let username = prompt("Please enter your name");
console.log(`Hello, ${username}! Welcome to this awesome page!`);

// ------------------------------------------------------------------------------------------------------------

let childName1 = prompt("Enter the name of your first child.");
let childAge1 = Number(prompt(`Enter the age of ${childName1}.`));
let childName2 = prompt("Enter the name of your second child.");
let childAge2 = Number(prompt(`Enter the age of ${childName2}.`));

if (childAge1 > childAge2 && childName1 === "Tim") {
  console.log(`${childName1} is older than ${childName2} and we have Tim.`);
} else if (childAge1 > childAge2 && childName1 !== "Tim") {
  console.log(`${childName1} is older than ${childName2} but we have no Tim.`);
} else if (childAge1 < childAge2 && childName1 === "Tim") {
  console.log(`${childName1} is not older than ${childName2} but we have Tim.`);
} else if (childAge1 < childAge2 && childName1 !== "Tim") {
  console.log(
    `${childName1} is not older than ${childName2} and we don't have Tim either.`
  );
} else {
  console.log(`${childName1} and ${childName2} are the same age.`);
}

// ------------------------------------------------------------------------------------------------------------

let flagColor = prompt("Pick a color.");
let southAfricaFlag = ["red", "blue", "green", "yellow", "black", "white"];
if (southAfricaFlag.includes(flagColor.toLowerCase())) {
  console.log(`${flagColor} is on the flag of the Republic of South Africa.`);
} else {
  console.log(
    `${flagColor} is not on the flag of the Republics of South Africa.`
  );
}

// ------------------------------------------------------------------------------------------------------------

let weirdNumber = Number(prompt("Enter a number:"));
if (weirdNumber % 2 !== 0) {
  console.log(`${weirdNumber} is an odd number.`);
} else {
  console.log(`${weirdNumber} is not an odd number`);
}

// ------------------------------------------------------------------------------------------------------------

let firstNumber = Number(prompt("Enter the first number:"));
let secondNumber = Number(prompt("Enter your second number:"));

if (secondNumber !== 0 && firstNumber % secondNumber === 0) {
  console.log(
    `By dividing ${firstNumber} by ${secondNumber} the result is an integer.`
  );
} else {
  console.log(
    `By dividing ${firstNumber} by ${secondNumber} the result is not, I repeat, is not an integer.`
  );
}

// ------------------------------------------------------------------------------------------------------------

let dateOfBirth = prompt("Enter your date of birth YYYY-MM-DD:");
let birthDate = new Date(dateOfBirth);
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
  console.log("You are over 18 years old.");
} else {
  console.log("You are under 18.");
}

// ------------------------------------------------------------------------------------------------------------

let unemployed;

if (unemployed === undefined) {
  console.log("The variable is undefined.");
} else if (unemployed === null) {
  console.log("The variable is null.");
}

// ------------------------------------------------------------------------------------------------------------

let inputNumber = prompt("Enter a number:");
if (!isNaN(inputNumber) && inputNumber >= 10 && inputNumber <= 50) {
  console.log(`${inputNumber} is a number and is between 10 - 50.`);
} else {
  console.log(
    `${inputNumber} is an invalid input or it is not in the rage of 10-50.`
  );
}
