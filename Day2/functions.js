/* 
    define a function
*/
function helloStudents() {
  console.log("Hello students");
}

// helloStudents();

/* 
    function declaration 
    function(keyword) functionName(parameters){
        function body/logic
    }
    1 use small case
    2 no gap/space in function name

    functions calling/executions

    functionName(Arguments)
*/

/* 
sum of two numbers
 */

function sum(a, b) {
  return a + b;
}
/* return is keyword is use to return/gives output-values back */

// console.log(sum(6, 5));
// this returns 11  --> to see out put place in console.log() or store in any variable
// console.log(sum(5)); // 5 + undefined ==NaN

// function with default parameter value
function add(a, b = 5) {
  return a + b;
}

// console.log(add(2)); // 7

function func() {
  console.log(arguments);
  //[Arguments] { '0': 1, '1': 3, '2': 4, '3': 5, '4': 6 }
}

// func(1, 3, 4, 5, 6);

/*  ^^
    ||
In JavaScript, the arguments object is a local variable available 
within all functions. It's an array-like object that holds all 
the parameters passed to the function. Even if the function is 
defined with a fixed number of parameters, arguments can still 
access any additional arguments that are passed in when the 
function is called

*/


