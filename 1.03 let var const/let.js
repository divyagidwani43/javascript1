//let is used to declare variable whose value we can change later
//we can also declare empty variable using let
let age = 12;
age = 13;


let name;
console.log(name); //will be undefined
name = 'mosh';
console.log(name); //will be mosh


// Variables declared inside a { } block cannot be accessed from outside the block:
{
    let x = 2;
}
// x can NOT be used here


// Variables defined with let can not be redeclared.
let x = "John Doe";
//   let x = 0;


// Redeclaring a variable inside a block will not redeclare the variable outside the block:
let x2 = 10;
// Here x2 is 10
{
let x2 = 2;
// Here x2 is 2
}
// Here x2 is 10


// Redeclaring a variable with let, in another block, IS allowed:
let x3 = 2;   // Allowed
{
let x3 = 3;   // Allowed
}
// With let, redeclaring a variable in the same block is NOT allowed:
{
    let x3 = 2;   // Allowed
    // let x3 = 3;   // Not allowed
}