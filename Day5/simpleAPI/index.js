const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });

  console.log(req); // req is an object

  if (req.method == "GET") {
    switch (req.url) {
      case "/":
        res.end("you are at home page!");
        break;

      case "/about":
        res.end("you are at about page!");
        break;

      default:
        res.writeHead(404, "page not found -> this is status message", {
          "context-Type": "text/plane",
        });
        res.end("you are at 404 page!");
        break;
    }
  } else if (req.method == "POST") {
    switch (req.url) {
      case "/":
        res.end("you are at home page of POST request");
        break;

      case "/contact":
        res.end("you are at contact page of POST request");
        break;

      default:
        res.writeHead(404, "pages not Found", { "context-Type": "text/plane" });
        res.end('page not found!');
        break;
    }
  } 
  else {
    res.writeHead(400, { "Content-Type": "text/plain" });
    res.end("Bad Request");
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
