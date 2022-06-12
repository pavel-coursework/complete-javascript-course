"use strict";

const x = new Array(7); // → (7) [empty x 7]
console.log(x);

// Empty arrays + fill method
x.fill(1, 3, 5);
console.log(x); // → (7) [empty x3, 1, 1, empty x2]

// The fill method mutates the original array
const arr = [1, 2, 3, 4, 5, 6, 7];
arr.fill(10, 4, 6);
console.log(arr); // → (7) [1, 2, 3, 4, 10, 10, 7]

// Array.from - Array is a func on which we call the .from method
const y = Array.from({ length: 7 }, () => 1);
console.log(y); // → (7) [1, 1, 1, 1, 1, 1, 1]

const z = Array.from({length: 7}, (curr, i) => i + 1);
console.log(z); // → (7) [1, 2, 3, 4, 5, 6, 7]
