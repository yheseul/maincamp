// import fruits, { apple, banana } from "./b.js";
// console.log(`apple: ${apple}`);
// console.log(`banana: ${banana}`);
// console.log(`fruits: ${fruits}`);

import * as fruits from "./b.js";

console.log(`apple: ${fruits.apple}`);
console.log(`banana: ${fruits.banana}`);
console.log(`orange: ${fruits.orange}`);
console.log(`fruits.default: ${fruits.default}`);
