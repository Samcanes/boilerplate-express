var express = require('express');
const { setupBackgroundApp } = require('fcc-express-bground');
var app = express();

console.log("Hello World");
require('dotenv').config()



// 3
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

// 4

app.use('/public', express.static(__dirname + "/public"));

// 5

// app.get("/json", function(req, res) {
//     res.json( { "message": "Hello json" })
// });

//6

app.get("/json", function(req, res) {
    if (process.env.MESSAGE_STYLE === "uppercase") {
        console.log('1')
        console.log(process.env.MESSAGE_STYLE)
        res.json({ "message": "HELLO JSON" })
    } else {
        console.log("2")
        console.log(process.env.MESSAGE_STYLE)
        res.json({ "message": "Hello json" })
    }

});































module.exports = app;