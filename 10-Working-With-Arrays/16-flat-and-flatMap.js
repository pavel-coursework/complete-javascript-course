"use strict";

// Flattens an array
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat()); // → (8) [1, 2, 3, 4, 5, 6, 7, 8]

// Flatten an array two levels deep
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2)); // → (8) [1, 2, 3, 4, 5, 6, 7, 8]

const accounts = [
  {
    owner: "Jonas Schmedtmann",
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  },
  {
    owner: "Jessica Davis",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  },
  {
    owner: "Steven Thomas Williams",
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  },
];

// Chaining the map and flat methods is common
const overallBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((accu, curr) => accu + curr, 0);
  console.log(overallBalance); // → 15570

// The flatMap method is combination between the map and flat methods with better performance
// *flatMap goes only one level deep
const overallBalance2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((accu, curr) => accu + curr, 0);
  console.log(overallBalance); // → 15570