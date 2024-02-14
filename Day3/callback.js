/* 
    callback : 
    1. function 
    2. passed as an argument to another function 
    3. use in asynchronous programming 

*/
function greet(name, callback) {
  let greeting = "hello " + name;
  callback(greeting);
}

function displayGreeting(message) {
  console.log(message);
}
greet("omkesh", displayGreeting);
/* 
    in above example callback is function as an argument called as callback function.

*/

/* 
    Call-back hellPyramid of doom 
    Callback hell, also known as the Pyramid of Doom, is a common problem in 
    asynchronous JavaScript code that arises when you have multiple nested callback 
    functions. This can lead to code that is difficult to read, understand, and 
    maintain due to its deeply nested structure.

        
    Callback hell can also lead to issues such as:
    1. Error Handling: Managing errors becomes challenging as errors need to be handled 
    at each level of nesting, leading to verbose error-handling code.

    2. Debugging: Debugging nested callbacks can be difficult, as it's not always clear 
    where an error originates or how the data flows through the code.

    3. Readability and Maintainability: Code readability and maintainability suffer as 
    the codebase grows, making it harder for developers to understand and modify the 
    code.

    To avoid callback hell and improve the readability and maintainability of your 
    code, you can use techniques such as:

    1   Named Functions: Define named functions for callback functions to give them 
    meaningful names and improve code readability.

    2. Promises: Use Promises, which provide a more structured and readable way to 
    handle asynchronous operations and avoid callback hell. Promises allow you to 
    chain asynchronous operations sequentially and handle errors more effectively.

    3.Async/Await: Use the async/await syntax, which is built on top of Promises and 
    provides a more synchronous-like way to write asynchronous code. async/await makes 
    asynchronous code easier to read, write, and reason about compared to nested 
    callbacks.
*/
getUser(function (user) {
  getPosts(user.id, function (post) {
    displayUserInfoAndPost(user, post, function () {
      console.log("User info and posts successfully displayed!");
    });
  });
});
