"use strict";

// Set is a collection of unique values
const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log(ordersSet);
// → Set(3) {size: 3, Pasta, Pizza, Risotto}
console.log(new Set("Jonas"));
// → Set(5) {size: 5, J, o, n, a, s}

// 1. Get the size of the set
console.log(ordersSet.size); // → 3

// 2. Check if an element is in the set
console.log(ordersSet.has("Pizza")); // → true
console.log(ordersSet.has("Bread")); // → false

// 3. Add new element to a set
ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");
// Check if the Garlic bread is add only once
console.log(ordersSet);
// → Set(4) {size: 4, Pasta, Pizza, Risotto, Garlic Bread}

// 4. Delete an element from the set
ordersSet.delete("Risotto");
// Check if the Risotto is deleted
console.log(ordersSet);
// → Set(3) {size: 3, Pasta, Pizza, Garlic Bread}

// NOTE: Retrieve data from set - Sets do not have indexes

// 5. Delete all the elements of the set
ordersSet.clear();

// Loop over sets
for (const order of ordersSet) console.log(order);
/* → Pasta
     Pizza
     Garlic Bread */

// Example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = new Set(staff);
console.log(staffUnique);
// → Set(3) {size: 3, Waiter, Chef, Manager}

// Conversion from set to array - use destructuring
console.log([...staffUnique]); // → (3) ['Waiter', 'Chef', 'Manager']
console.log("Unique positions are", staffUnique.size); // → Unique positions are 3
console.log(new Set("jonassschmedtmann").size); // → 11
