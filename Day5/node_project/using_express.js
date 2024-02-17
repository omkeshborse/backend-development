const express = require("express");

// console.log(typeof express);//function
/* initializing application */
const app = express();

/* starting an app  */
app.listen(6000, () => {
  console.log("server is running on port 6000");
});
