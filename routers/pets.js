var express = require( 'express' );
var router = express.Router();
var User = require( '../models/user' );

router.get('/:q?', function(req, res) {
  console.log('get route hit. search -->', req.params.q);
  if (req.params.q) {
    User.find({'name': new RegExp(req.params.q, 'i')}, function(err, result) {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.send(result);
      } // end else
    }); // end find
  } else {
    //find all pets
    User.find({}, function(err, result) {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.send(result);
      } // end else
    }); // end find
  } // end else
}); // end get

router.post('/', function(req, res) {
  console.log('post route hit', req.body);
  var newPet = new User (req.body);
  newPet.save(function(err) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    } // end else
  }); // end save
}); // end post

router.delete('/:id', function(req,res) {
  console.log('delete route hit', req.params.id);
  User.remove({_id: req.params.id}, function(err) {
    if(err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(204);
    } // end else
  }); // end remove
}); // end delete

router.put('/:id', function(req, res) {
  console.log('in put route', req.body, req.params.id);
  //marshall variables
  var newName = req.body.name;
  var newAnimal = req.body.animal;
  var newAge = req.body.age;
  //update the edited pet
  User.update({_id: req.params.id}, {$set: {name: newName, animal: newAnimal, age: newAge}}, function(err) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    } // end else
  }); // end update
}); // end put

module.exports = router;
