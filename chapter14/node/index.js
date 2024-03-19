const express = require("express");
var path = require("path");
const app = express();
const serveStatic = require("serve-static");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

const port = 3000;

app.use(serveStatic(__dirname));

app.get("/get_form", function (req, res) {
  console.log(req.query.firstname, req.query.lastname);
});

app.post("/post_form", function (req, res) {
  //console.log(req.headers)
  console.log(req.body.firstname, req.body.lastname);
});

app.listen(port, function () {
  console.log("Server is running...");
});
