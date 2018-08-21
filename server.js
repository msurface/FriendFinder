// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


// setting up express

// telling node we are creating an express server
var app = express();

// Sets up the initial port. Used in listener later.
var PORT = process.env.PORT || 8000;

//Setting up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Routes
var htmlRoutes = require('./app/routing/htmlRoutes.js');
var apiRoutes = require('./app/routing/apiRoutes.js')


// Displaying which PORT the server is listening on
app.listen(PORT, function() {
    console.log("Listening on PORT " + PORT);
});

