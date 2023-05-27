// 引入express模块
const express = require('express')
// 引入用户路由器模块
const userRouter = require('./routes/user')
// 创建WEB服务器
const app = express()
// 设置端口
app.listen(3000)
// 托管静态资源到public目录
app.use(express.static('public'))
// 使用内置的中间件，将所有post传参转为对象
app.use(express.urlencoded({
	extended: true
}))
// 挂载路由器
// /user/myreg
app.use('/user', userRouter)

