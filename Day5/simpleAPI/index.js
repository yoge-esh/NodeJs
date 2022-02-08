const http = require('http');

const server = http.createServer((req, res) => {
    // && req.url === '/'
    if(res.method == 'GET'){
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World');
    }
    else if (res.method == 'POST'){
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World, this is a POST request');
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
})

server.listen(3000, () => {
    console.log('server is running at port 3000');
});


// fix port number for some browsers
// mysql = 3306
// mongodb = 27017
// mssql = 1433
// postgresql = 5432
// redis = 6379
// elasticsearch = 9200
// rabbitmq = 5672
// rabbitmq = 15672
// rabbitmq = 15672
// sql = 3306
// apache = 80
// engine = 80
// ssh = 22 

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
