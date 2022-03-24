/* • Falsy values are values that are not exactly false but will
become false when they are converted to a Boolean. In JavaScript there
are over 6 falsy values: undefined , null , NaN , 0 , "" (empty string), and false */
console.log(Boolean(0)); // → false;
console.log(Boolean(undefined)); // → false

// Everything else is called: Truthy values
console.log(Boolean("Jonas")); // → true
console.log(Boolean({})); // → true

const money = 0;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!"); // → You should get a job!
}
/* • The result is false because in a logical context of an if/else statement
condition, JavaScript will try to coerce any value (in this case: 0) into a Boolean,
and this happens using the falsy & truthy value rules. */
