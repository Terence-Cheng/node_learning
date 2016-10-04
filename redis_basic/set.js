var client = require('./client.js');

// 存取值
client.set('hello', 'this is a value');
client.get('hello', function (err, v) {
	console.log('this is redisr err:%s, v:%s', err, v);
})