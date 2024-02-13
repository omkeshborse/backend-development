/* 
    global scope : variable declare outside scope is in Global 
    scope  , value is available everywhere inside function as well
    as outside function 
*/
// ex
// var name = "peter";
// console.log(name);

// function func() {
//   console.log(name);
// }
// func();

/* 
 local scope /function scope variables

*/

function num() {
  var num1 = 24;
  console.log(num1);
}
// num();

// console.log(num1);
//accessing outside function give error variable is not defined

/* block scope  : declared inside scope  
    Variables declared with let or const are block-scoped, 
    meaning they are only accessible within the block (enclosed 
    by {}) in which they are declared.
*/

{
  var x = 20;
  let a = 20;
  console.log(x, a);
  //var keyword has no block scope
  //  a has block scope
}
console.log(x, a);
//ReferenceError: a is not defined because of block scope
