"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const firstWithdrawal = movements.find((mov) => mov < 0);
console.log(firstWithdrawal); // → -400;

const accounts = [
  { name: "Peter", accountID: 723556781012 },
  { name: "Linus", accountID: 126528791369 },
  { name: "John", accountID: 220356081771 },
  { name: "William", accountID: 901240187955 },
];
const account = accounts.find(({ name }) => name === "John");
console.log(account); // → {name: 'John', accountID: 220356081771}
