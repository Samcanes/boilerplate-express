var express = require('express');
const { setupBackgroundApp } = require('fcc-express-bground');
var app = express();

console.log("Hello World");

app.get("/", function(req, res) {
    res.send(__dirname + "/views/index.html");
});
































module.exports = app;