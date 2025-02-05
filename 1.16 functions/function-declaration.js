// Hoisted: Function declarations are moved to the top of their scope during execution, so they can be called before their definition.
// Declared independently and not assigned to a variable.

function functionName(parameters) {
    // Function body
    // Return statement (optional)
}


greet(); // Output: Hello! (Function Hoisting)

function greet() {
    console.log("Hello!");
}
greet(); // Output: Hello!


function withParameters(firstName, lastName = "") {
    console.log(`hello ${firstName} ${lastName}`)
    return (`returning ${firstName}`)
}
withParameters('john'); // lastname = undefined 
withParameters('john', 'smith');

console.log(withParameters('john', 'smith'))    //will print return value

//we cann use the value created by funtion and use it esle where by declaring it or storing it in varibale
let q = withParameters('fina', 'matthew');  // q= hello fina matthew
