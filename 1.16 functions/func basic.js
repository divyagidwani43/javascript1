// Function Parameters and Arguments
function greet(name = "Guest") {
    console.log("Hello, " + name);
}
greet(); // Output: Hello, Guest
greet("Alice"); // Output: Hello, Alice

// Return Statement
// Functions return a value. doesn't have a return statement, returns undefined.
function add(a, b) {
    return a + b;
}
console.log(add(3, 4));  // Output: 7

// REST PARAMETER
function sum(...numbers) {
    console.log(numbers)
}
sum(1, 2, 3);  // Output: [1, 2, 3]