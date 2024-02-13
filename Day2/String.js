/* 
String  : In programming, a string is a data type that represents 
a sequence of characters. These characters can be letters, 
numbers, symbols, or even whitespace
*/
let name = "peter";
let city = "Mumbai";

// console.log(name, city);
// console.log(typeof name, typeof city);

// string has zero base indexing

/* 
accessing characters base on index

*/

// console.log(name[0]);
// console.log(name[3]);
// console.log(name[31]);

// string is immutable
name[2] = "o";
// console.log(name);
// why string is immutable

/* 
1.  string can be use to store sensitive information(User name,
    password),  if mutable then accidentally it may change ,
    so string is mutable then ensures than sensitive information 
    not changes it give protection to sensitive info    
2. In a highly concurrent application where multiple threads 
might be accessing and modifying strings simultaneously, making
strings immutable provides protection against potential issues 
like race conditions, data corruption, and unintended 
modifications.

If strings were mutable, one thread could modify a string while 
another thread is reading or using it, leading to unexpected 
behavior or bugs. By making strings immutable, each thread can 
work with its own copy of the string without worrying about 
interference from other threads.

Immutable strings promote a safer and more predictable 
programming environment, especially in scenarios where multiple
 threads are involved, such as in concurrent servers, 
multi-threaded applications, or distributed systems. They help 
reduce the complexity of handling concurrent access and updates 
to shared data structures, contributing to the overall robustness 
and stability of the application

3
Immutable strings save memory by sharing one object for multiple references, rather than creating separate copies for each reference. 

By sharing immutable string objects and reusing them when 
possible, memory usage can be reduced because each unique string 
only needs to be stored once in memory. This optimization is 
particularly effective in scenarios where the same strings are 
used frequently throughout the program. Instead of creating 
multiple copies of the same string, the program can refer to a 
single shared instance, saving memory by avoiding unnecessary 
duplication. This efficiency gain is a key advantage of using 
immutable strings in memory-constrained environments or 
applications where memory optimization is critical.

*/

/* method of string */

// length of string

// console.log(name.length);
//  join two string
let first_name = "peter";
let last_name = " parker";

let full_name = first_name.concat(last_name);
// console.log(full_name);
// console.log(first_name + last_name);

/* 
    convert that in uppercase
*/
// console.log(first_name.toUpperCase());

/* 
character at  any index str[i]
*/
// console.log(name.charAt(3));

/* 
slicing 
*/
/* str.slice(i , j)  i and j index
    str.slice(i , j) start slicing form  i to j-1 
*/
console.log(full_name);
console.log(full_name.slice(2)); //start print from i to length -1
console.log(full_name.slice(2, 5)); // start form 2 print upto 5
/* string also support negative indexing -1 ,-2 ....etc */
/* 
    p   e   t  e  r  ""  p  a  r  k  e  r
    0   1   2  3  4  5   6  7  8  9  10 11
  -12 -11 -10 -9 -8 -7  -6 -5 -4 -3  -2  -1 negative indexing

*/
console.log(full_name.slice(-5));
console.log(full_name.slice(-5, -1));

/* 
    indexOf method index of character present inside the string 
    if character is not preset inside string then it return -1
*/
console.log(full_name.indexOf("k"));

console.log(full_name.indexOf("o"));

/* trim   */
let word = " peter ";
console.log("print with spaces in the word", word);
console.log("remove spaces", word.trim());

/* split : use to break into character of array */

name = "john deo";
console.log(name.split(" "));

console.log(name.split("")); // split into array of characters

/* reversing string */
name = "peter parker";
let reversedName = name.split("").reverse().join("");
console.log(reversedName);
