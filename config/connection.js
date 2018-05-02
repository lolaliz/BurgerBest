//setup the code to connect Node to MySQL.
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
  });

//export the connection 
module.exports = connection;