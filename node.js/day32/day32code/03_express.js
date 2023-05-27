//引入express
const express = require('express')
// console.log(express())
//创建WEB服务器
const app = express()
//设置端口
app.listen(3000, () => {
	console.log('服务器启动成功')
})
// 添加路由，监听登录的请求
//请求的URL： /login
//请求的方式：get 
app.get('/login', (req, res) => {
	//设置响应内容并结束
	res.send('<h2>登陆成功</h2>')
})
// 练习：添加路由，监听商品列表的请求
// 请求的方法： get
//请求的URL： /product
// 响应： h1这是一组商品
app.get('/product', (req, res) => {
	res.send('<h1>这是一组商品xxxx</h1>')
})

//添加路由
//请求的url： /study 请求的方式get 
app.get('/study', (req, res) => {
	//跳转
	res.redirect('http://www.tmooc.cn/')
})
//添加路由
//请求的URL / 请求的方式 ： get
//跳转到/login
app.get('/', (req, res) => {
	//跳转
	res.redirect('/login')
})

//添加路由
//请求的URL:/index.html 请求的方式：get
//响应文件index.html
app.get('/index.html', (req, res) => {
	//文件必须是绝对路径
	//C:\Users\Administrator\Desktop\2022WEB\day32\day32code\index.html
	res.sendFile(__dirname + '/index.html')
})
console.log(__dirname)
