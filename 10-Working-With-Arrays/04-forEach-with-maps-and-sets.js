"use strict";

// Map
const currencies = new Map([
  ["USD", "United States Dollar"],
  ["EURO", "Euro"],
  ["GBP", "Pound Sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
/* → USD: United States Dollar
     EURO: Euro
     GBP: Pound Sterling */

// Set
const currenciesUnique = new Set(["USD", "EURO", "GBP", "EURO", "USD"]);

console.log(currenciesUnique); // → Set(3) {size: 3, USD, EURO, GBP}

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
/* → USD: USD
     EURO: EURO
     GBP: GBP */