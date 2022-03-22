// Three different ways to declare variables in javascript

// Mutable variable - use let
let age = 30;
age = 31;

// Immutable variable - use const
const birthYear = 1991;
birthYear = 1990; // Throws an error

// Function-scoped variable - use var (legacy)
var job = "Programmer";
job = "Teacher";

// Difference between let and var is that let is block scope while var is function scope

function varTest() {
  var x = 1;
  {
    var x = 2; // same variable!
    console.log(x); // 2
  }
  console.log(x); // 2
}

function letTest() {
  let x = 1;
  {
    let x = 2; // different variable
    console.log(x); // 2
  }
  console.log(x); // 1
}

// Assigning variables without a declarator declares them as global properties of the window object (not recommended)
function noDeclaratorTest() {
  x = 5;
}
noDeclaratorTest();
console.log(x); // 5