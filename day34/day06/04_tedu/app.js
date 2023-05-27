const express = require('express')
// 引入员工路由器模块
const empRouter = require('./routes/emp')
const app = express()
app.listen(3000)
// 托管静态资源到public目录
app.use(express.static('public'))
// 挂载员工路由器，添加前缀/emp
app.use('/emp', empRouter)