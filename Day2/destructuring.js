/* 
data is mainly available in the form of arrays /objects

data form array need to be take out assign to variable 

conventional method to extract data from array/object is 
1. iterate over it 
2. assign to variable 

this method is time consuming  .

to make this easy  js gives feature call as Destructuring .
Destructuring  : fetch values out of array and object assign to variable 
*/

/* 
Destructuring in array 
*/

// const num = [1, 2, 4];
// const [a, b, c] = [1, 2, 4];
// console.log(a, b, c);

// const [x, y] = [1, 2, 4];
// console.log(x);
// console.log(y);
// // console.log(z); // ReferenceError: z is not defined
// const [p, q, r, s] = [1, 2, 4];
// console.log(p);
// console.log(q);
// console.log(r);
// console.log(s); // undefined

// const [aa, bb, cc] = [1, 2, [4, 5, 7]];

// console.log(aa);

// console.log(bb);
// console.log(cc); //[4, 5, 7]

/*
  Destructuring in an Object
 */

const per = {
  age: 999,
  name: "peter",
  city: "mumbai",
  address: { city: "mumbai", state: "maharashtra" },
};

const {
  name,
  age,
  hobby,
  address: { city, state },
} = per;

console.log(name);
console.log(age);
console.log(hobby); // undefined
// console.log(address); // ReferenceError: address is not defined
console.log(city); // //nested  var
console.log(state); //nested  var
/* while Destructuring in object need to same value of variable as value of key  
    
In JavaScript, when using destructuring assignment with objects, you can indeed assign
variables with the same name as the object's keys. 
*/
