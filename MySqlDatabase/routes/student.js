const express = require('express');
const connection = require('../service/service');
const router = express.Router();

router.post('/', (req, res) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const address = req.body.address;

    connection.query('insert into `students`.`details` (`fname`, `lname`, `address`) values (?, ?, ?)', [fname, lname, address], (err, result) => {
        if (err) {
            res.status(500).send(err);
        }else{
            res.status(200).send('Data inserted successfully');
        }
    });
});
    
exports.default = router;


