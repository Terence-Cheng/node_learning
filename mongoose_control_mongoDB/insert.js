var mongoose = require('mongoose');

require('./model.js');

// 不传入scheme的时候，返回model
var Book = mongoose.model('Book');

var book = new Book({
	name: 'MEAN Web Development',
	author: 'Green',
	publishTime: new Date()
})

book.save(function (error) {
	console.log('save statue:', error ? 'failed' : 'success');
});