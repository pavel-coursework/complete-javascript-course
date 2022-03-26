/* LECTURE: Functions
1. Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the
returned values in 3 different variables, and log them to the console */

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const descBulgaria = describeCountry("Bulgaria", 6.8, "Sofia");
const descJapan = describeCountry("Japan", 125.8, "Tokyo");
const descChina = describeCountry("China", 1449, "Beijing");

console.log(descBulgaria);
// → Bulgaria has 6.8 million people and its capital city is Sofia
console.log(descJapan);
// → Japan has 125.8 million people and its capital city is Tokyo
console.log(descChina);
// → China has 1449 million people and its capital city is Beijing


/* LECTURE: Function Declarations vs. Expressions
1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population
represents. For example, China has 1441 million people, so it's about 18.2% of
the world population
2. To calculate the percentage, divide the given 'population' value by 7900
and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called
'percentageOfWorld2', and also call it with 3 country populations (can be
the same populations) */

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const percBulgaria1 = percentageOfWorld1(6.8);
console.log(percBulgaria1); // → 0.08607594936708861
const percJapan1 = percentageOfWorld1(125.8);
console.log(percJapan1); // → 1.5924050632911393
const percChina2 = percentageOfWorld2(1449);
console.log(percChina2); // → 18.341772151898734