//引入http模块
const http = require('http')
//引入文件系统模块
const fs = require('fs')
//创建WEB服务器
const app = http.createServer()
// 设置端口
app.listen(3000, () => {
	console.log('服务器启动成功')
})
//监听客户端请求,做出响应
app.on('request', (req, res) => {
	//req请求的对象
	//请求的URL，请求的方式
	console.log(req.url, req.method)

	//读取1.html文件中的内容
	var data = fs.readFileSync('1.html')
	//读取的内容作为要响应的内容
	res.write(data)
	//结束响应
	res.end()
})
