const person = {
    name: "John",
    age: 30,
    job: "Developer"
};

let entries = Object.entries(person);
console.log(entries);   // Output: [["name", "John"], ["age", 30], ["job", "Developer"]]


let values = Object.values(person);
console.log(values);  // Output: ["John", 30, "Developer"]


let keys = Object.keys(person);
console.log(keys);  // Output: ["name", "age", "job"]

const persons2 = { name: "John", age: 30 };
console.log(persons2.hasOwnProperty("name"));  // true
console.log(persons2.hasOwnProperty("address"));  // false
