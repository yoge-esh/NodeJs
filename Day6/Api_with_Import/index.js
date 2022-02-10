const http = require("http");

// importing module from another file
const { getToHome, postHome } = require("./Home");

const { getToContact, postContact } = require("./Contact");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });

  if (req.method == "GET") {
    switch (req.utl) {
      case "/":
        getToHome(req, res);
        break;
      case "/api/contact":
        getToContact(req, res);
        break;

      default:
        break;
    }
  } else if (req.method == "POST") {
    switch (req.utl) {
      case "/":
        postHome(req, res);
        break;
      case "/api/contact":
        postContact(req, res);
        break;

      default:
        break;
    }
  } else {
    res.writeHead(404, "page not Found", { "Content-Type": "text/plain" });
    res.end("<h1>page not found!</h1>");
  }
});


server.listen(3000, () => {
    console.log('server started at 3000 port');
});