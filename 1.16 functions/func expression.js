// The function is stored in a variable or a constant.
// not hoisted. You must define them before using them.
// Can Be Passed or Assigned
// used in callbacks, event handlers, higher-order functions.

const add = function (a, b) {
    return a + b;
};
console.log(add(5, 3)); // Output: 8
