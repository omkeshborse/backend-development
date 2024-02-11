var number = 20;
var number2 = 21;

// if (number % 2 === 0) {
//   console.log("even");
// }
// console.log("after if");

// if (number2 % 2 === 0) {
//   console.log("even");
// }
// console.log("after if");

/* 
    if(boolean){
        if block code 
    }

    if condition is true then it executes block of code   
*/

// if (number % 2 == 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }
// console.log("after if else");
/* 
    if condition get satisfy then if block is executes ,
    if condition  is false then else block get executes 

*/

/* ternary operators  */

// number % 2 == 0 ? console.log("even") : console.log("odd");
// number2 % 2 == 0 ? console.log("even") : console.log("odd");

/* 
    (boolean expression)  ? "executes on true" : "executes on false"
*/

/* nested conditionals */
// var a = 10;
// if (a >= 0) {
//   if (a > 5) {
//     console.log("a is greater than 0 and 5");
//   } else {
//     console.log("a is greater than 0  but less 5");
//   }
// } else {
//   console.log("a is less than 0");
// }

// a > 0
//   ? a > 5
//     ? console.log("a is greater than 0 and 5")
//     : console.log("a is greater than 0  but less 5")
//   : console.log("a is less than 0");

/* switch statement  */
var fruit = "mango";
switch (fruit) {
  case "apple":
    console.log("it's an apple");
    break;
  case "mango":
    console.log("it's a mango");
    break;
  default:
    console.log("Not a valid fruit");
    break;
}

/* 

    switch (key) {
    case value:
        
        break; // break is important in switch case if not break keyword  use  then all case executed

    default:
        break;
}

*/
