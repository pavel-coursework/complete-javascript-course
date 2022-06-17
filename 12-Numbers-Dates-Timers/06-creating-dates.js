"use strict";

// Create a date
console.log(new Date());
// → Fri Jun 17 2022 09:03:12 GMT+0300 (Eastern European Summer Time)
console.log(new Date("July 3 2022 08:03:41"));
// → Sun Jul 03 2022 08:03:41 GMT+0300 (Eastern European Summer Time)
console.log(new Date(2037, 10, 19, 15, 23, 5));
// → Thu Nov 19 2037 15:23:05 GMT+0200 (Eastern European Summer Time)
console.log(new Date(2037, 10, 33));
// → Thu Dec 03 2037 00:00:00 GMT+0200 (Eastern European Summer Time)
console.log(new Date(0));
// → Thu Jan 01 1970 02:00:00 GMT+0200 (Eastern European Summer Time)
console.log(new Date(3 * 24 * 60 * 60 * 1000));
// → Sun Jan 04 1970 02:00:00 GMT+0200 (Eastern European Summer Time)

// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future.getFullYear()); // → 2037
console.log(future.getMonth()); // → 10
console.log(future.getDate()); // → 19
console.log(future.getDay()); // → 4
console.log(future.getHours()); // → 15
console.log(future.getMinutes()); // → 23
console.log(future.getSeconds()); // → 0
/* toISOString is useful when you want to convert particular 
date into a string where you can store somewhere */
console.log(future.toISOString()); // → 2037-11-19T13:23:00.000Z
console.log(future.getTime()); // → 2142249780000;

console.log(new Date(2142249780000));
// → Thu Nov 19 2037 15:23:00 GMT+0200 (Eastern European Summer Time)

console.log(Date.now()); // → 1655446724965

future.setFullYear(2040);
console.log(future.getFullYear()); // → 2040
