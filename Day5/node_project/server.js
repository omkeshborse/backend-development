const http = require("http");
/* building server  */
const server = http.createServer((req, res) => {
  if (req.url === "/hello") {
    res.end("Hello world!");
  } else {
    res.end("You are trying to hit a wrong URL");
  }
});
/* starting server */
server.listen(8000, () => {
  console.log("Server is started");
});
