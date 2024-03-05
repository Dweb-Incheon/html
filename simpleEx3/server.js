var http = require("http"); // Import Node.js core module
const fs = require("fs");

var server = http.createServer(function (req, res) {
  //create web server
  if (req.url == "/") {
    //check the URL of the current request
    fs.readFile("./starbuzz/index.html", (err, data) => {
      if (err) {
        throw err;
      }
      res.end(data);
    });
  } else if (req.url == "/mission.html") {
    fs.readFile("./starbuzz/mission.html", (err, data) => {
      if (err) {
        throw err;
      }
      res.end(data);
    });
  } else if (req.url == "/admin") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><p>This is admin Page.</p></body></html>");
    res.end();
  } else res.end("Invalid Request!");
});

server.listen(5000); //6 - listen for any incoming requests

console.log("Node.js web server at port 5000 is running..");
