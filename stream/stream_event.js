var fs = require('fs');

// 声明一个stream
var readStream = fs.createReadStream('./test.jpg');

var n = 0;

readStream
	.on('data', function (chunk) {
		n++
		console.log('data emits');
		console.log("chunk is Buffer: " + Buffer.isBuffer(chunk));
		// console.log(chunk.toString('utf-8'));
		readStream.pause();
		console.log('readStream pause');
		setTimeout(function() {
			console.log('readStream resume');
			readStream.resume();
		}, 1000);

	})
	// when the 'data' event is done, this event will be emited
	.on('readable', function() {  
		console.log('data readble');
	})
	.on('end', function() {
		console.log('total read times: ' + n);
		console.log('data end');
	})
	.on('error', function(e) {
		console.log('data error: ' + e);
	})
