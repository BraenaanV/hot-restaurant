// Dependencies
var express = require("express");
var path = require("path");

//express setup

var app = express();
var PORT = process.env.PORT || 3000;

//Express data handle parsing

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//list arrays

var tables = [];
var waitList = [];

//Start server & listen

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });