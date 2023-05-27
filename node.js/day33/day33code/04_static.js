const express = require('express')
const app = express()
app.listen(3000)

//静态托管资源
//把静态资源托管到public目录，客户端请求静态资源会到public目录下查找
app.use(express.static('public'))

//路由(get /1.html)
// app.get('/1.html', (req, res) => {
// 	res.sendFile(__dirname + '/1.html')
// })

//练习：托管静态资源到files目录，添加2.html文件
app.use(express.static('files'))
