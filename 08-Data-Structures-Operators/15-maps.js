"use strict";

// Map is a data structure that we use to map values to keys, the keys can be of any type

// 1. Create a map
const rest = new Map();
console.log(rest); // → Map(0) {size: 0}

// 2. Add elements to map using set method
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
rest.set(2, "Lisbon, Portugal");
rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("closed", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");
console.log(rest); // → Map(8) {size: 8, name => Classico Italiano, 1 => Firenze, Italy, ...}

// 3. Get the element from the map
console.log(rest.get("name")); // → Classico Italiano
console.log(rest.get(true)); // → We are open :D
console.log(rest.get(1)); // → Firenze, Italy

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close"))); // → We are closed :(

// 4. Check if a met contains a certain key
console.log(rest.has("categories")); // true

// 5. Delete a key from the map
rest.delete(2);
console.log(rest); // → Map(7) {size: 7, name => Classico Italiano, 1 => Firenze, Italy, ...}

// 6. Check the size of the map
console.log(rest.size); // → 7

// 7. Delete all element in the map
rest.clear();

// Use arrays and objects as map
const arr = [1, 2];
rest.set(arr, "Test");
console.log(rest); // → Map(1) {size: 1, (2) [1, 2] => Test}
console.log(rest.get([1, 2])); // → undefined
console.log(rest.get(arr)); // → Test

// Second way of populating maps
const question = new Map([
  ["question", "What is the best programming language?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try again!"],
]);
console.log(question); // → Map(7) {size: 7, question => What is th…language?, 1 => C, ...}

for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}
/* → Answer 1: C
     Answer 2: Java
     Answer 3: JavaScript */

const answer = Number(prompt("Your answer"));
console.log(answer);
console.log(question.get(question.get("correct") === answer));

// Convert map to array
console.log(...question); // → (7) [Array(2), Array(2), Array(2), ...]
console.log([...question.keys()]); // → (7) ['question', 1, 2, 3, 'correct', true, false]
console.log([...question.values()]); // → (7) ['What is th…language?', 'C', 'Java', ...]