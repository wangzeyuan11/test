//外部服务器
const express = require('express')
//引入用户路由器模块
const userRouter = require('./02_user')
const productRouter = require('./02_product')
const medicineRouter = require('./02_medicine')

const app = express()
app.listen(3000)

//挂载路由器
//在挂载路由器的同时，给所有路由的URL添加前缀
app.use('/user', userRouter)
app.use('/product', productRouter)
app.use('/medicine', medicineRouter)

// app.get('/delete', (req, res) => {
// 	res.send('用户删除成功')
// })
