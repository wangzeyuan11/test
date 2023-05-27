//引入http模块
const http = require('http')
//创建WEB服务器
const app = http.createServer()
//给服务器设置端口
app.listen(3000, () => {
	console.log('服务器启动成功')
})

//域名、ip地址
//http://127.0.0.1:3000
//http://localhost:3000

//给服务器绑定事件，监听客户端的请求
app.on('request', (req, res) => {
	//console.log('有一个请求进来')
	//req 请求的对象
	//res 响应的对象

	// 设置响应头信息中， 内容类型
	// res.setHeader('Content-Type', 'text/html;charset=utf-8')
	// //设置响应的内容
	// res.write('WEB前端2212')
	// //结束响应
	// res.end()

	//实现跳转
	//设置响应的状态码为302
	res.statusCode = 302
	//设置跳转的url
	res.setHeader('Location', 'http://www.tmooc.cn/')
	//结束响应
	res.end()
})

//作业：使用http模块创建WEB服务器，设置端口号，监听客户端的请求，响应网页1.html（先用文件系统模块读取文件，再把读取到的值作为响应的内容）
