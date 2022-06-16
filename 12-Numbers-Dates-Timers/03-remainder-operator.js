"use strict";

console.log(5 % 2); // → 1
console.log(5 / 2); // → 2.5, 5 = 2 * 2 + 1

console.log(8 % 3); // → 2
console.log(8 / 3); // → 2.6666666666666665, 8 = 2 * 3 + 2

console.log(6 % 2); // Even number
console.log(7 % 2); // Odd number

const isEven = (n) => n % 2 === 0;
console.log(isEven(8)); // → true
console.log(isEven(23)); // → false

// Do something on every nth time
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) console.log(i); // → 0, 2, 4, 6, 8, 10
  if (i % 3 === 0) console.log(i); // → 0, 3, 6, 9
  if (i % 4 === 0) console.log(i); // → 0, 4, 8
}
