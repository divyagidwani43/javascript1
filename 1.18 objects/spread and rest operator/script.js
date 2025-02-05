const a = { name: "Alice", age: 25 };
a2= {...a}
console.log(a2)


const person = { name: "Alice", age: 25 };
const address = { city: "New York", country: "USA" };

const user = { ...person, ...address };

console.log(user);
// Output: { name: "Alice", age: 25, city: "New York", country: "USA" }





// REST
const P = { name: "Alice", age: 25, city: "New York", country: "USA" };

const { name, ...rest } = P;

console.log(name);      // Output: Alice
console.log(rest);   // Output: { age: 25, city: "New York", country: "USA" }
