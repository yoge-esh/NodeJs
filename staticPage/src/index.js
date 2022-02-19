const express = require('express');
const app = express();
const path = require('path');

const staticPath = path.join(__dirname, "../public");

// to set the view engine 
app.set("view engine", "hbs");

app.use(express.static(staticPath));

// template 
app.get("/", (req, res) =>{
    res.render("index", {
        user: "User",
    });
})

app.listen(3000, () =>{
    console.log('Listening to port 3000');
})