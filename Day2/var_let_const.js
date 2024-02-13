/* 
    var : 
    1. it's used to defined a variable
    2. it has function scope but no block scope
    3. it is hoisted

*/
// function f1() {
//   var i = 5;
//   console.log(i);
// }
// f1();
// console.log(i);
//due to function scope it give ReferenceError i not defined

// {
//   var i = 5; // no block scope
// }
// console.log(i);

// console.log(i); //undefined

// var i = 24;
// console.log(i);
/* 

In JavaScript, variables declared with var are hoisted to the top
of their containing function or global scope. This means that 
while the declaration itself stays where it is, the assignment is 
moved to the top of the scope during the compilation phase. 
However, only the declaration is hoisted, not the initialization

*/

/* 
    let

    1.no hoisting 
    2. Its also has block scope

*/

// console.log(a);

// let a = 5;
//ReferenceError: Cannot access 'a' before initialization
// it is not hoisted

// {
//   let o = 5372; //ReferenceError: o is not defined
//   //   has a block scope
// }
// console.log(o);

/* 
const  
1 .scope is exactly same as let  , 
2 . const variable are final  ,can't be re-assigned a value 
*/

const country = "india";

country = "usa";
//TypeError: Assignment to constant variable.
