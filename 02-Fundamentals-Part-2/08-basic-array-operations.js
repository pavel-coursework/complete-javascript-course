"use strict";

const friends = ["Michael", "Steven", "Peter"];

// push - adds element to the end of the array
// ◦ returns length of the array
const newLength = friends.push("Jay");
console.log(friends); // → ['Michael', 'Steven', 'Peter', 'Jay']
console.log(newLength); // → 4

// unshift - adds element to the beginning of the array
friends.unshift("John");
console.log(friends); // → ['John', 'Michael', 'Steven', 'Peter', 'Jay']

// pop - remove last element from the array
// ◦ returns the removed element
const removedElement = friends.pop();
console.log(friends); // → ['John', 'Michael', 'Steven', 'Peter']
console.log(removedElement); // → Jay

// pop - remove first element from the array
// ◦ returns the removed element
friends.shift();
console.log(friends); // → ['Michael', 'Steven', 'Peter']

// indexOf - element position in the array
console.log(friends.indexOf("Steven")); // → 1

// returns -1 for element not present in the array
console.log(friends.indexOf("Bob")); // → -1

// includes - checks if element present in the array
// ◦ uses strict equality
console.log(friends.includes("Peter")); // → true
console.log(friends.includes("Bob")); // → false

friends.push(23);
console.log(friends.includes(23)); // → true
console.log(friends.includes("23")); // → false
