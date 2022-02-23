const e = require ('express');
var express = require('express');
var router = express.Router();


const credential = {
    email: "admin@gmail.com", 
    password: "admin"
}
// login user 
router.post('/login', (req, res)=> {
    if (req.body.email === credential.email && req.body.password === credential.password) { 
        res.session.user = req.body.email;
        res.end('wellcome');
    } else {
        res.end('login failed');
    }
});

module.exports = router