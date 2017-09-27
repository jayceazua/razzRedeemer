
var express = require('express');
var app = express();
var prizeRoutes = express.Router();

// Require Item model in our routes module
var Prize = require('../models/Prize');

// Defined store route
prizeRoutes.route('/add').post(function (req, res) {
  var prize = new Prize(req.body);
      prize.save()
    .then(prize => {
    res.status(200).json({'prize': 'Prize added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
prizeRoutes.route('/').get(function (req, res) {
  Prize.find(function (err, prizes){
    if(err){
      console.log(err);
    }
    else {
      res.json(prizes);
    }
  });
});

// Defined edit route
prizeRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Prize.findById(id, function (err, prize){
      res.json(prize);
  });
});

//Vue Detail route
prizeRoutes.route('/detail/:id').get(function(req, res) {
  var id = req.params.id;
  Prize.findById(id, function(err, prize) {
    res.json(prize);
  });
});

//Redeem Prize Route
/*
prizeRoutes.route('/redeem/:id').post(function (req, res) {
  Prize.findById(req.params.id, function(err, prize) {
    if(!prize)
      return next(new Error('Could not redeem prize!'));
    else {
      //decrease the quantity by one
      //if the prize.quantity === 0 
      //do not allow for this button to be clicked
    }
  })
})
*/

//  Defined update route
prizeRoutes.route('/update/:id').post(function (req, res) {
  Prize.findById(req.params.id, function(err, prize) {
    if (!prize)
      return next(new Error('Could not load Document'));
    else {
      prize.name = req.body.name;
      prize.description = req.body.description;
      prize.image_url = req.body.image_url;
      prize.quantity = req.body.quantity;

      prize.save().then(prize => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
prizeRoutes.route('/delete/:id').get(function (req, res) {
  Prize.findByIdAndRemove({_id: req.params.id}, function(err, prize){
		if(err) res.json(err);
		else res.json('Successfully removed');
	});
});

module.exports = prizeRoutes;
