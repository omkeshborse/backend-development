const mongoose = require("mongoose");
const studentModel = require("./models/student.model1.js");

/* 
   Write code to connect with mongoDB
*/

mongoose.connect("mongodb://127.0.0.1:27017/be_demo_db");

/* 
    mongoose.connect("where connect / url / local machine string");
    machine name /ip of machine ==> localhost:27017 or 127.0.0.1:27017
    Name of Db ==>  be_demo_db
*/

/* 
    start connection with mongoDb 
*/

const db = mongoose.connection;
/* 
    connection --> success / fail 
*/

// to handle error
db.on("error", () => {
  console.log("Error while connecting database");
});
//  to handle success
// executes when connection is made with mongoDb
db.once("open", () => {
  console.log("Connected to mongDB");
  //   logic to insert data into Db
  //   init();
  // Running the queries on MongoDb
  dbQueries();
});

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

async function init() {
  // logic to insert data in Db

  const student = {
    name: "mary jean",
    age: 132,
    email: "mary@jean.com",
    subjects: ["physics", "math", "biology"],
  };
  const studentObj = await studentModel.create(student);
  console.log(studentObj);
}

async function dbQueries() {
  // Read the student data
  // read the student data based on id
  // id : 65d4b8ca0cbfd363e258ce24
  console.log("inside dbQueries");
  //   try {
  //     /*   reason: BSONError: input must be a 24 character hex string, 12 byte Uint8Array, or an integer */
  //     const student = await studentModel.findById("65d4b8ca0cbfd363e258ce25");
  //     console.log(student);
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   console.log("Queries to find by name");
  //search base on name
  /*   try {
    const studentData = await studentModel.find({ name: "mary jean" });
    console.log(studentData);
  } catch (error) {
    console.log(error);
  } */
  /* find one  */
  console.log("Find one");
  /* try {
    const studentData = await studentModel.findOne({ name: "mary jean" });
    console.log(studentData);
  } catch (error) {
    console.log(error);
  } */
  //Deal with multiple conditions
  /*  try {
   const result = await studentModel.where("age").gt("99").where("name").equals("mary jean").limit(2);
   console.log(result);
 } catch (error) {
   console.log(error);
 } */

  //  delete one document

  try {
    // need to pass object
    const studentDelete = await studentModel.deleteOne({
      name: "peter parker2",
    });
    console.log(studentDelete);
    if (studentDelete.acknowledged) {
      console.log("Deleted successfully");
    }
  } catch (error) {
    console.log(error);
  }

//   update document
  try {
    const updatedStudent = await studentModel.updateOne({name : "peter parker1"} , {name : "peter parker1-updated"}) ;
    console.log(updatedStudent);
  } catch (error) {
    console.log(error);
  }
}
