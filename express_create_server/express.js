var express = require('express');
var router = express.Router();
var app = express();

//静态文件
app.use(express.static(__dirname + '/public'));

// PATH路由方式
app.get('/', function() {
	res.end('hello');
})


// Router路由方式，同一个路由下的子路由
router.get('/fb', function(req, res) {
	res.end('Router /fb');
})
router.get('/tt', function(req, res) {
	res.end('Router /tt');
})
app.use('/user', router);


// route路由方式, 适合restful api
app.route('/article')
	.get(function(req, res) {
		res.end('route article/get  \n');
	})
	.post(function(req, res) {
		res.end('route article/post \n')
	})


// 路由参数处理
//http://example.com/news/123,
app.param('newsId', function(req, res, next, newsId) {
	req.newsId = newsId;
	next();
})

app.get('/news/:newsId', function(req, res) {
	res.end('newsId: '+ req.newsId + '\n');
})


app.listen(18001, function (req, res) {
	// body...
	console.log('express running 18001');
})