// Import ORM for functions that interact with DB
var orm = require('../config/orm.js');

//Create the burgers object
var burgers = {
	//Select all burgers table entries
	selectAll: function(cb){
		orm.selectAll('burgers', function(res){
			cb(res);
		});
	},
	//Insert a new entry in burgers table
	insertOne: function(col, vals, cb){
		orm.insertOne('burgers', col, vals, function(res){
			cb(res);
		});
	},
	//Update an entry in burgers table
	//objColVals is an object specifying columns as object keys with associated values
	updateOne: function(objColVals, condition, cb){
		orm.updateOne('burgers', objColVals, condition, function(res){
			cb(res);
		});
	}
};
// Export the database functions for the controller (burgers-controller.js)
module.exports = burgers;