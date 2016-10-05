var net = require('net');

const PORT = 18001;
const HOST = '127.0.0.1';

var tcpClient = net.Socket();

tcpClient.connect(PORT, HOST, function () {
	console.log('connect success');

	// send message to server
	tcpClient.write('this is tcpClient by node.js');
});

// listen data event. when server send data to client, emit
tcpClient.on('data' ,function(data) {
	console.log('client received message: ', data.toString());
})