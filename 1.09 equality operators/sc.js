// == (Loose Equality)
// Compares two values for equality after performing type conversion.
// Type coercion: Converts the operands to the same type before comparing.

console.log(5 == "5"); // true 
console.log(true == 1); // true 
console.log(null == undefined); // true
console.log(0 == false); // true

// === (Strict Equality)
// No type coercion: Both value and type must be the same.
console.log(5 === "5"); // false (different types: number and string)
console.log(true === 1); // false (different types: boolean and number)
console.log(null === undefined); // false (different types)
console.log(0 === false); // false (different types)