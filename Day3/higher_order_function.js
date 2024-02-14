/* 

A higher-order function is a function that either takes one or more functions as 
arguments or returns a function as its result. Given the signature you've provided, a 
higher-order function would take a parameter that could be either a primitive type, an 
object, or a function, and it could return a result that could be either a primitive 
type, an object, or a function

*/
// function operation(operationFn, a, b) {
//   return operationFn(a, b);
// }
// function add(a, b) {
//   return a + b;
// }
// let result = operation(add, 1, 4);
// console.log(result);
/* 
    in above function is  higher_order_function  as it takes  operationFn as argument  
    this is operationFn identify base on it invoke at return as passes two arguments 
    in operationFn    


    Yes, indeed! The operation function you provided is a higher-order function 
    because it takes another function (operationFn) as one of its arguments. It allows 
    for the flexibility of passing different operations to be performed on the given 
    arguments a and b.

    In your example, add is passed as the operationFn, and 1 and 4 are passed as a and b, respectively. The operation function then invokes operationFn(a, b) internally, 
    effectively executing the add function with the provided arguments.
    
    This illustrates the concept of higher-order functions, where functions can accept 
    other functions as arguments, enabling more dynamic and flexible behavior

*/

/*  */

function getGreetMethod() {
  return function () {
    console.log("hello");
  };
}
const greetFn = getGreetMethod();
// This assigns the returned function to the variable greet
greetFn();
// This calls the returned function, which logs "hello" to the console

/* 
    The getGreetMethod function you provided is an example of a higher-order function. 
    It returns another function, making it higher-order because it operates on 
    functions.
    

    In this example, getGreetMethod returns a function that, when invoked, logs 
    "hello" to the console. By calling getGreetMethod, you get back a function, and 
    then calling that function (greet()) actually executes the inner function that 
    logs "hello" .

    This is an example of how higher-order functions can be used to encapsulate 
    functionality and provide flexibility in JavaScript.

*/
