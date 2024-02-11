/*  assignment operators   */

// var name = "peter"; // = is assignment operator

/* Arithmetics operators */
/* + - * / % */
// console.log(4 + 5);
// console.log(3 - 1);
// console.log(3 * 2);
// console.log(4 / 2);
// console.log(3 % 2); //modulus operator gives reminder
// console.log(4 ** 2); //power operators

/* increment and decrement in js  */
// var i = 1;
// i = i + 1;
// console.log(i);
// console.log(i++); //post increment  first print/assign(operation) then increment
// console.log(i);
// console.log(++i); //pre increment  first increase then assign

/* relational  operators  */

/* Equality ==  , ===(strict) */
// console.log(1 == 1);
// console.log(1 == "1"); //internally converted and then compare two value (not compare type)

// strict Equality check
// console.log(1 === "1"); // check for value  as well as data type

/* check the inequality  */

// console.log(1 != "1"); // false
// console.log(1 !== "1"); //check  value as well as type

/* comparative operators */

// console.log(3 > 4);
// console.log(3 >= 4);
// console.log(3 < 5 );
// console.log(3 <= 5 );

/* logical operators */
/* OR
t OR t  == > t 
t OR f == > t 
f OR t  == >t
f OR f  == > f    
*/

/* AND
    t & t == t 
    t & f ==f 
    f & f == f   
*/

/* XOR
    t ^ f ==  t
    f ^ t ==  t
    f ^ f ==  f
    t ^ t == t

*/
// /* and */
// console.log(3 < 4 && true);
// console.log(3 > 4 && true);
/* OR */
// console.log(3 < 4 || true);
// console.log(3 > 4 || true);
// console.log(3 > 4 || false);
// /* XOR */
// console.log(true ^ false);
// console.log(true ^ true);
// console.log(false ^ false);

/* bit wise operators */

console.log(10 & 6);

/* 
    10  1010 
     6  0110
    &   0010
    0010 ==> 2
    same logic use in and operator
*/
console.log(10|6);

/* 
    10  1010 
     6  0110
     |  1110
    1110 ==>8+4+2

*/