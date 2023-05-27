const express = require('express')
const app = express()
app.listen(3000)
app.get('/search.html', (req, res) => {
	res.sendFile(__dirname + '/search.html')
})
//添加路由，监听按钮提交的请求（get /mysearch）
// 响应‘搜索成功’
app.get('/mysearch', (req, res) => {
	//获取的请求的URL，请求的方式
	console.log(req.url, req.method)
	//获取url中查询参数(get传递的参数)
	console.log(req.query)
	console.log(req.query.kw)
	res.send('搜索成功')
})
