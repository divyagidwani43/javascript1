// SPREAD
const numbers = [1, 2, 3];
const moreNumbers = [4, 5, 6];

const combined = [...numbers, ...moreNumbers];

console.log(combined);
// Output: [1, 2, 3, 4, 5, 6]




// REST
const num = [1, 2, 3, 4, 5];

const [first, second, ...rest] = num;

console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(rest);   // Output: [3, 4, 5]
