var client = require('./client.js');

client.sadd('testSet', 1);
client.sadd('testSet', 'a');
client.sadd('testSet', 'b');
client.sadd('testSet', 'c');

client.smembers('testSet', function (err, value) {
	console.log('client.smembers:', value);
})