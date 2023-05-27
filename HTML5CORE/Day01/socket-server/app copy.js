const express = require('express');
const cors = require('cors'); // 跨域模块

//引入socket模块 : 提供长连接功能
const socket = require('socket.io')
//引入http模块 : 此模块能够把express服务器和socket整合在一起
const http = require('http')
const app = express()
//把express服务器整合到基础服务器中
const server = http.createServer(app)

//利用socket模块,新建一个负责长连接的服务器
//把基础服务器，传递给socket管理
const socket_server = new socket.Server(server,{
  cors:{origin:"*"} //解决跨域问题
})

// on:当什么什么时 用于监听事件
//事件名称：connection,客户端有连接操作时自动触发
socket_server.on('connection',client=>{
  console.log('有新用户连接：',client);

  //监听ask_time事件
  client.on('ask_time',()=>{
    const now = new Date().toLocaleTimeString()
    //发送消息
    client.emit('now',now)
  })

  //每隔3秒就给用户发送一条消息
  setInterval(() => {
    // emit:发射.用于给客户端发消息
    //参数1：消息名 参数2：消息值
    client.emit('guang_gao','在吗?你没事吧?没事就吃溜溜梅...')
  }, 3000);
  setInterval(() => {
    client.emit('welcome','欢迎使用websocket')
  }, 5000);
})


app.use(cors())
app.use(express.static('public'))

const port = 3000;

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})



