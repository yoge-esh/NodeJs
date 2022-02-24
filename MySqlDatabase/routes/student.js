// const express = require('express');
// const connection = require('../service/service');
// const router = express.Router();

// router.post('/', (req, res) => {
//     const fname = req.body.fname;
//     const lname = req.body.lname;
//     const address = req.body.address;

//     connection.query('insert into `students`.`details` (`fname`, `lname`, `address`) values (?, ?, ?)', [fname, lname, address], (err, result) => {
//         if (err) {
//             res.status(500).send(err);
//         }else{
//             res.status(200).send('Data inserted successfully');
//         }
//     });
// });
    
// module.exports = router;





import { Router } from 'express';
const router = Router();
import databaseService from '../service/databaseService.js';

router.post('/',(req,res)=>{
    const firstName = req.body.fname;
    const lastName = req.body.lname;
    const address = req.body.address;

    databaseService.query('insert into `student` (`fname`,`lame`,`address`) values (?,?,?);',
    [firstName,lastName,address],(err,results,fields)=>{
        if(err)
        {
            res.status(500).send(err);
        }
        else{
            res.status(200).send('Data inserted successfully');
        }
    });
});

export default router;