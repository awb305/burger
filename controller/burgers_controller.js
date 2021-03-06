// 


var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
let burger =  require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    res.render("index");
  });


router.get("/api/burgers", function(req, res) {
  burger.selectAll(function(data) {
    var burgerObject = {
      burger: data
    };
    console.log(burgerObject);
    res.json(burgerObject);
  });
});

router.post("/api/burgers/:name", function(req, res) {

  console.log("req.params", req.params.name);  
  burger.insertOne(req.params.name, function(result) {
    // Send back the ID of the new quote
   // res.json({ id: result.insertId });
   console.log(result);
  });
  res.status(200).end();
});

router.put("/api/burgers/:id", function(req, res) {

 

  burger.updateOne(
    req.params.id,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

// Export routes for server.js to use.
module.exports = router;
