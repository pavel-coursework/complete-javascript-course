"use strict";

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

// 1
const bankDepositSum = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum); // → 22910

// 2
const numDeposits1000 = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov >= 1000).length;
console.log(numDeposits1000); // → 5

const numDeposits2000 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((accu, curr) => (curr >= 2000 ? accu + 1 : accu), 0);
console.log(numDeposits2000); // → 4

let a = 10;
// Postfix increment
console.log(a++); // → 10
console.log(a); // → 11
// Prefix increment
console.log(++a); // → 12

// 3
const sums = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (accu, curr) => {
      // curr > 0 ? (accu.deposits += curr) : (accu.withdrawals += curr);
      accu[curr > 0 ? "deposits" : "withdrawals"] += curr;
      return accu;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(sums); // → {deposits: 22910, withdrawals: -7340}

// 4
const convertTitleCase = (title) => {
  const exceptions = [
    "a",
    "an",
    "and",
    "the",
    "but",
    "or",
    "on",
    "in",
    "with",
  ];

  const capitalize = (str) => str[0].toUpperCase() + str.substring(1);

  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) => (exceptions.includes(word) ? word : capitalize(word)))
    .join(" ");

  return capitalize(titleCase);
};
console.log(convertTitleCase("this is a nice title"));
// → This Is a Nice Title
console.log(convertTitleCase("this is a LONG title but not too long"));
// → This Is a Long Title but Not Too Long
console.log(convertTitleCase("and here is another title with an EXAMPLE"));
// → And Here Is Another Title with an Example
