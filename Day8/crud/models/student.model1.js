/* model with validation */
const mongoose = require("mongoose");
/* 
to create schema 
*/
const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
      minLength: 3,
    },
    age: {
      type: Number,
      min: 19,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      minLength: 5,
    },
    subjects: [String],
    createdAt: {
      type: Date,
      immutable: true,
      default: () => {
        return Date.now();
      },
    },
  },
  { versionKey: false, timestamps: true , timeseries : true }
);
/* 
  to disable version key in database __v = 0 
  and timestamp  
  {
    createdAt : 2024-02-20T14:14:42.833+00:00
    updatedAt : 2024-02-20T14:14:42.833+00:00
  }

*/

//Go ahead and create corresponding collection in DB
module.exports = mongoose.model("Student", studentSchema);
