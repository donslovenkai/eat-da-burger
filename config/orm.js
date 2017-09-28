// Import mysql connection object
var connection = require('./connection.js');

// Functions to generate SQL syntax
function printQuestionMarks(num){
  var arr = [];
  for (var i=0; i<num; i++){
    arr.push('?')
  };
  return arr.toString();
};

function objToSql(ob){
  var arr = [];
  for (var key in ob) {
    arr.push(key + '=' + ob[key]);
  };

  return arr.toString();
};


// Create ORM object to perform SQL database queries
  var orm = {
  // Function to return all table entries
selectAll: function(tableInput, cb) {
    // Construct the query string that returns all rows from the target table
    var queryString = "SELECT * FROM " + tableInput + ";";
    // Perform the database query
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      // Return results in callback
      cb(result);
    });
  },

 // selectAll: function(tableInput, cb){
//    var queryString = 'SELECT * FROM ' + tableInput;
//
//    connection.query(queryString, function(err, result){
//      if(err) throw err;
//      cb(result);
//    });
//  },

  // Function to create a table entry
  insertOne: function(table, col, vals, cb){
    var queryString = 'INSERT INTO ' + table;
    queryString = queryString + ' (';
    queryString = queryString + col.toString(); 
    queryString = queryString + ') ';
    queryString = queryString + 'VALUES (';
    queryString = queryString + printQuestionMarks(vals.length);
    queryString = queryString + ') ';
    //Perform database query
    connection.query(queryString, vals, function(err, result){
      if(err) {
        throw err;
      }
      //Return results in callback
      cb(result);
    });
  },

  //Function to update a table entry
  updateOne: function(table, objColVals, condition, cb){
    //Construct query string to update a single entry in the table
    var queryString = 'UPDATE ' + table;
      queryString = queryString + ' SET ';
      queryString = queryString + objToSql(objColVals);
      queryString = queryString + ' WHERE ';
      queryString = queryString + condition;

    //console.log(queryString);

    // Perform the database query
    connection.query(queryString, function(err, result){
      if(err) {
        throw err;
      }
      //Return results in callback
      cb(result);
    });
  }
};
// Export the orm object for use in other modules
module.exports = orm;