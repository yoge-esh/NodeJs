const express = require('express');
const fs = require('fs');

const routes = express.Router();

routes.get('/', (req, res) => {
    const newUser = req.query.username;

    fs.readFile("users.json", (err, fileData) => {
        if(err){
            res.writeHead(500, { "content-type": "text/plain" });
            res.end("Error occure while reading file");
        }
        else{
            const users = JSON.parse(fileData);
            console.log(users);
            const user = users.find(user => user.username === newUser);
            if(user){
                res.writeHead(200, { "content-type": "text/plain" });
                res.end(JSON.stringify(user));
            }
            else{
                res.writeHead(404, { "content-type": "text/plain" });
                res.end("User not found");
            }
        }
    });
});


module.exports = routes;