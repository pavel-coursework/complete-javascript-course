"use strict";

const weekDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

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

// Property KEYS - Object.keys(object)
const properties = Object.keys(openingHours);
console.log(properties); // → (3)[("thu", "fri", "sat")];

console.log(`We are open on ${properties.length} days`);
// → We are open on 3 days

for (const day of Object.keys(openingHours)) {
  console.log(day);
}
/* → thu
     fri
     sat */

// Property VALUES - Object.values(object)
const values = Object.values(openingHours);
console.log(values); // → (3) [{…}, {…}, {…}]

// Property KEYS and VALUES - Object.entries(object)
const entries = Object.entries(openingHours);
console.log(entries); // → (3) [Array(2), Array(2), Array(2)]

for (const [day, {open, close}] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
/* → On thu we open at 12 and close at 22
     On fri we open at 11 and close at 23
     On sat we open at 0 and close at 24 */