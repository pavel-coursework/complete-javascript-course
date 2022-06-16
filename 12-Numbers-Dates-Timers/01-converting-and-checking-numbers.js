"use strict";

// In JavaScript all numbers are represented internally as floating point numbers

console.log(23 === 23.0); // → true

// Base 10 - 0 to 9. 1/10 = 0.1. 3/10 = 3.333333
// Binary base 2 - 0 1
console.log(0.1 + 0.2); // → 0.30000000000000004;
console.log(0.1 + 0.1 === 0.3); // → false

// Conversion
console.log(Number("23")); // → 23
// When JS sees the + operator it will do type coercion
console.log(+"23"); // → 23

// Parsing - the string needs to start with a number
console.log(Number.parseInt("30px", 10)); // → 30
console.log(Number.parseInt("e23", 10)); // → NaN
console.log(Number.parseInt("2.5rem", 10)); // → 2
// parseFloat is often used with values that are coming though CSS
console.log(Number.parseFloat("2.5rem", 10)); // → 2.5

// OldSchool way of calling the global methods
// Number provides a namespace for all those methods
console.log(parseInt("5.125", 10)); // → 5

// Check if value is NaN
console.log(Number.isNaN(20)); // → false
console.log(Number.isNaN("20")); // → false
console.log(Number.isNaN(+"20X")); // → true
console.log(Number.isNaN(23 / 0)); // → false

// Best way of checking if a value is a number
console.log(Number.isFinite(20)); // → true;
console.log(Number.isFinite("20")); // → false;
console.log(Number.isFinite(+"20X")); // → false;
console.log(Number.isFinite(23 / 0)); // → false;

// Check if value is an integer
console.log(Number.isInteger(23)); // → true;
console.log(Number.isInteger(23.0)); // → false;
console.log(Number.isInteger(23 / 0)); // → false;
