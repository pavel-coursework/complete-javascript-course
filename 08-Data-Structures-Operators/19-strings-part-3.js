"use strict";

console.log("a+very+nice+string".split("+"));
// → (4) ['a', 'very', 'nice', 'string']

// Split and Join
const [firstName, lastName] = "Pavel Georgiev".split(" ");
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName); // → Mr. Pavel GEORGIEV

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }

  console.log(namesUpper.join(" "));
};

capitalizeName("jessica ann smith davis"); // → Jessica Ann Smith Davis
capitalizeName("pavel georgiev"); // → Pavel Georgiev

// Padding
const message = "Go to gate 23!";
console.log(message.padStart(25, "+")); // → +++++++++++Go to gate 23!
console.log(message.padEnd(25, "+")); // → Go to gate 23!+++++++++++

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(32415216)); // → ****5216
console.log(maskCreditCard("62416278")); // → ****6278

// Repeat
const message2 = "foo ";
console.log(message2.repeat(5)); // → foo foo foo foo foo

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"🛩".repeat(n)}`);
};
planesInLine(5); // → There are 5 planes in line 🛩🛩🛩🛩🛩
planesInLine(3); // → There are 3 planes in line 🛩🛩🛩
planesInLine(12); // → There are 12 planes in line 🛩🛩🛩🛩🛩🛩🛩🛩🛩🛩🛩🛩
