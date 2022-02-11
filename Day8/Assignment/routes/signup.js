const { Router } = require('express');
const express = require('express');
const fs = require('fs');

const routes = express.Router();

routes.post('/', (req, res) => {
    const newUser = req.body;

    fs.readFile("users.json", (err, fileData) => {
        if(err){
            fileData = [];
        }
        writeFile(fileData, newUser, res)
    });
});


function writeFile(fileData, body, res) {
    let newJSONArray = [];
    if (fileData.length > 0) {
        newJSONArray = JSON.parse(fileData);
    }
    newJSONArray.push((body));
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
module.exports = routes;