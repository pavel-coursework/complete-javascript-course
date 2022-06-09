"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Using filter method
const deposits = movements.filter((mov) => mov > 0);
console.log(deposits); // → (5) [200, 450, 3000, 70, 1300]

// Using for of loop
const depositsFor = [];
for (const mov of movements) {
  mov > 0 && depositsFor.push(mov);
}

console.log(depositsFor); // → (5) [200, 450, 3000, 70, 1300]
