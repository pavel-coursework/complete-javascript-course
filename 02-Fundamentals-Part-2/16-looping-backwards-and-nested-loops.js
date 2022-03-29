"use strict";

const jonas = [
  "Jonas",
  "Schmedtmann",
  2022 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(jonas[i]);
}
// → ['Michael', 'Peter', 'Steven']
// → teacher
// → 31
// → Schmedtmann
// → Jonas

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`------ Starting exercise ${exercise}`);

  for (let rep = 1; rep <= 5; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
  }
}
// → ------ Starting exercise 1
// → Lifting weights repetition 1 🏋️‍♂️
// → Lifting weights repetition 2 🏋️‍♂️
// → Lifting weights repetition 3 🏋️‍♂️
// → Lifting weights repetition 4 🏋️‍♂️
// → Lifting weights repetition 5 🏋️‍♂️
// → ------ Starting exercise 2
// → Lifting weights repetition 1 🏋️‍♂️
// → Lifting weights repetition 2 🏋️‍♂️
// → Lifting weights repetition 3 🏋️‍♂️
// → Lifting weights repetition 4 🏋️‍♂️
// → Lifting weights repetition 5 🏋️‍♂️
// → ------ Starting exercise 3
// → Lifting weights repetition 1 🏋️‍♂️
// → Lifting weights repetition 2 🏋️‍♂️
// → Lifting weights repetition 3 🏋️‍♂️
// → Lifting weights repetition 4 🏋️‍♂️
// → Lifting weights repetition 5 🏋️‍♂️
