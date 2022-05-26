"use strict";

const rest1 = {
  name: "Capri",
  numGuests: 20,
};

const rest2 = {
  name: "La Piazaa",
  owner: "Giovanni Rossi",
};

// Using Logical OR operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// Using Logical OR assignment operator (||=)
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

console.log(rest1); // → {name: 'Capri', numGuests: 20}
console.log(rest2); // → {name: 'La Piazaa', owner: 'Giovanni Rossi', numGuests: 10}

const rest3 = {
  name: "Loopeze",
  numGuests: 0,
};

// Using Nullish assignment operator (null or undefined)
rest3.numGuests ??= 10;
console.log(rest3); // → {name: 'Loopeze', numGuests: 0}

// Assigning a value to a variable if it is currently truthy
// Using Logical AND operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

// Using Logical AND assignment operator (&&=)
rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";
console.log(rest1.owner); // → undefined
console.log(rest2.owner); // → <ANONYMOUS>