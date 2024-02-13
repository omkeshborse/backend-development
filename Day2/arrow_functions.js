/* 
    function with no arguments and no return
*/
var Hello = () => console.log("Hello world");
// Hello();
/* 
    var functionName = (parameters) => functionBody/logic 

*/

/* 
functions with parameters and return 
*/

var sum = (a, b) => a + b;
// console.log(sum(1, 3));

/* 
    function with parameters ,multiple lines of function body
*/
var process = (a, b) => {
  console.log("need to process");
  //   console.log(arguments);
  return a * b;
};

// console.log(process(5, 6));

/* 
difference between  normal function and arrow functions

normal function has argument object 
but arrow function do not have argument object 
*/

/* I I F E (Immediately invoked function expression) */
(function () {
  console.log("hello peter I I F E");
})();

/* 
    (
        function(){
          function declaration   
        }

    )()  immediate function call
*/
