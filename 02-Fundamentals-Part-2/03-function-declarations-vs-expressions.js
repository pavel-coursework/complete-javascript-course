"use strict";

// Function declaration
// birthYear is a parameter (placeholder)
function calcAge1(birthYear) {
  return 2022 - birthYear;
}

// 1991 is an argument, the actual value that we use to fill the parameter
const age1 = calcAge1(1999);
console.log(age1); // → 23

// Function expression (Anonymous function)
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};

const age2 = calcAge2(1999);
console.log(age2); // → 23

// • In JavaScript functions are values

// Function declarations can be called before they are being declared
test(5, 8); // → 13

function test(a, b) {
  return console.log(a + b);
}
