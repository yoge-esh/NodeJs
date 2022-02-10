const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });

    if (req.method == 'GET')
    {
        switch (req.url) {
            case '/':
                res.end('you are at home page of assignment!');
                break;
            case '/assignment':
                res.end('you are at assignment page of assignment!');
                break;
            default:
                res.writeHead(404, "page not found ", { 'Content-Type': 'text/plain' });
                res.end('page not found!');
                break;
        }
    }
    else if (req.method == 'POST')
    {
        switch (req.url) {
            case '/':
                res.end('you are at home page of POST assignment!');
                break;
            case '/assignment':
                res.end('you are at assignment page of POST assignment!');
            default:
                res.writeHead(404, "page not found ", { 'Content-Type': 'text/plain' });    
                res.end('page not found!');
                break;
        }
    }
    else {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end(' server cant conect to this request');
    }
});

server.listen(3000, () => {
    console.log('server is running on port 3000');
});