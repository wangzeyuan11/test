const express = require('express')
const cors = require('cors')
const app = express()
app.listen(3000)
//使用中间件，允许跨域
app.use(cors())
//使用中间件，将post传参转为对象
app.use(express.urlencoded({
	extended: true
}))
//将post传参中json格式转为对象
app.use(express.json())
//请求方式get
//请求地址：http://127.0.0.1:3000/login
app.get('/login', (req, res) => {
	//获取get传递的参数
	var obj = req.query
	console.log(obj)
	//用户名user 密码pwd
	if (obj.user === 'admin' && obj.pwd === '123456') {
		res.send('登录成功')
	} else {
		res.send('登录失败')
	}
})
app.get('/check', (req, res) => {
	var obj = req.query
	console.log(obj)
	if (obj.user === 'admin') {
		res.send('用户名已被占用')
	} else {
		res.send('用户名可以使用')
	}
})
app.post('/reg', (req, res) => {
	console.log(req.body)
	res.send('响应成功')
})
