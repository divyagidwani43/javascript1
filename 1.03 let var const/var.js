// Variables declared with varinside a { } block can be accessed from outside the block:
{
  var x = 2;
}
// x CAN be used here


// Variables defined with var can be redeclared.
var x = "John Doe";
var x = 0;


// Redeclaring Variables
// Redeclaring a variable using the var keyword can impose problems.
var x = 10;
// Here x is 10

{
var x = 2;
// Here x is 2
}
// Here x is 2

// Redeclaring a variable using the let keyword can solve this problem.
