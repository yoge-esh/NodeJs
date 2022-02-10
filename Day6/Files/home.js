const fs = require("fs");

function getToHome(req, res) {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("<h1>Welcome to Home Page</h1>");
}

function postHome(req, res) {
  fs.open("postData.txt", "w+", (err, fd) => {
    // fd => file discriptor
    if (err) {
      res.writeHead(500, { "content-type": "text/plain" });
      res.end("Error occure while opening file");
    }
    else {
      fs.writeFile('postData.txt', 'welcome to Node js', (err) => {
        if (err) {
          res.writeHead(500, { "content-type": "text/plain" });
          res.end("Error occure while writing file");
        }
        else {
          res.writeHead(200, { "content-type": "text/plain" });
          res.end("<h1>Welcome to Post Home Page</h1>");
        }
      }
      );
    }


      res.writeHead(200, { "content-type": "text/plain" });
      res.end("<h1>Welcome to Post Home Page</h1>");
  });
}
    exports = module.exports = { getToHome, postHome };