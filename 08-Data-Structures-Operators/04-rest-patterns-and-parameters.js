"use strict";

// Rest Patterns looks exactly like Spread Operator but does the opposite
// It collects multiple elements and converts them into an array
// It is called rest as it collects rest of the elements and club it together

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderPizza: function(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

// REST, because on LEFT side of =
// Destructuring
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // → 1 2 (3) [3, 4, 5]

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood); // → Pizza Risotto (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); // → {thu: {…}, fri: {…}}

// Functions
const add = function (...numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  console.log(sum);
};

add(2, 6); // → 8
add(5, 3, 7, 1); // → 16
add(1, 2, 5, 3, 2, 3, 4); // → 20

const x = [23, 5, 7];
add(...x); // → 35

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
// → mushrooms
// → (3) ['onion', 'olives', 'spinach']

restaurant.orderPizza("mushrooms");
// → mushrooms
// → (0) []