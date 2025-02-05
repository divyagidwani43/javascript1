// MAP
// Creates a new array by applying a function to each element.
let doubled = numbers.map(num => num * 2);  // [2, 4, 6]
const num2 = [1, 2, 3, 4];
num2.map((value,index,arr)=>console.log(value,index,arr))
// 1 0 [1, 2, 3, 4]
// 2 1 [1, 2, 3, 4]
// 3 2 [1, 2, 3, 4]
// 4 3 [1, 2, 3, 4]


// FILTER
// Creates a new array with all elements that pass a test.
// Only elements that return true will be included in the new array.
const newArray = arr.filter(callback(currentValue, index, array));
let num = [1, 2, 3, 4, 5];
let evennum = num.filter(num => num % 2 === 0);  // [2, 4]


// REDUCE
// accumulator: The accumulated value from the previous iteration.
// currentValue: The current element being processed.
// initialValue: A value to start the accumulation (optional).
const result = arr.reduce(callback(accumulator, currentValue, index, array), initialValue);
const num3 = [1, 2, 3, 4];
const sum = num3.reduce((acc, num) => acc + num, 0);
console.log(sum);  // Output: 10



// FOR EACH
// It’s often used when you need to perform some operation (like logging or modifying) on each element, but you don’t need a new array.
arr.forEach(callback(currentValue, index, array));
const num4 = [1, 2, 3, 4];
num4.forEach(num => {
    console.log(num * 2);
});
// Output: 2 4 6 8 (each value printed on a new line)



// FIND
// Unlike filter(), which returns an array of all matching elements, find() only returns the first matching element.
const num5 = [1, 2, 3, 4, 5];
const firstEven = num5.find(num => num % 2 === 0);
console.log(firstEven);  // Output: 2
const foundElement = arr.find(callback(currentValue, index, array));



// REVERSE
let arr = [1, 2, 3, 4];
arr.reverse();
console.log(arr);  // Output: [4, 3, 2, 1]
