//作业：使用http模块创建WEB服务器，设置端口号，监听客户端的请求，响应网页1.html（先用文件系统模块读取文件，再把读取到的值作为响应的内容）
const fs = require('fs')
//以流的方式读取文件
var rs = fs.createReadStream('02.html')
//创建一个写入的流，可以流的方式写入文件
var ws = fs.createWriteStream('1.html')
//将读取的流添加到写入的流
rs.pipe(ws)
//创建http模块
const http = require('http')
//创建WEB服务器
const app = http.createServer()
//给服务器设置端口
app.listen(3000, () => {
	console.log('监听服务器3000窗口开启')
})
//给服务器设置绑定事件，监听客户端请求
app.on('request', (req, res) => {
	//设置响应头部内容
	res.setHeader('Content-Type', 'text/html;charset=utf-8')
	//设置响应的内容
	res.write(ws)
	//结束响应
	res.end()
})
