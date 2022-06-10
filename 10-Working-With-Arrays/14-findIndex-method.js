"use strict";

const accounts = [
  { name: "Peter", accountID: 723556781012 },
  { name: "Linus", accountID: 126528791369 },
  { name: "John", accountID: 220356081771 },
  { name: "William", accountID: 901240187955 },
];

const index = accounts.findIndex(({ name }) => name === "William");
accounts.splice(index, 1);
console.log(accounts);
// → (3) [{name: "Peter", ...}, {name: "Linus", ...}, {name: "William", ...}]