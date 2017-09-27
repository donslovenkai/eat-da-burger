// Dependent packages
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')

var app = express();

// Serve static content for the app from the "public" folder
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}))
// Use method-override package to override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
// Set Handlebars as view engine
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');

// Import routes and give the server access to routes
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);
// Start the server to begin listening
var port = process.env.PORT || 3306;
app.listen(port);