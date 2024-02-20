// collection using model
// collection name student
/* 
    document
    {
        name : "Peter" ,    
        age : 99  

    }
    this document insert in database collection 

*/

/* 
    Define the Schema of students collection
    stored in database 

*/

const mongoose = require("mongoose");
/* 
to create schema 
*/
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

//Go ahead and create corresponding collection in DB
module.exports = mongoose.model("Student", studentSchema);
