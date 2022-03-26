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
