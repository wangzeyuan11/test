const express = require('express');
const cors = require('cors'); // 跨域模块
const proxy = require('express-http-proxy'); // 代理服务器模块

const app = express()

// 过程:  html --请求1--> express服务器 ---请求2--> 斗鱼服务器
// 请求1: 存在跨域问题;    请求2: 无跨域问题, 服务器之间的交互.
app.use(cors()) // 解决 请求1 的跨域问题

app.listen(3000, () => {
  console.log('服务器已开启, 端口3000');
})

// localhost:3000/baidu  -> 请求到 百度的页面
app.use('/baidu', proxy('http://www.baidu.com'))
// localhost:3000/jd   -> 转到 http://jd.com
app.use('/jd', proxy('http://jd.com'))

// localhost:3000/dy
app.use('/dy', proxy('https://m.douyu.com'))