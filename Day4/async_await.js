/* async_await */

// async function getMessage() {
//   return "Hello Student";
// }
// console.log(getMessage()); //Promise { 'Hello student' }

// getMessage()
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
/* 
    normal function  declare above is reture  "Hello student" message  but when 
    async word at start of programming returns promise of Hello Student
    output: 
    Promise { 'Hello Student' }
    to get value from promise using then & catch block

    When you declare a function as async, it always returns a promise, regardless of 
    what you explicitly return inside the function. So even though you're returning a 
    string directly in your getMessage function, because it's declared as async, it 
    wraps that string in a promise. That's why when you call 
    console.log(getMessage()), you see a Promise object with the resolved value 'Hello 
    Student'. If you want to get the resolved value, you would typically use .then() 
    or await to handle the promise.

*/

/*
    Print Hello after wait
*/
console.log("Hello from begining");
async function printHelloAfterWait() {
  console.log("First line");
  let data = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello peter");
    }, 3000);
  });
  let result = await data; // Start waiting for data promise to be completed
  console.log(result);
  console.log("Last line");
}
printHelloAfterWait();
console.log("Hello from last");
// await wait for the promise to complete , --> next step
/* 
    with normal function output of above code is as follow : 
    first line 
    last line 
    Hello peter

function printHelloAfterWait() {
  console.log("First line"); // 1
  setTimeout(() => {          //2
    console.log("Hello peter");
  }, 3000);
  console.log("Last line"); //3
}
printHelloAfterWait();
 
but in any case/situation i have print 1 line ,
then wait for 2 line and 
then prit 3rd line 
    
*/

/* 
Of course, here's the breakdown with correct spellings:

1. **Initial Setup**:
   - `console.log("Hello from beginning");`: This line executes first and prints "Hello from beginning" to the console.

2. **Function Definition**:
   - `async function printHelloAfterWait() { ... }`: This defines the asynchronous function `printHelloAfterWait`, but it doesn't execute any code inside the function yet.

3. **Execution of Code Inside `printHelloAfterWait` Function**:
   - `console.log("First line");`: This line is executed within the function and prints "First line" to the console.
   - `let data = new Promise(...);`: This line creates a new Promise, initiating a delay of 3 seconds before resolving.
   - `console.log("Hello from last");`: This line is executed outside the function due to its placement in the script, and it prints "Hello from last" to the console.
   - The script now waits for the 3-second delay imposed by the Promise.

4. **Resolution of Promise**:
   - After approximately 3 seconds, the Promise resolves.
   - `await data;` pauses the execution of the function until the Promise `data` is resolved. During this time, control returns to the event loop, allowing other synchronous tasks to execute.

5. **Continuation of Function Execution**:
   - Once the Promise `data` resolves, control returns to the function.
   - `let result = await data;`: This line assigns the resolved value of the Promise (`"Hello peter"`) to the variable `result`.
   - `console.log(result);`: This line prints the value of `result` ("Hello peter") to the console.
   - `console.log("Last line");`: This line is executed within the function and prints "Last line" to the console.

6. **Execution After the Function Call**:
   - `printHelloAfterWait();`: This line invokes the `printHelloAfterWait` function, initiating the execution of the function's code.
   - `console.log("Hello from last");`: This line is executed outside the function call and prints "Hello from last" to the console.

So, the complete execution order and output with correct spellings is:
```
Hello from beginning
First line
Hello from last
Hello peter
Last line
Hello from last
```

*/

/* Application 
    real life Bakend application 
    
    function Process(){
        // 1 .fetch data from DB  , so i have to wait for data to fetch and then 
        process to next step
        //process return 
    } 

*/
