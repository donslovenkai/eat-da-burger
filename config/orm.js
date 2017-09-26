// Import mysql connection object
var connection = require('../config/connection.js');

// Functions to generate SQL syntax
function printQuestionMarks(num){
  var arr = [];
  for (var i=0; i<num; i++){
    arr.push('?')
  };
  return arr.toString();
};

function objToSql(ob){
  //column1=value, column2=value2, etc.
  var arr = [];
  for (var key in ob) {
    arr.push(key + '=' + ob[key]);
  };

// Create ORM object to perform SQL database queries
  var orm = {
  // Function to return all table entries
  all: function(tableInput, cb){
    var queryString = 'SELECT * FROM ' + tableInput;

    connection.query(queryString, function(err, result){
      if(err) throw err;
      cb(result);
    });
  },
  // Function to create a table entry
  create: function(table, col, vals, cb){
    var queryString = 'INSERT INTO ' + table;
    queryString = queryString + ' (';
    queryString = queryString + col.toString(); 
    queryString = queryString + ') ';
    queryString = queryString + 'VALUES (';
    queryString = queryString + printQuestionMarks(vals.length);
    queryString = queryString + ') ';

    connection.query(queryString, vals, function(err, result){
      if(err) throw err;
      cb(result);
    });
  },

  //Function to update a table entry
  update: function(table, objColVals, condition, cb){
    var queryString = 'UPDATE ' + table;
      queryString = queryString + ' SET ';
      queryString = queryString + objToSql(objColVals);
      queryString = queryString + ' WHERE ';
      queryString = queryString + condition;

    console.log(queryString);

    // Perform the database query
    connection.query(queryString, function(err, result){
      if(err) throw err;
      cb(result);
    });
  }
};
