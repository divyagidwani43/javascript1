// No this Binding:
// Inherits this from the surrounding lexical scope.
// Cannot Be Used as Constructors:
// Arrow functions cannot be used with new.
// Implicit Return:
// If the function body has only one expression, the result of that expression is automatically returned without needing the return keyword.

// Basic Syntax
const functionName = (parameters) => {
    // Function body
    return value; // Optional
};


// No Parameters (Use empty parentheses)
const greeet = () => console.log("Hello!");


// Arrow Function with Multiple Statements and parameters
const multiply = (a, b) => {
    const result = a * b;
    return result;
};
console.log(multiply(4, 5)); // Output: 20


// Arrow Function and this Context
const person = {
    name: "Alice",
    sayName: () => {
        console.log(this.name); // Undefined, `this` is not bound to the object
    },
    sayName2: function() {
        console.log(this.name); // 'this' refers to alice
    },
};
person.sayName();
person.sayName2();