// • An expression is a piece of code that produces a single value
console.log(3 + 4);
console.log(1991);
console.log(true && false && !false);

/* • Statement is a bigger piece of code that is executed and which does
not produce a value on itself */
if (23 > 10) { // This statement doesn't produce a value
  const str = "23 is bigger"; // It only declares this variable
}

// foo(if () {return 2}) // Throws an error

/* • JavaScript expects statements and expressions in different places for
e.g. in template literals we can use only expressions, but not statements */
const expression1 = "Jonas";
const expression2 = 2037 - 1991;
console.log(`My name is ${expression1} and I am ${expression2} years old`);