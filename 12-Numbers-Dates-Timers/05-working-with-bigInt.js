"use strict";

// Biggest number that JS can represent
console.log(2 ** 53 - 1); // → 9007199254740991
console.log(Number.MAX_SAFE_INTEGER); // → 9007199254740991

// n transforms a regular number into a big int number
console.log(3514935834957345345634553453418n);
// → 3514935834957345345634553453418n
console.log(BigInt(3514935834957)); // → use it only on small numbers
// → 3514935834957n

// Operations
console.log(10000n + 10000n); // → 20000n

const huge = 1412421414124124242421421412n;
const num = 23;
console.log(huge * num);
// → TypeError: Cannot mix BigInt and other types, use explicit conversions
console.log(huge * BigInt(num)); // → 32485692524854857575692692476n

// Exceptions
console.log(20n > 15); // → true
console.log(20n === 20); // → false
console.log(typeof 20n); // → bigint
console.log(20n == 20); // → true

console.log(huge + " is REALLY big!!!");

// → 1412421414124124242421421412 is REALLY big!!!

// Divisions
console.log(10n / 3n); // → 3n
console.log(10 / 3); // → 3.3333333333333335
