const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();

app.use(bodyParser.json());

app.use('/students', require('./routes/student'));

app.listen(process.env.SERVER_PORT, () => {
    console.log(`server started at port ${process.env.SERVER_PORT}`);
});