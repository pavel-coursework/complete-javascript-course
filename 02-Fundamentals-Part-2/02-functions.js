"use strict";

function logger() {
  console.log("My name is Jonas");
}

// calling / running / invoking function
logger(); // → My name is Jonas
logger(); // → My name is Jonas

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges}`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleJuice); // → Juice with 5 apples and 0
console.log(appleOrangeJuice); // → Juice with 2 apples and 4