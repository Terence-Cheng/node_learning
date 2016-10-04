var client = require('./client.js');

client.subscribe('testPublish'); // 订阅消息

// 消息事件
client.on('message', function (channel, msg) {
	console.log('message:%s from %s', msg ,channel);
})
