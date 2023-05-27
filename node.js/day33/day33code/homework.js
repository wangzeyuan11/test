const express = require('express')
const app = express()
app.listen(3000)
app.get('/add.html', (req, res) => {
	res.sendFile(__dirname + '/add.html')
})
app.use(express.urlencoded({
	//内部转对象是如何做到的，是否使用第三方模块
	extended: true
}))
//第二个路由 ，监听按钮提交的请求
app.post('/myadd', (req, res) => {
	console.log(req.body)
	console.log(req.query.user)
	console.log(req.query.dj)
	res.send('医院添加成功！医院名称' + req.body.user)
})
