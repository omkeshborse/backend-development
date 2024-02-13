/* 
array in js
array stored ordered collection of data  
store based on index

js give flexibility to store different datatype
but in other language array is homogenous 
*/
// let arr = [1, 2, 3];

// console.log(typeof arr);

/* array is type of object 
    array are mutable 
*/

// let arr1 = new Array();
// console.log(typeof arr1);
// console.log(arr1);

/* declaration of array 
1. let arrayName = [] ;
2. let arr1 = new Array(); 
*/

/* accessing element of array using index */
// arr3 = [1, 2, 3, 4, 9, 8, 7, 19, 21, 29, 20];

// console.log(arr3[0]);
// console.log(arr3[6]);
// console.log(arr3[7]);
// console.log(arr3[434]); //undefined

// console.log(arr3[-1]); //undefined

/* note valid index is from  0 to length -1  
    no negative indexing in array like String
*/

/* array are mutable .we can modify arrays */

// arr3[1] = 200;
// console.log(arr3);

/* 
    insert items in the array
*/
// arr4 = [5, 7, 1, 9, 8, 16];
// console.log(arr4);
/* push method insert element at last of array  */
// arr4.push(11);
// console.log(arr4);

/* to add multiple element in array at end  */
// arr4.push(99, 101, 100);
// console.log(arr4);
/* push allows to add multiple element at end of array  */

/* adding element at start using unshift */
// arr4.unshift(999);
// console.log(arr4);

/* to add multiple element at start of element   */
// arr4.unshift(9, 99);
// console.log(arr4);

/* removing element in fom array  */
// pop method : remove last element of array
// arr5 = [5, 7, 1, 9, 8, 16];
// console.log(arr5);
// console.log(arr5.pop()); // method returns last  element
// console.log(arr5);

/* remove first element of array  */
// shift method
// console.log(arr5);
// console.log(arr5.shift()); // method returns first element
// console.log(arr5);

/*( push  ,unshift)(add element ) ,( pop , shift)(remove element )  --> mutate array */

/* to combine two array   */
// concat method
// let a1 = [1, 3, 4];
// let a2 = [5, 6, 7];
// let r = a1.concat(a2);
// console.log(a1, a2);
// console.log(r);

/* size of array  */
// console.log(a1.length); // length  is property of array

/*Convert  array to string  */
char_arr = ["p", "e", "t", "e", "r", " ", "p", "a", "r", "k", "e", "r"];

// join method use to join all element of array to form string
/* need to pass separator in join method  , default separator is comma(,) */
// console.log(char_arr.join());
// console.log(char_arr.join(""));
// console.log(char_arr.join("^"));
/* 
p,e,t,e,r, ,p,a,r,k,e,r
peter parker 
*/

// console.log(char_arr.toString());
// console.log(typeof char_arr.toString());
/* o/p --> p,e,t,e,r, ,p,a,r,k,e,r */

/* 
    Slicing of array 
*/
// let num = [3, 4, 5, 5, 6, 7, 9, 11, 13, 12, 10];
/* 
          [3, 4, 5, 5, 6, 7, 9, 11, 13, 12, 10]
index      0  1  2  3  4  5  6  7   8   9   10
-ve-index-11 -10 -9 -8 -7 -6 -5 -4 -3  -2  -1
*/

/* num.slice(i )   i.e slice from i to end of i.e array length -1   */
// console.log(num.slice(2)); // [ 5,  5,  6,  7, 9,11, 13, 12, 10]
/* num.slice(i , j ) slice  form i to  j-1  */
// console.log(num.slice(2, 7)); // [5, 5, 6, 7, 9];
/* below method slice from 5 to  last index because -1 is last index value */
// console.log(num.slice(5, -1)); //[ 7, 9, 11, 13, 12 ]

/* -9  to -1 element is print i.e print element -9 to -1( index -1).i.e upto 12  */
// console.log(num.slice(-9, -1)); //[5, 5, 6, 7, 9, 11, 13,12]
/* slice element  from -9 to -2 number index-1 */
// console.log(num.slice(-9, -2)); //[5, 5, 6, 7, 9, 11, 13]

// console.log(num.slice(2 - 1)); //[ 4,  5,  5,  6,  7,  9, 11, 13, 12, 10]

/* slicing does not change original existing array */
// console.log(num);

/* 
    splicing  , which modifies the given array 
*/
let number = [1, 2, 3, 4, 5];
let number1 = [1, 2, 3, 4, 5];

let removed = number.splice(2, 3);
let removed1 = number1.splice(2, 5);

// console.log(removed);
// console.log(removed1);
// console.log(number);

/* 
    array.splice(index to start position , number of element to be remove)
*/

let number2 = [1, 2, 3, 4, 5];
let removed2 = number2.splice(2, 2, 11, 12, 13);
// console.log(number2);
// console.log(removed2);

/* 
array.splice(i ,num , element to add , element to add ,element to add)
*/

/* 
    reverse a given array
*/

// let num = [4, 1, 5, 7, 19, 2];
// num.reverse();
// console.log(num);

// let num1 = [4, 1, 5, 7, 19, 2];
// console.log(num1.indexOf(19)); // return 4
// console.log(num1.indexOf(427)); // return  -1

let my_arr = [5, 4, 1, 3, 2];
my_arr.sort();
// console.log(my_arr);

let my_arr1 = [15, 40, 1, 13, 2];
my_arr1.sort((a, b) => a - b); // need to pass sorting logic
/* 
    a>b  a-b =+ve 
    a<b  a-b =-ve 
    a=b a-b =0
    for comparison in above need to pass logic 
*/
console.log(my_arr1);

/* to print reverse using sorting then need to pass logic b-a */

let my_arr2 = [15, 40, 1, 13, 2];
my_arr2.sort((a, b) => b - a);
console.log(my_arr2);