const express = require('express')
//引入员工路由器模块（emp.js）
const empRouter = require('./routes/emp')
const deptRouter = require('./routes/dept')
const app = express()
app.listen(3000)
//托管静态资源到public目录
app.use(express.static('public'))
//挂载员工路由器，添加前缀/emp
app.use('/emp', empRouter)
app.use('/dept', deptRouter)
//在所有路由器（路由）后面，添加错误处理中间件，拦截所有错误
app.use((err, req, res, next) => {
	//err 接收路由传递过来的错误信息
	console.log(err)
	//响应
	res.send({
		code: 500,
		msg: '服务器端错误'
	})
})
