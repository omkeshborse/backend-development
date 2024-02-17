/* 
    Bring the logic of adding two numbers ? 
*/
/* note require is need clear path
    (.) represent current location 
    When using require in Node.js, the path you provide is relative to the current 
    file's location.
    it looks for a file named myFunction.js in the same directory as the file where 
    you're calling require('./myModule.js').
*/
const operations = require("./myModule.js");
console.log(typeof operations); // object
console.log(operations);
console.log(operations.add(5, 6));
console.log(operations.product(5, 6));
