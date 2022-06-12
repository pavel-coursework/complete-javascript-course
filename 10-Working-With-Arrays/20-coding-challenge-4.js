/* Coding Challenge #4
Julia and Kate are still studying dogs, and this time they are studying if dogs are
eating too much or too little.
Eating too much means the dog's current food portion is larger than the
recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10%
above and 10% below the recommended portion (see hint).

Your tasks:
1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
the recommended food portion and add it to the object as a new property. Do
not create a new array, simply loop over the array. Formula:
recommendedFood = weight ** 0.75 * 28. (The result is in grams of
food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
the owners array, and so this one is a bit tricky (on purpose)
3. Create an array containing all owners of dogs who eat too much
('ownersEatTooMuch') and an array with all owners of dogs who eat too little
('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
too little!"
5. Log to the console whether there is any dog eating exactly the amount of food
that is recommended (just true or false)
6. Log to the console whether there is any dog eating an okay amount of food
(just true or false)
7. Create an array containing the dogs that are eating an okay amount of food (try
to reuse the condition used in 6.)
8. Create a shallow copy of the 'dogs' array and sort it by recommended food
portion in an ascending order (keep in mind that the portions are inside the
array's objects)
The Complete JavaScript Course 26

Test data:
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
]; */

"use strict";

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// Task 1
dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

// Task 2
const sarahsDog = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(sarahsDog);
// → {weight: 13, curFood: 275, owners: Array(2), recFood: 191}

function findDogAppetite(dog) {
  if (dog.curFood < dog.recFood * 0.9) {
    return "too little";
  } else if (dog.curFood > dog.recFood * 1.1) {
    return "too much";
  }

  return "normal";
}

console.log(`Sarah's dog eats ${findDogAppetite(sarahsDog)}`);
// → Sarah's dog eats too much

// Task 3
const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recFood * 0.9)
  .flatMap((dog) => dog.owners);

console.log(ownersEatTooLittle); // → (2) ['Alice', 'Bob']

const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recFood * 1.1)
  .flatMap((dog) => dog.owners);

console.log(ownersEatTooMuch); // → (3) ['Matilda', 'Sarah', 'John']

// Task 4
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);
// → Alice and Bob's dogs eat too little!

console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
// → Matilda and Sarah and John's dogs eat too much!

// Task 5
console.log(dogs.some((dog) => dog.curFood === dog.recFood)); // false

// Task 6
console.log(dogs.some((dog) => findDogAppetite(dog) === "normal")); // true

// Task 7
const dogsThatEatNormal = dogs.filter((dog) => findDogAppetite(dog) === "normal");
console.log(dogsThatEatNormal);
// → [{weight: 32, curFood: 340, owners: Array(1), recFood: 376}]

// Task 8
const filteredDogs = dogs.sort((a, b) => a.recFood - b.recFood);
console.log(filteredDogs);
