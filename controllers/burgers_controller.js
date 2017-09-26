// Dependent packages

var express = require('express');
var router = express.Router();
var burgers = require('../models/burger.js');

// Routes

// GET route for home page rendering index.handlebars

router.get('/', function(req, res){
	res.redirect('/burgers')
});

// GET route to /burgers
router.get('/burgers', function(req, res){
	burgers.all(function(data){
		var hbsObject = {burgers: data};

		console.log(hbsObject);

		res.render('index', hbsObject);
	});
});

// POST route to create new burger entry
router.post('/burgers/create', function(req, res){
	burgers.create(['burger_name'], [req.body.b_name], function(data){
		//redirect to /burgers upon completion
		res.redirect('/burgers')
	});
});

// PUT route to update burger data entry
router.put('/burgers/update/:id', function(req, res){
	var condition = 'id = ' + req.params.id;

	console.log('condition ', condition);

    //Redirect to /burgers upon completion
	burgers.update({'devoured': req.body.devoured}, condition, function(data){
		res.redirect('/burgers');
	});
});

// Export router
module.exports = router;