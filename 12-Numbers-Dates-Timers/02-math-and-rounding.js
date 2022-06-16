"use strict";

// Find the square root of a number
console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5

// Find the highest number
console.log(Math.max(5, 3, 18, 22, 11)); // → 22
console.log(Math.max(5, 3, 18, "22", 11)); // → 22
console.log(Math.max(5, 3, 18, "22px", 11)); // → NaN

// Find the lowest number
console.log(Math.min(5, 3, 18, 22, 11)); // → 3

// Calculate the area of a circle
console.log(Math.PI * Number.parseFloat("10px") * 2); // → 62.83185307179586

// Generate random number
console.log(Math.trunc(Math.random() * 6 + 1));
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// 0...1 -> 0...(max - min) -> min...max
console.log(randomInt(10, 20));

// Rounding integers
console.log(Math.round(23.3)); // → 23
console.log(Math.round(23.9)); // → 24

console.log(Math.ceil(23.3)); // → 24
console.log(Math.ceil(23.9)); // → 24

console.log(Math.floor(23.3)); // → 23
console.log(Math.floor("23.9")); // → 23

console.log(Math.trunc(23.3)); // → 23

console.log(Math.trunc(-23.3)); // → -23
// With negative numbers rounding works the other way around
console.log(Math.floor(-23.3)); // → -24

// Rounding decimals
console.log((2.7).toFixed(0)); // → "3"
console.log((2.7).toFixed(2)); // → "2.70"
console.log((2.7516).toFixed(2)); // → "2.75"
