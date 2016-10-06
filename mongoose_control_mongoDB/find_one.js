var mongoose = require('mongoose');

require('./model.js');

var Book = mongoose.model('Book');

Book.findOne({author: 'Green'}, function (err, doc) {
	if (err) {
		console.log('err:', err);
	}
	doc.author = 'Jame';
	doc.save();
	console.log('result:', doc.toString());
})