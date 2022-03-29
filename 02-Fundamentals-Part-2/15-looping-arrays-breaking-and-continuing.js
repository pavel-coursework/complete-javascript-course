"use strict";

const jonas = [
  "Jonas",
  "Schmedtmann",
  2022 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], "-", typeof jonas[i]);

  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}

console.log(types); // → ['string', 'string', 'number', 'string', 'object']

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2022 - years[i]);
}

console.log(ages); // →  [31, 15, 53, 2]

// Continue and Break

for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;

  console.log(jonas[i], "-", typeof jonas[i]);
  // → Jonas - string
  // → Schmedtmann - string
  // → teacher - string
}

for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;

  console.log(jonas[i], "-", typeof jonas[i]);
  // → Jonas - string
  // → Schmedtmann - string
}
