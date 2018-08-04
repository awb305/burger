var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(val, cb) {
    orm.insertOne("burgers",val, function(res) {
      cb(res);
    });
  },
  updateOne: function(id, cb) {
    orm.updateOne("burgers", id, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
// 