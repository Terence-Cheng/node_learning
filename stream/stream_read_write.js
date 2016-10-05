var Readable = require('stream').Readable;
var Writable = require('stream').Writable;

var readStream = new Readable();
var writeStream = new Writable();

readStream.push('I love Imooc');
readStream.push('Hello');
readStream.push(null);

writeStream._write = function (chunk, encode, cb) {
	console.log(chunk.toString());
	cb && cb();
}

readStream.pipe(writeStream);