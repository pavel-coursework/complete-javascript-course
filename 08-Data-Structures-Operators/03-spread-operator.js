"use strict";

// Spread Operator is used to expand an array into all its elements

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};

const arr = [7, 8, 9];

// Old way of adding new values to the start of an array
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); // → (5) [1, 2, 7, 8, 9]

// Adding new values to an array using spread operator
const newArr = [1, 2, ...arr];
console.log(newArr); // → (5) [1, 2, 7, 8, 9]

// Log individual values of an array
console.log(...newArr); // → 1 2 7 8 9

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu); // → (4) ['Pizza', 'Pasta', 'Risotto', 'Gnocci']

// Spread Operator takes all the elements from an array and does not create a new variables.
// We can only use it in a place where we would write values separated by commas

// Array shallow copy
const mainMenuCopy = [...restaurant.mainMenu];

// Join two arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

/* Spread operator works on all Iterables
   Example: Arrays, Strings, Set, Maps
   Objects are not Iterables */
console.log(..."string"); // → s t r i n g
console.log([..."string"]); // → ['s', 't', 'r', 'i', 'n', 'g']

const ingredients = ["mushrooms", "asparagus", "cheese"];
restaurant.orderPasta(...ingredients);
// → Here is your delicious pasta with mushrooms, asparagus, cheese

// Since 2018 the spread operator also works on objects even though they are not iterables
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Giuseppe" };
console.log(newRestaurant);
// → {foundedIn: 1998, name: 'Classico Italiano', location: 'Via Angelo Tavanti 23, Firenze, Italy', categories: Array(4), starterMenu: Array(4), …}

// Object shallow copy
const restaurantCopy = {...restaurant};