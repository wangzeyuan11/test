const express = require('express')
const app = express()
app.listen(3000)
// app.get('/reg.html', (req, res) => {
// 	res.sendFile(__dirname + '/reg.html')
// })
//路由 （get /article.html）
app.get('/article.html', (req, res) => {
	//响应文件
	res.sendFile(__dirname + '/article.html')
})
//在post前使用一个插件将post传参转为对象
app.use(express.urlencoded({
	//内部转对象是如何做到的，是否使用第三方模块
	extended: true
}))


//添加路由，监听按钮提交的请求（post /myreg）
// app.post('/myreg', (req, res) => {
// 	//获取post传递的参数
// 	console.log(req.body)
// 	res.send('注册成功')
// })
app.post('/add', (req, res) => {
	console.log(req.body)
	res.send('文章发表成功')
})
