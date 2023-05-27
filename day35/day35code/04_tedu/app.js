const express = require('express')
//引入员工路由器模块（emp.js）
const empRouter = require('./routes/emp')
const deptRouter = require('./routes/dept')
const app = express()
app.listen(3000)
//托管静态资源到public目录
app.use(express.static('public'))
//将post传递的参数转为对象
app.use(express.urlencoded({
	extended: true
}))
//挂载员工路由器，添加前缀/emp
app.use('/emp', empRouter)
app.use('/dept', deptRouter)

app.use((err, req, res, next) => {
	// err 接收的路由传递过来的错误信息
	console.log(err)
	// 响应
	res.send({
		code: 500,
		msg: '服务器端错误'
	})
})
