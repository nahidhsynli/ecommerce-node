const express = require("express");
require("./database/index");
const app = express();

app.use(express.urlencoded({ extended: "true" }));

app.get("/", function (req, res) {
  res.send("OK!");
});

module.exports = app;
