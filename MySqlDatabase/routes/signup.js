// import { Router } from 'express';
// import {hash as _hash } from 'bcrypt';

// const router = Router();
// import service from '../service/service';
// const saltRounds= 10;

// router.post('/', (req, res) => {
//     let username = req.body.txtUsername;
//     // let email = req.body.txtEmail;
//     let password = req.body.txtPassword;
//     _hash(password, saltRounds, function(err, hash) {
//         if(err){
//             res.status(500).send(err);
//             return;
//         }
//         service.query('insert into details (fname, passwrd) values (?, ?)', [username, hash], (err, result, fields) => {
//             if (err) {
//                 res.status(500).send(err);
//             } else {
//                 res.redirect('/index');
//             }
//         });
//     });
// });

// export default router;


import { Router } from 'express';
import { hash as _hash } from 'bcrypt';

const router = Router();
import databaseService from '../service/databaseService.js';
const saltRounds = 10;

router.post('/',(req,res)=>{
    let username = req.body.txtUsername;
    let password = req.body.txtPassword;
    _hash(password, saltRounds, function(err, hash) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        databaseService.query('insert into login (username,password) values (?,?)',
        [username,hash],(err,results,fields)=>{
            if(err)
            {
                res.status(500).send(err);
            }
            else{
               res.redirect('/index');
            }
        });
    });
});

export default router;