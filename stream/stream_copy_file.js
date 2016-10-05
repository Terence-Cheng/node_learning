var fs = require('fs');

var readStream = fs.createReadStream('./test.jpg');

var writeStream = fs.createWriteStream('./test_copy.jpg');

readStream
	.on('data', function(chunk) {
		console.log('read data');
		if (writeStream.write(chunk) === false) {
			readStream.pause();
			console.log('pause');
		}
	})
	.on('end', function() {
		console.log('data end');
		writeStream.end();
	})

writeStream.on('drain', function() {
	console.log('drain');
	readStream.resume();
})




// also the one code can do 
//fs.createReadStream('./test.jpg').pipe(fs.createWriteStream('./test_pipe_copy.jpg'));