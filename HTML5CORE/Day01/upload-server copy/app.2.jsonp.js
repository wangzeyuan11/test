const express = require('express');
const app = express()

app.listen(3000, () => {
  console.log('服务器已开启, 端口3000');
})

app.use(express.static('public'))

app.get('/emps', (req, res) => {
  // 从GET请求的参数中, 读取 callback 属性的值
  const { callback } = req.query

  var emps = [
    { ename: "mike", age: 18 },
    { ename: "john", age: 38 },
    { ename: "lucy", age: 28 },
  ]
  // 转为JSON字符串
  var emps_str = JSON.stringify(emps)

  var resp = callback + `(${emps_str})`
  console.log('resp:', resp)
  res.send(resp)
})

app.get('/names', (req, res) => {
  const cb = req.query.cb

  var names = ['凯凯', '铭铭']
  var names_str = JSON.stringify(names)
  // 函数名(值)
  var resp = `${cb}(${names_str})`

  res.send(resp)
})


app.get('/movies', function (req, res) {
  const cb = req.query.cb

  const data = ['流浪地球', '满江红']
  const data_str = JSON.stringify(data)

  res.send(
    `${cb}(${data_str})`
  )
})
