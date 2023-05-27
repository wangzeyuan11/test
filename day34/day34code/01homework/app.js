//1引入express模块
//5引入用户路由器模块
const userRouter = require('./routes/user')
const express = require('express')
//2创建WEB服务器
const app = express()
//3设置端口
app.listen(3000)
//4托管静态文件到public目录
app.use(express.static('public'))
//7使用内置的中间件，将所有post传参转为对象
app.use(express.urlencoded({
	extended: true
}))
//6挂载路由器
// /user/myreg
app.use('/user', userRouter)
