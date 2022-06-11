"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// EQUALITY
console.log(movements.includes(-130)); // → true

// SOME - CONDITION
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits); // → true

// EVERY - CONDITION
console.log(movements.every((mov) => mov > 0)); // → false

// Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit)); // → true