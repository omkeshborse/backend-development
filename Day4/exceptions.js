/* 
exceptions : 
In JavaScript, the term "exception" is often used to refer to runtime errors or 
exceptional conditions that disrupt the normal flow of control within a program. 
Exceptions are typically caused by unexpected situations, such as attempting to 
perform an invalid operation or encountering unexpected input.

JavaScript provides mechanisms for handling exceptions using try, catch, and finally 
blocks:

The try block is used to enclose code that may throw an exception.
The catch block is used to handle and respond to exceptions thrown within the 
corresponding try block.
The finally block is used to execute cleanup code, regardless of whether an exception 
occurs or not.
*/

/* 
    try{

    }catch{

    }finally{

    }

*/

/* 
    
Syntax errors: These occur when the JavaScript engine encounters code that violates the language syntax rules.


*/
// console.log("hello

/* 
Runtime  exceptions 
TypeError: x.toUpperCase is not a function
Type errors: These occur when an operation is performed on a value of an inappropriate type.
Reference errors: These occur when trying to access a variable or function that is not defined.
Range errors: These occur when a value is not within the expected range.
Custom errors: Developers can also create custom error objects using the Error constructor to represent specific types of errors within their applications.

*/
// let x = 5;
// console.log(x.toUpperCase());

/* 

Logical error 
    ex : (programming language genrally not allow to divide by 0
*/

// let num = 5;
// for (i = -3; i < 5; i++) {
//   console.log(num / i); //Logical error dividing by zero
// }

/* output : 
-1.6666666666666667
-2.5
-5
Infinity (programming language genrally not allow to divide by 0)
5
2.5
1.6666666666666667
1.25
*/

/* 
    try: This block contains the code that you anticipate might throw an exception. 
    It's where you wrap the risky code that could potentially result in an error.

    catch: In the catch block, you specify the code that will handle the exception if 
    one occurs within the corresponding try block. It allows you to gracefully respond 
    to errors, log them, or take corrective actions.

    finally: The finally block, if provided, is executed regardless of whether an 
    exception occurred or not. It's useful for cleanup tasks or any final actions that 
    need to be performed, such as releasing resources, regardless of the outcome of 
    the try block

*/
let obj = undefined;
// console.log(obj.name);
//TypeError: Cannot read properties of undefined (reading 'name')

try {
  // let obj = { name: "omkesh" };
  console.log(obj.name);
} catch (error) {
  console.log("exception handle");
  console.log("error messagae", error.message);
  console.log(error);
} finally {
  console.log("I will always execute");
}
