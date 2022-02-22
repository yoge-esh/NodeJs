const express = require('express');
const connection = require('../service/service');
const router = express.Router();

router.post('/', (req, res) => {
    let username = req.body.txtUsername;
    let email = req.body.txtEmail;

    connection.query('select * from details where fname=? and lname=?', [username, email], (err, result, field) => {
        if (err) {
            res.status(500).send(err);
        } else {
            if(result.length>0){
                res.redirect('/index');
            }
            else{
                res.status(404).send('Data not found');
            }
        }
    });
});


module.exports = router;