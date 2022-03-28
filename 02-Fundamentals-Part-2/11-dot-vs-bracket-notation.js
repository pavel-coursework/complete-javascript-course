"use strict";

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2022 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(jonas); /* → {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 31,
  job: 'teacher',
  friends: Array(3)
} */

// Dot notation
console.log(jonas.lastName); // → Schmedtmann

// Bracket notation (we can use expression inside the brackets)
console.log(jonas["lastName"]); // → Schmedtmann

const nameKey = "Name";
console.log(jonas["first" + nameKey]); // → Jonas
console.log(jonas["last" + nameKey]); // → Schmedtmann

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends"
);

console.log(jonas.interestedIn); // → undefined

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]); // → returns the value you entered
} else {
  console.log("Wrong request! Choose between firstName, lastName, age, job and friends");
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtmann";
console.log(jonas);
/* → {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 31,
  job: 'teacher',
  friends: Array(3),
  location: "Portugal",
  twitter: "@jonasschmedtmann"
} */

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
); // → Jonas has 3 friends, and his best friend is called Michael