// require("dotenv").config;

const http = require("http");
const app = require("./src/app");

const server = http.createServer(app);

server.listen(8080, function () {
  console.log("HTTP server is running on port 8080");
});
