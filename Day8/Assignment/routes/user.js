const express = require('express');
const fs = require('fs');

const routes = express.Router();

routes.put('/', (req, res) => {
    const username = req.query.username;
    const modifiedUser = req.body;

    fs.readFile("users.json", (err, fileData) => {
        if (err) {
            res.writeHead(500, { "content-type": "text/plain" });
            res.end("Error occure while reading file");
        }
        else {
            let users = JSON.parse(fileData);
            users = users.map(user => {

                if (user.username === username) {
                    user = modifiedUser;
                }
                return user;
            });
            fs.writeFile("users.json", JSON.stringify(users), {flag:'w+'}, (err) => {
                if (err) {
                    res.writeHead(500, { "content-type": "text/plain" });
                    res.end("Error occure while writing file");
                }
                else {
                    res.writeHead(200, { "content-type": "text/plain" });
                    res.end("User updated");
                }
            });
        }

    });
});

module.exports = routes;