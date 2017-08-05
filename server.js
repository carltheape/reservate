// Node Package Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Local Dependencies
var tableData = require('./app/data/tableData.js');
var waitingListData = require('./app/data/waitingListData.js');

// Initializes the Express app
var app = express();

// Initializes the PORT, process.env.PORT for heroku deployment
var PORT = process.env.PORT || 3000;

// Middleware goes here...
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// HTML ROUTES
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

app.get('/reserve', function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/reserve.html"));
});

app.get('/tables', function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/tables.html"));
});

// API ROUTES
app.get('api/tables', function(req, res) {
    res.json(tableData);
});

app.get('api/waiting', function(req, res) {
    res.json(waitingListData);
})


// Starts the server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});