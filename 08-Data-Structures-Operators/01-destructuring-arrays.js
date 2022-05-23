"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// Storing every element in the array in different variables
const arr = [2, 3, 4];

// Old way of storing array values in different variables
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Destructuring example
const [x, y, z] = arr;
console.log(x, y, z); // → 2 3 4

// Original array is not affected
console.log(arr); // → (3) [2, 3, 4]

// Skipping values with destructuring
let [main, , secondary] = restaurant.categories;
console.log(main, secondary); // → Italian Vegetarian

// Swapping values with destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary); // → Vegetarian Italian

// Destructuring values returned from a functions
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); // → Garlic Bread Pizza

// Destructuring nested arrays (nested destructuring)
const nestedArr = [2, 4, [5, 6]];
const [i, , [j, k]] = nestedArr;
console.log(i, j, k); // → 2 5 6

// Default values for variables to avoid undefined
// Use this technique when you don't know the length of the array that will be returned
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // → 8 9 1
