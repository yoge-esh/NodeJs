const express = require('express');
// const app = express();
const fs = require('fs');

const router = express.Router();

router.get('/', (req, res) => {
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
});


router.post('/', (req, res) => {
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
});


router.put('/', (req, res) => {
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
});


module.exports = router;