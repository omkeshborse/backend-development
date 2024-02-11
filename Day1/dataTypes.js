/* primitive */

// string :sequence and combination of character
// var name = "peter";

// var title = "parker";
// console.log(name, title);

// // to identify type of variable is typeof method

// console.log(typeof name);
// console.log(typeof(title));

/* number */
// var age = 19;

// var x = 1.44;
// console.log(age);
// console.log(typeof age);

/* Big Int */
// add suffix "n" to define bigint datatype use to store large number beyond limit of number data type

// const big_number = 123n;
// console.log(typeof big_number);

// console.log(typeof NaN); // NaN(not a number)  is  type of number

/* null  */
// console.log(typeof null); //this print object  but null it self a data type
// it is bug inside javascript

/* undefined */

// var myName;
// console.log(myName);

// undefined vs null

// undefined  : declare variable but not assign value yet .
//  null : purposefully don't  want any value to be a variable

/* boolean : true or false  */

// console.log(typeof true);

/* Symbol */

// var s1 = Symbol();
// Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value or just a Symbol — that's guaranteed to be unique.
// console.log(typeof s1);

/* non primitive datatypes */
/* objects */

// in  2000 --> era of internet  --> real word application development like amazon, facebook , tinder , whatsapp ,instagram etc
// need to represent real life entities like person  , cars

//  person has property name , age & method likes eating ,walking ,reading etc
// car has  property name , model  & method  likes  accelerate , stops , etc
//  to represent in coding Objects are introduces  in javascript

var person = {
  name: "peter",
  age: 23,
  hobby: "cricket",
};

console.log(person);
// var person = { key : value } ;
// keys --> string /Symbol
// value -->any data type
