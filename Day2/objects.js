/* 
objects : 

In JavaScript, objects are collections of key-value pairs where 
the keys are strings (or Symbols) and the values can be of any 
data type, including other objects or functions.

*/

const user = {
  name: "peter",
  age: 32,
  city: "mumbai",
};

/* 
define of objects 
const objectsName = {
    key(string/Symbol) : value(any data type),
    key : value,
    key : value,
}

*/

/* seconde way to create object using function constructor */
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// const person = new Person("John", 30);

// console.log(person);
/* accessing then data */

// using . notation
console.log(user.name);
// using [] notation
console.log(user["name"]);

/* 
    in . notation  need to chain key  with object name like user.name
    in [] notation need to pass key value in [] with "" , '' ; 
*/

/* 
    adding data to the object
*/
user.country = "India";
user["continent"] = "Asia";
// console.log(user);

/* 
    deleting object keys and object itself
*/
delete user.country;
delete user["continent"];
// console.log(user);

let person = {
  name: "peter",
  age: 99,
  address: {
    city: "mumbai",
    state: "Maharashtra",
    country: "india",
  },
};

for (let key in person) {
  //   console.log(key, "=>", person[key]);
}

/* to get array of keys */
// console.log(Object.keys(person));

/* to array of values */
// console.log(Object.values(person));

/* Get both keys and values  */
// console.log(Object.entries(person));

/* 
Cloning an object using assign 

*/
const new_person = Object.assign({}, person);

console.log(new_person);

/* 
To add extra property in object while Cloning 
*/
const new_person_1 = Object.assign({}, person, { role: "Developer" });
console.log(new_person_1);