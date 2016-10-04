var express = require('express');
var router = express.Router();

//router.get  post  all 来匹配不同的请求类型
router.all('/list', function (req, res) {

	console.log(req.method); // get post
	console.log(req.baseUrl);  // 
	console.log(req.path);

	console.log(req.headers['user-agent']); //查询请求头
	console.log(req.get('user-agent'));

	console.log(req.query);    //获取url查询参数
	console.log(req.query.id); //获取url查询参数的值

	console.log(req.body);    //post请求时的请求体
	console.log(req.body.id)  //请求的值

	res.send('hello, this is router all');

})

router.get('/fb', function(req, res) {
	res.status(403).send('^_^ forbidden');
})

router.get('/tt', function(req, res) {
	res.contentType('application/javascript');
	res.sendFile('/ok.js', {root: __dirname + '/../public'});
})

router.get('/mm', function(req, res) {
	res.json({a:1, b:[true, 'OK']});
})

router.get('/:id', function(req, res) {
	// rest风格
	console.log(req.params.id);
	res.send('ok');
});

module.exports = router;