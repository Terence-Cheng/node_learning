var mongoose = require('mongoose');

// var uri = 'mongodb://username:password@hostname:port/databasename';
var uri = "mongodb://localhost/part9";

// connect the database
mongoose.connect(uri);

var BookSchema = new mongoose.Schema({
	name: String,
	author: String,
	publishTime: Date
});

mongoose.model('Book', BookSchema);