const express = require('express')
const app = express()
app.listen(3000)
app.get('/article.html', (req, res) => {
	res.sendFile(__dirname + '/article.html')
})
app.get('/mylogin', (req, res) => {
	//获取的请求的URL，请求的方式
	console.log(req.url, req.method)
	//获取url中查询参数(get传递的参数)
	console.log(req.query)
	console.log(req.query.kw)
	res.send('登陆成功！欢迎：' + req.query.kw)
})
