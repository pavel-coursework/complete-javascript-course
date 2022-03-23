const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

// String concatenation with variables
const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

// String interpolation
const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

// Multi-line string before ES6
console.log("string with \n\
multiple \n\
lines");

// Multi-line template string
console.log(`String with
multiple
lines`);