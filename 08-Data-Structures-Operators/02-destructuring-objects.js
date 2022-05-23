"use strict";

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
  order: function (fromStarter, fromMain) {
    return [this.starterMenu[fromStarter], this.mainMenu[fromMain]];
  },
  orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered in ${address} at ${time}`
    );
  },
};

// Destructuring objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
// → Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

// Using different variable names than properties name
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
// → Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

// Default values + different variable names
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
// → (0) [] (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
// { a, b } = obj; cannot write it this way as when we start anything with {, js is expecting a code block.
// Solution to overcome this is to wrap everything inside ()
({ a, b } = obj);
console.log(a, b); // → 23 7

// Nested objects
const { fri: { open: o, close: c } } = openingHours;
console.log(o, c); // → 11 23

// Check orderDelivery method
restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
}); // → Order Received! Garlic Bread and Risotto will be delivered in Via del Sole, 21 at 22:30
  