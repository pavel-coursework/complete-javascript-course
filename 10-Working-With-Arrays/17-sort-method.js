"use strict";

// The sort method mutates the original array
const owners = ["Jonas", "Zach", "Adam", "Martha"];
console.log(owners.sort()); // → (4)[("Adam", "Jonas", "Martha", "Zach")];
console.log(owners); // → (4)[("Adam", "Jonas", "Martha", "Zach")];

// Numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)
// Ascending
movements.sort((a, b) => (a > b ? 1 : -1));
console.log(movements); // → (8) [-650, -400, -130, 70, 200, 450, 1300, 3000]
movements.sort((a, b) => a - b);
console.log(movements); // → (8) [-650, -400, -130, 70, 200, 450, 1300, 3000]

// Descending
movements.sort((a, b) => b - a);
console.log(movements); // → (8) [3000, 1300, 450, 200, 70, -130, -400, -650]