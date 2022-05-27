"use strict";

const menu = ["Pizza", "Pasta", "Risotto"];

for (const item of menu) console.log(item);
/* → Pizza
     Pasta
     Risotto */

for (const item of menu.entries()) console.log(item);
/* → (2) [0, 'Pizza']
     (2) [1, 'Pasta']
     (2) [2, 'Risotto'] */

console.log(menu.entries()); // → Array Iterator