// node.js 专属的模块化语法
// 功能等价于 web的 脚本引入操作  <script src="xxx.js"></script>
const express = require('express');
const cors = require('cors')

const app = express()

// cors原理: 在服务器上增加一个白名单, 浏览器在发请求时会来服务器询问, 是否允许其他来源的访问. 服务器告知允许即可
// app.use(cors()) 

// 白名单方案: 指定哪些来源可以访问
app.use(cors({
  origin: ['http://localhost:5500', 'http://127.0.0.1:5500']
}))
// 测试方式: 分别使用一下方式访问服务器, 看结果
// http://localhost:5500/public/index.html   在白名单没问题
// http://127.0.0.1:5500/public/index.html   在白名单没问题
// http://127.0.0.1:3000   不是同源,也不在白名单, 报错!
// http://localhost:3000   就是同源的没问题

// 通过浏览器输入 localhost:3000 来访问此服务器
app.listen(3000, () => {
  console.log('服务器已开启, 端口3000');
})

// 启动命令分两种方案:
// node app.js
//   每次带有有修改 都需要关闭重开
// nodemon app.js
//   每次有修改,会自动重启

// 新增欢迎页面, 属于静态文件
// 设置 public 目录为 静态文件管理目录, 当访问服务器时, 会从这个目录中查找文件
app.use(express.static('public'))


// 制作数据接口:
// localhost:3000/emps
app.get('/emps', (req, res) => {
  var emps = [
    { ename: "mike", age: 18 },
    { ename: "john", age: 38 },
    { ename: "lucy", age: 28 },
  ]
  // 发送给访问接口的人
  res.send({ emps })
})


