/*
* Complete the following:
* 
* 1. Create a function named "square" that takes one number parameter
     - the function must then return the mathmatical square of that parameter
*    - show this function works by calling three times (with three different inputs) and logging the results
* 2. Create a function that takes in an array of booleans as a parameter
*    - the function must log the count of how many true values are in the array and also how many false values there are
*    - then it must return the length of the array
*    - show this function works by calling it with an array of booleans and then logging the result (which is the length of the array)
*/

// Begin writing your code below

// First function...
function square(num1) {
     console.log(num1 * num1);
}
// Callin' 'em...
square(7);
square(4);
square(9);

// Second function...
function booleans(array1) {
     console.log()
     return array1.length
}
//Callin' it...
let result = booleans([true, false, false, true, true]);
// Not code below here, demonstrations...

function addStuff(num1, num2) {  // (1, 1)
  return num1 + num2; // 2
}

let sum = addStuff(1,1);