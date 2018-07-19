var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");
var db = require("../models");


// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  db.Burger.findAll({})
    .then(burger => {
      res.render("index", {burger: burger});
    });
});

router.post("/api/burgers", function (req, res) {
  db.Burger.create(req.body)
    .then(burger => {
      res.json(burger);
    })
});

router.put("/api/burgers/:id", function (req, res) {
  db.Burger.update({
    devoured: true
  }, {
      where: {
        id: req.params.id
      }
    }).then(updated => {
      res.json(updated);
    });


});


// Export routes for server.js to use.
module.exports = router;
