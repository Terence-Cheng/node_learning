var express    = require('express'),
	bodyParser = require('body-parser');  // 用来解析请求的body

var app = express();

/*app.use(), 任何方式的请求都会拦截,
* @prama1: 资源路径，可选
* @parma2: 对请求进行处理
*/
app.use(bodyParser.json());  // 对请求体为Json的进行解析

app.use(bodyParser.urlencoded({
	extended: false
}))

app.use(express.static(__dirname + '/public'));  // 静态资源请求

// 路由与业务逻辑，只有get请求会被拦截
/*app.get('/', function (req, res) {
	// body...
	res.send('hello');
})*/

app.use('/user', require('./routes/user.js'));  // user路径下，引入user.js这个文件


// app.post()

app.listen(3000);