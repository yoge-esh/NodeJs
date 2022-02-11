const fs = require('fs');

function getUser(req, res) {
    fs.readFile("users.json", (err, data) => {
        if (err) {
            res.writeHead(500, { "content-type": "text/plain" });
            res.end("Error occure while opening file");
        }
        else {
            res.writeHead(200, { "content-type": "text/plain" });
            res.end(data);
        }
    });
}


function postUser(req, res) {
    var newJSONArray = [];
    req.on('data', (data) => {
        fs.open("users.json", 'w+', (err, fd) => {
            if (err) {
                res.writeHead(500, { "content-type": "text/plain" });
                res.end("Error occure while opening file");
            }
            else {
                newJSONArray.push(JSON.parse(data));
                fs.writeFile('users.json', JSON.stringify(newJSONArray), (err) => {
                    if (err) {
                        res.writeHead(500, { "content-type": "text/plain" });
                        res.end("Error occure while writing file");
                    }
                    else {
                        res.writeHead(200, { "content-type": "text/plain" });
                        res.end("<h1>Welcome to Post Home Page</h1>");
                    }
                });
            }
        });
    });
}



function putUser(req, res) {
    var newJSONArray = [];
    req.on('data', (data) => {
        fs.readFile("users.json", (err, fileData) => {
            if (err) {
                res.writeHead(500, { "content-type": "text/plain" });
                res.end("Error occure while opening file");
            }
            else {
                if (data.length > 0) {
                    newJSONArray = JSON.parse(fileData);
                }
                newJSONArray.push(JSON.parse(data));
                fs.writeFile('users.json', JSON.stringify(newJSONArray), { flag: 'w+' }, (err) => {
                    if (err) {
                        res.writeHead(500, { "content-type": "text/plain" });
                        res.end("Error occure while writing file");
                    }
                    else {
                        res.writeHead(200, { "content-type": "text/plain" });
                        res.end("<h1>Welcome to Post Home Page</h1>");
                    }
                });
            }
        });
    });
}



exports.getUser = getUser;
exports.postUser = postUser;
exports.putUser = putUser;