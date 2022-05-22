"use strict";

// Primitives vs. Objects

let age = 30;
let oldAge = age;

age = 31;
console.log(age); // → 31
console.log(oldAge); // → 30

const me = {
  name: "Jonas",
  age: 30,
};
const friend = me;

friend.age = 27;

console.log("Friend:", friend); // → Friend: {name: 'Jonas', age: 27}
console.log("Me", me); // → Me {name: 'Jonas', age: 27}


// Primitives vs. Objects in Practice

// Primitive types
let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName); // → Davis Williams

// Reference types
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before marriage:", jessica);
// → Before marriage: {firstName: 'Jessica', lastName: 'Davis', age: 27}
console.log("After marriage: ", marriedJessica); 
// → After marriage:  {firstName: 'Jessica', lastName: 'Davis', age: 27}

// Copying objects
const jessica2 = {
  firstName: "Jessica2",
  lastName: "Williams2",
  age: 27,
};
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis2";
console.log("Before marriage:", jessica2);
// → Before marriage: {firstName: 'Jessica2', lastName: 'Williams2', age: 27}
console.log("After marriage: ", jessicaCopy);
// → After marriage:  {firstName: 'Jessica2', lastName: 'Davis2', age: 27}

// Copying objects
const jessica3 = {
  firstName3: "Jessica3",
  lastName3: "Williams3",
  age3: 27,
  family3: ["Alice3", "Bob3"],
};
const jessicaCopy3 = Object.assign({}, jessica3); // shallow copy, copies correctly only first level properties
jessicaCopy3.lastName3 = "Davis3";
jessicaCopy3.family3.push("Mary3");
jessicaCopy3.family3.push("John3");
console.log("Before marriage3:", jessica3);
// → Before marriage3: {firstName3: 'Jessica3', lastName3: 'Williams3', age3: 27, family3: Array(4)}
console.log("After marriage3: ", jessicaCopy3);
// → After marriage3:  {firstName3: 'Jessica3', lastName3: 'Davis3', age3: 27, family3: Array(4)}
