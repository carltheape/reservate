// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Initializes the Express app
var app = express();

// Initializes the PORT, process.env.PORT for heroku deployment
var PORT = process.env.PORT || 3000;

// Middleware goes here...
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Routes
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

app.get('/reserve', function(req, res) {
    res.sendFile(path.join(_dirname, "/app/public/reserve.html"));
});

app.get('/table', function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/table.html"));
});

// Starts the server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});