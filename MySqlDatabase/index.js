const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();

// middlewares to connect to the database
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// api routes 
app.use('/students', require('./routes/student'));
app.use('/login', require('./routes/login'));


// signup
app.get("/signup", (req, res) =>{
    res.render('signup');
});

// login route
app.get("/", (req, res) =>{
    res.render('login');
});



// server listening
app.listen(process.env.SERVER_PORT, () => {
    console.log(`server started at port ${process.env.SERVER_PORT}`);
});