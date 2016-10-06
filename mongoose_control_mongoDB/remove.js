var mongoose = require('mongoose');

require('./model.js');

var Book = mongoose.model('Book');

Book.findOne({author: 'Green'}, function (error, doc) {
	if (error) {
		console.log('findOne error: ', error);
	}

	if (doc) {
		doc.remove();
		console.log('remove success');
	}
})