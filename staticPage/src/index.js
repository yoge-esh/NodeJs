const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

const staticPath = path.join(__dirname, "../public");
const templateName = path.join(__dirname, "../templates/views"); // changing name from views to templates
const partialsPath = path.join(__dirname, "../templates/partials"); // changing name from views to templates

// to set the view engine 
app.set("view engine", "hbs");
app.set('views', templateName);
hbs.registerPartials(partialsPath);
app.use(express.static(staticPath));


// template 
// INDEX.HBS
app.get("/", (req, res) => {
    res.render("index", {
        user: "User",
    });
})

// ABOUT.HBS
app.get("/about", (req, res) => {
    res.render("about")
});

// random search from about us page 
app.get("/about/*", (req, res) => {
    res.render("404", {
        errorcoment: "Page not found after search from about page",
    });
});



// keep this at last for that after checking all rounte we can use this
app.get("*", (req, res) => {
    res.render("404", {
        errorcoment: "Page not found",
    });
});

app.listen(3000, () => {
    console.log('Listening to port 3000');
})