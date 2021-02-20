var express = require('express');
const { setupBackgroundApp } = require('fcc-express-bground');
var app = express();

console.log("Hello World");

app.get("/", function(req, res) {
    res.send("Hello Express");
});
































module.exports = app;