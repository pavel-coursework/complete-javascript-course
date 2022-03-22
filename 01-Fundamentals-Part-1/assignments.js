/* LECTURE: Values and Variables
1. Declare variables called 'country', 'continent' and 'population' and
assign their values according to your own country (population in millions)
2. Log their values to the console */

const country = "Bulgaria";
const continent = "Europe";
let population = 6.8;

console.log("Country: " + population); // Country: Bulgaria
console.log("Continent: " + continent); // Continent: Europe
console.log("Population: " + population); // Population: 6.8


/* LECTURE: Data Types
1. Declare a variable called 'isIsland' and set its value according to your
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console */

const isIsland = false;
let language;

console.log(typeof isIsland); // boolean
console.log(typeof population); // number
console.log(typeof country); // string
console.log(typeof language); // undefined
