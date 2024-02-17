exports.add = (a, b) => {
  return a + b;
};
exports.product = (a, b) => {
  return a * b;
};
// module.exports = { add: add, product: product };

/* 
module.exports make simple function as module . 
default  exports : 
  module.exports = add;
name exports : exporting  individual modules lead's to overriding previous method ,
so export into multiple method using module.export  simply by wrapping it inside 
object then exports .
If you have only one main function to export, using the default export is simple and 
convenient.
If you have multiple functions and want to provide flexibility for importing only 
specific ones, exporting them as an object is recommended.
  module.exports = {add , product};
*/

/* 2nd way of exporting */
/* 
exports.add = (a, b) => { return a + b; };
This line exports a function named add.
The function takes two parameters a and b.
It returns the sum of a and b.

Exporting the product function:

exports.product = (a, b) => { return a * b; };
This line exports a function named product.
Similar to the add function, it takes two parameters a and b.
It returns the product of a and b.

*/

