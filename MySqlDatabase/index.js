// // create exprtess server 
// import express from 'express';
// const app = express();
// import bodyParser from 'body-parser';
// import cookiParser from 'cookie-parser';
// import path from 'path';



// import jwtverifiy from './middleware/jwtVerification';
// import login from './routes/login';
// import signup from './routes/signup';
// import student from './routes/student';


// import 'dotenv/config';

// // middlewares to connect to the database
// app.use(bodyParser.json());
// app.use(cookiParser());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.set('view engine', 'ejs');

// // api routes 
// app.use('/student', jwtverifiy, student);
// app.use('/login', login);
// app.use('/signup', signup);

// // app.use('/students', require('./routes/student'));
// // app.use('/login', require('./routes/login'));


// // UI routes
// app.get('/', (req, res) => {
//     res.render('login.js');
// });

// // signup
// app.get("/signup", (req, res) => {
//     res.render('signup.ejs');
// });

// app.get('/index', jwtverifiy, (req, res) => {
//     res.render('index.ejs');
// });

// // server listening
// app.listen(process.env.SERVER_PORT, () => {
//     console.log(`server started at port ${process.env.SERVER_PORT}`);
// });



//create express server
import express from 'express';
const app = express();
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';


import jwtVerify from './middlewares/jwtVerification.js';
import student from './routes/student.js'
import login from './routes/login.js'
import signup from './routes/signup.js'


import 'dotenv/config';

// middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');

// api routes
app.use('/student',jwtVerify, student);
app.use('/api/login', login);
app.use('/api/signup', signup);

// UI routes
app.get('/',(req,res)=>{
    res.render('login.ejs')
});
app.get('/signup',(req,res)=>{
    res.render('signup.ejs')
});
app.get('/index',jwtVerify,(req,res)=>{
    res.render('index.ejs')
});

// initialize server
app.listen(process.env.SERVER_PORT,()=>{
    console.log(`Server started at port ${process.env.SERVER_PORT}`);
});