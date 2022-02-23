const express = require('express');
const app = express();
const path = require('path')
const port = process.env.PORT || 3000;

// using static file to serve the html file
const static_path = path.join(__dirname, '../public');
app.use(express.static(static_path));

// app.use('view engine', '');

// home page 
app.get("/", (req, res) => {
    res.render("index");
});

// about page 
app.get("/about", (req, res) => {
    res.render("about");
});

// weather page 
app.get("/weather", (req, res) => {
    res.send("welcome to wather page")
});

// page not found handler
app.get("*", (req, res) => {
    res.send("404 page not found");
});

// server running at 3000 port 
app.listen(port, (req, res) =>{
    console.log(`Server is running on port ${port}`);
})