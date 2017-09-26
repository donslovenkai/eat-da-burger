// Import ORM for functions that interact with DB
var orm = require('../config/orm.js');

//Create the burgers object
var burgers = {
	//Select all burgers table entries
	all: function(cb){
		orm.all('burgers', function(res){
			cb(res);
		});
	},
	//Create new entry in burgers table
	create: function(col, vals, cb){
		orm.create('burgers', col, vals, function(res){
			cb(res);
		});
	},
	//Update entry in burgers table
	//objColVals is an object specifying columns as object keys with associated values
	update: function(objColVals, condition, cb){
		orm.update('burgers', objColVals, condition, function(res){
			cb(res);
		});
	}
};
// Export the database functions for the controller (burgers-controller.js)
module.exports = burgers;