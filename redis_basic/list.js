var client = require('./client.js');

client.rpush('testLists', 'a');  // similar to Array.prototype.push()
client.rpush('testLists', 'b');
client.rpush('testLists', 'c');
client.rpush('testLists', '1');
client.lpush('testLists', '2');   // similar to Array.prototype.unshift()

// similar to Array.prototype.shift(),
client.lpop('testLists', function(err, v) {
	console.log('client.lpop:', v);
})

client.lrange('testLists', 0, -1, function (err, lists) {
	console.log('testLists,err,lists', err, lists);
});