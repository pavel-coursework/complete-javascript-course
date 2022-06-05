"use strict";

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

let arr = ["a", "b", "c", "d", "e"];

// SLICE
console.log(arr.slice(2)); // → (3) ['c', 'd', 'e']
console.log(arr.slice(2, 4)); // → (2) ['c', 'd']
console.log(arr.slice(-2)); // → (2) ['d', 'e']
console.log(arr.slice(1, -2)); // → (2)[("b", "c")];
console.log(arr.slice()); // → (5) ['a', 'b', 'c', 'd', 'e']

// SPLICE - Mutates the original array
console.log(arr.splice(2)); // → (3) ['c', 'd', 'e']
console.log(arr); // → (2) ['a', 'b']
arr.splice(-1);
console.log(arr); // → (1) ["a"];

// REVERSE - Mutates the original array
const arr2 = ["j", "i", "h", "g", "f"];
arr2.reverse();
console.log(arr2); // → (5) ['f', 'g', 'h', 'i', 'j']

// CONCAT
const letters = arr.concat(arr2);
console.log(letters); // → (6) ['a', 'f', 'g', 'h', 'i', 'j']

// JOIN
console.log(letters.join("-")); // → a-f-g-h-i-j
