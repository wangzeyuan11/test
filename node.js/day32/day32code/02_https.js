//引入http模块
const http = require('http')
const fs = require('fs')
//创建WEB服务器
const app = http.createServer()
//给服务器设置端口
app.listen(3000, () => {
	console.log('服务器启动成功')
})
//添加一个绑定事件，监听客户端的请求，做出响应
app.on('request', (req, res) => {
	//判断请求的URL
	if (req.url === '/login') {
		res.setHeader('Content-Type', 'text/html;charset=utf-8')
		res.write('<h2>登陆成功</h2>')
	} else if (req.url === '/index.html') {
		//读取1.html文件中的内容
		var data = fs.readFileSync('index.html')
		//读取的内容作为要响应的内容
		res.write(data)
	} else if (req.url === '/study') {
		res.statusCode = 302
		//设置跳转的url
		res.setHeader('Location', 'http://www.tmooc.cn/')
	} else {
		//响应404
		res.statusCode = 404
		res.write('Not Found')
	}
	//结束响应
	res.end()
})
