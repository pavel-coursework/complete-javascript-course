"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// accumulator -> SNOWBALL
const balance = movements.reduce((accu, curr, i, arr) => accu + curr, 0);
console.log(balance); // → 3840

// Using for of loop
let balance2 = 0;
for (const mov of movements) {
  balance2 += mov;
}
console.log(balance2); // → 3840

// Get maximum value
const maxValue = movements.reduce((accu, curr) => accu < curr ? curr : accu, 0);
console.log(maxValue); // → 3000
