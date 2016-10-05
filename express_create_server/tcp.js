// TCP服务器，服务器能够主动向浏览器发送数据，实时性较高

const PORT = 18001;
const HOST = '127.0.0.1';

var net = require('net');

var app = net.createServer(clientHandler);

// 有客户端连接的时候触发执行的connection事件，参数为socket实例
function clientHandler(socket) {
	console.log('someone connected');

	// 客户端发送数据的时候，触发data事件
	socket.on('data', function(data) {
		console.log(socket.remoteAddress, socket.remotePort, 'send: ', data.toString()); // 否则就是Buffer的一个实例

		// server send message to client
		socket.write('server received\n');
	});

	// client close the connection
	socket.on('close', function() {
		// undefinet, undefined, disconnected  //because socket is destoryed
		console.log(socket.remoteAddress, socket.remotePort, 'disconnected');
	})
}

app.listen(PORT, HOST);

console.log('tcp server running on tcp://', HOST, ':', PORT);