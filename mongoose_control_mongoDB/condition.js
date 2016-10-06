var mongoose = require('mongoose');

require('./model.js');

var Book = mongoose.model('Book');

var cond = {
	$or: [
		{author: 'Jame'},
		{author: 'Green'}
	]
}

Book.find(cond, function (error, docs) {
	if (error) {
		console.log('find error: ', error);
	}


	console.log('find results: ', docs.toString());
	
})