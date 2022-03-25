/* Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.

Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”

Test data:
§ Data 1: Test for bill value 275
§ Data 2: Test for bill value 40
§ Data 3: Test for bill value 430*/

// Test Data 1:
const bill = 275;

/* Test Data 2:
const bill = 40; */

/* Test Data 3:
const bill = 430; */

const tip =
  bill >= 50 && bill <= 300
  ? (15 / 100) * bill
  : (20 / 100) * bill;

  const total = bill + tip;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);
// Test Data 1 → The bill was 275, the tip was 41.25, and the total value 316.25
// Test Data 2 → The bill was 40, the tip was 8, and the total value 48
// Test Data 3 → The bill was 430, the tip was 86, and the total value 516
