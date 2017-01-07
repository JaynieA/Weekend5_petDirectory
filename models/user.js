var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var petSchema = new Schema({
  name: String,
  animal: String,
  age: Number,
  image_url: String
}); // end petSchema

var User = mongoose.model( 'pets', petSchema );

module.exports = User;
