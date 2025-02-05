// DECARING ARRAYS
let friends = ['Michael', 'Steven', 'Peter'];                                            //declaring array
console.log(friends);                                                                    // will print (3) i.e length of array then the data

const y = new Array(1991, 1984, 2008, 'twenty twenty two');                              //another way to declare array call y array can have multiple data types in js
console.log(y);


// ARRAY CAN HOLD DIFF DATA TYPES
const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];               //arrays can be called inside arrays ,variables can be input , as well as math expression
console.log(jonas);


//INDEXING
console.log(friends[0]);                                                                 //calling array

// LENGTH
console.log(friends.length);                                                             //will print array length

// LAST INDEX
console.log(friends[friends.length - 1]);                                                //will print last index number



//ADD TO ARRAY
friends[3] = 'dee';                                                                       //will add dee at 3 index          
console.log(friends);




//OVERWRITING
friends[2] = 'Jay';                                                                      //will overwrite [2] const or let no matter
console.log(friends);

friends = ['Bob', 'Alice'];                                                              //will overwrite only when its in let data type const will error
console.log(friends);
// const friendsWithConst = ['Michael', 'Steven', 'Peter'];
//friendsWithConst['bob','wick'];                                                        //will error






// USING ARRAY TO PASS AS PARAMETERS IN FUNCTION
const calcAge = function (birthYeah) {                                                   //function
    return 2037 - birthYeah;
}
const years = [1990, 1967, 2002, 2010, 2000];                                            //values to be pararmeters in funtion as array

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];   //values of previous array used in another array
console.log(ages);


///////////////////////////////////////
// Basic Array Operations (Methods)
// friends = ['Bob', 'Alice'];

// ADD TO ARRAY
console.log("push")
console.log(friends)

friends.push('Jay');                                                                     // Add elements in last

console.log(friends);
console.log(friends.push('hina'));                                                       //will push hina as well as print the length of array after push   

let a = friends.push('romero');
console.log(a);                                                                          //same can be done like this
console.log(friends);


friends.unshift('John');                                                                 // add in start
console.log(friends);

// REMOVE ELEMENTS
friends.pop();                                                                           // Last element will be deleted

console.log(friends);
console.log(friends.pop());                                                              //will delete one element and print the deleted element here well    

const b = friends.pop();
console.log(b);                                                                          //does the same
console.log(friends);

// DELETE ELEMENT FROM START
friends.shift();                                                                         // First element will be removed
console.log(friends);

// DISPLAY INDEX
console.log(friends.indexOf('Alice'));                                                   //will display where the element is i.e the index
console.log(friends.indexOf('jay'));                                                     //no such name now it was there before so it will display -1

// SEE WHAT ARRAY HAS
console.log(friends.includes('jay'));                                                    //false array doesnt include jau
console.log(friends.includes('Bob'));                                                    //true as array has bob
friends.push(23);
console.log(friends.includes('23'));                                                     //it has strict coersion it will display false due to string of 23 not the number
console.log(friends.includes(23));                                                       //will give true 



