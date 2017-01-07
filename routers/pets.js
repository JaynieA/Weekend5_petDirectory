var express = require( 'express' );
var router = express.Router();
var User = require( '../models/user' );

router.get('/', function(req, res) {
  console.log('get route hit');
  //find all pets
  User.find({}, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send(result);
    } // end else
  }); // end find
}); // end get

router.post('/', function(req, res) {
  console.log('post route hit', req.body);
  var newPet = new User (req.body);
  newPet.save(function(err) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log(newPet);
      res.sendStatus(201);
    } // end else
  }); // end save
}); // end post

module.exports = router;