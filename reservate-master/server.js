// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
// var path = require('path');  do we need this?

// Initializes the Express app
var app = express();

// Initializes the PORT, process.env.PORT for heroku deployment
var PORT = process.env.PORT || 3000;

// Middleware goes here...


// Routes go here....


// Starts the server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});