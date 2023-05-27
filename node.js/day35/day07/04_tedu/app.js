const express = require('express')
// 引入员工路由器模块
const empRouter = require('./routes/emp')
// 引入部门路由器模块
const deptRouter = require('./routes/dept')

const app = express()
app.listen(3000)
// 托管静态资源到public目录
app.use(express.static('public'))
// 将post传递的参数转为对象
app.use(express.urlencoded({
	extended: true
}))
// 挂载员工路由器，添加前缀/emp
app.use('/emp', empRouter)
// 挂载部门路由器，添加前缀/dept
app.use('/dept', deptRouter)

// 在所有路由器(路由)后边，添加错误处理中间件，拦截所有的错误
app.use((err, req, res, next) => {
	// err 接收的路由传递过来的错误信息
	console.log(err)
	// 响应
	res.send({code: 500, msg: '服务器端错误'})
})