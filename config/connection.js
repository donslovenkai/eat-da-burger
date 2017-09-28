// Sets up the code to connect Node to MySQL 
var mysql = require('mysql');

//Create MySQL connection object

// Create the MySQL connection object
var connection;

if (process.env.JAWSDB_URL) {
    // DB is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // DB is local on localhost
    connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: "Bootcamp!2#",
        database: "burgers_db"
    })
};


//var connection = mysql.createConnection({
//        port: 3306,//      host: 'localhost',
//        user: 'root',
//        password: 'Bootcamp!2#',
//        database: 'burgers_db',
//    });
//};

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

// Export the connection
module.exports = connection;