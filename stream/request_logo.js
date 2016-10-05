var http = require('http'),
	fs = require('fs'),
    request = require('request');  // need to npm install request

http
	.createServer(function (req, res) {
		
		fs.createReadStream('./test.jpg').pipe(res);
/*
		request('http://img.mukewang.com/57d21d07000179ef12000460.jpg')
			.pipe(res);*/
	})
	.listen(8091);