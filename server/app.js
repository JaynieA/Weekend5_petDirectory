var PORT = process.env.PORT || 3000;
var express = require( 'express' );
var app = express();
var bodyParser = require( 'body-parser' );
var mongoose = require ( 'mongoose' );

var connection = require( '../modules/connection' );

//database connection
mongoose.connect(connection);

//middleware
app.use(express.static('public'));
app.use(bodyParser.json());

//server listen
app.listen(PORT, function() {
  console.log('server listening on', PORT);
}); // end listen

//routers
var pets = require( '../routers/pets' );
app.use('/pets', pets);
