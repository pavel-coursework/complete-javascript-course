"use strict";

// 287,460,000,000
const diameter = 287_460_000_000;
console.log(diameter); // → 287460000000

const priceCents = 346_99;
console.log(priceCents); // → 34699

const transferFee1 = 15_00;
const transferFee2 = 1_500;

// const PI = 3._1415; // → SyntaxError
// const PI = 3.__1415; // → SyntaxError
// const PI = 3_.1415; // → SyntaxError
// const PI = _3.1415; // → SyntaxError

console.log(Number("230000")); // → 230000
console.log(Number("230_000")); // → NaN