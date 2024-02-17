/*
 *  Read from an external file
 */
const { error } = require("console");
const fs = require("fs");
// console.log(typeof fs); //object

/* 
Read in the sync way 
*/
// console.log("Before starting to read");

/* 
// reading in  sync way 
const content = fs.readFileSync("input.txt");
console.log(content); // Buffer
console.log("content of file is: " + content); */
// this concatenation internally convert buffer info to string

/* reading in async way  */

/* note  give file name not a relative path  
  ✔ "index.txt"   ✘ "./index.txt"
*/

// fs.readFile("input.txt", (err, content) => {
//   if (err) {
//     return console.log(err);
//   }
//   console.log("Content of file is:", content.toString());
// });
// console.log("last line");

/* 
  Do to async way of reading output order is different.
  output: 
  Before starting to read
  last line
  Content of file is:+ content 
*/

/* 
  Write the code to write to an external file
*/
/* 
  sync way of writing file 
fs.writeFileSync("file_name", "content to write in file");
*/
// console.log("Before writing sync");

// fs.writeFileSync("output1.txt", "Hello Peter");

// console.log("After writing sync");

/* 
 async way of writing file
  
*/
console.log("Before async");
fs.writeFile("output2.txt", "Hello peter with async", (error) => {
  if (error) {
    return console.log(error);
  }
  console.log("Written successfully");
});
console.log("After async");

/* 
  terminal output : 
  Before async
  After async
  Written successfully

*/