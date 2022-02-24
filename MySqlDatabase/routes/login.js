// import { Router } from 'express';
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import 'dotenv/config';
// const connection = require('../service/service');

// const router = express.Router();

// router.post('/', (req, res) => {
//     let username = req.body.txtUsername;
//     let email = req.body.txtEmail;

//     connection.query('select * from details where fname=? and lname=?', [username, email], (err, userData, fields) => {
//         if (err) {
//             res.status(500).send(err);
//         } else {
//             if(result.length>0){
//                 let hasedPassword = userData[0].passwrd;
//                 // load hash from your password DB
//                 bcrypt.compare(passwrod, hasedPassword, function (err, hashStatus) {
//                     if(err)
//                     {
//                         res.send('<h1>Incorrect Username or password</h1>')
//                         return;
//                     }
//                     if(hashStatus){
//                         const token = jwt.sign({
//                             id:userData[0].id,
//                             username: userData[0].fname,
//                         }, process.env.JWT_KEY, {
//                             // cokkies will expire in 1 hour
//                             expiresIn: '1h'
//                         });
//                         res.cookie('token', token);
//                         res.redirect('/');
//                     }else{
//                         res.send('<h1>Incorrect Username or password</h1>')
//                     }
//                 });
//             }else{
//                 res.send('<h1>Incorrect Username or password</h1>')
//             }
//         }
//     });
// });

// module.exports = router;


import { Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import databaseService from '../service/databaseService.js';

const router = Router();

router.post('/',(req,res)=>{
    let username = req.body.txtUsername;
    let password = req.body.txtPassword;

    databaseService.query('select * from login where username=?',
    [username],(err,userData,fields)=>{
        if(err)
        {
            res.status(500).send(err);
        }
        else{
            if(userData.length>0)
            {
                let hashedPassword = userData[0].password;
                // Load hash from your password DB.
                bcrypt.compare(password, hashedPassword, function(err, hashStatus) {
                    if(err)
                    {
                        res.send('<h1>Incorrect Username or Password</h1>')
                        return;
                    }
                    if (hashStatus) {
                        const token = jwt.sign({
                            id:userData[0].id,
                            username:userData[0].username
                        },process.env.JWT_KEY,{
                            expiresIn:'1h'
                        });
                        res.cookie('token',token);
                        res.redirect('/index');
                    }
                    else{
                        res.send('<h1>Incorrect Username or Password</h1>')
                    }
                });
            }
            else{
                res.send('<h1>Incorrect Username or Password</h1>')
            }
        }
    });
});

export default router;