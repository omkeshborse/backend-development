/* 
    forEach method :
     The forEach method is a higher-order function in JavaScript that is used
    to iterate over elements in an array. It takes a callback function as its
    argument, and this callback function is applied to each element in the array.


        basically use for iterate over list to perform some task 
*/

players = ["Sachin", "Virat", "Dhoni", "Rohit"];
players.forEach((player) => {
  console.log(player);
});

/* The key characteristics of forEach are:

    Iteration: It iterates over each element in the array.
    No Return Value: It does not return a new array. It's typically used for its side 
    effects (like logging, updating variables outside the loop, etc.).
    Immutable: It does not modify the original array. 
*/

/* 
    map --> Creation of new transformed array

    The map method in JavaScript is indeed a higher-order function used for 
    transforming arrays. It takes a callback function as its argument and applies that 
    function to each element of the array, creating a new array with the results of 
    calling the callback function on each element.
*/

/* Q1 make array of Cube of all item of array   */

arr = [1, 2, 3, 4, 5, 6];

let cubArr = arr.map((num) => {
  return num * num * num;
});
console.log(cubArr);

/*
    callback in map : A function that produces an element of the new array, taking three arguments:
    currentValue: The current element being processed in the array.
    index (optional): The index of the current element being processed in the array.
    array (optional): The array map was called upon.
    The map method does not mutate the original array; instead, it creates and returns
    a new array based on the transformation logic defined in the callback function.

*/

/* 
    filter method  : The filter method in JavaScript is another higher-order function 
    used for working with arrays. It creates a new array containing all elements that 
    pass the test implemented by the provided callback function

    const newArray = array.filter(callback(currentValue, index, array) {
  // return true if element should be included in the new array, false otherwise
});

*/

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenArr = arr1.filter((num) => num % 2 === 0);
console.log(evenArr);

/* 

callback: A function that tests each element of the array. It takes three arguments:
currentValue: The current element being processed in the array.
index (optional): The index of the current element being processed in the array.
array (optional): The array filter was called upon.
The filter method does not mutate the original array; instead, it creates and returns a new array containing only the elements for which the callback function returned true.
*/

/* 
reduce  method : apply operation on all element of array
like sum of all element of array

The reduce method in JavaScript is a higher-order function used to apply a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
*/

const sum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce((current, next) => current + next);
console.log(sum);
