var connection = require("../config/connection.js");


// Object for all our SQL statement functions.
var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(table, val, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (burger_name) VALUES (\""
    queryString += val;
    queryString += "\") ";

    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  updateOne: function(table, val, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET burger_name = \"";
    queryString += val;
    queryString += "\" WHERE burger_name = \"";
    queryString += condition;
    queryString += "\"";

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
