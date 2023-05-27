const express = require('express')
const app = express()
app.listen(3000)
// app.get('/package/:pname', (req, res) => {
// 	//获取params传递的参数
// 	console.log(req.params)
// 	res.send(`这是${req.params.pname}包使用详情`)
// })

//练习：添加路由(get/shopping)，用于将商品添加到购物车，使用params方式传递商品的名称和购买的数量；最后响应
//购物车添加成功！商品XXX 购物数量XX
app.get('/shopping/:uname/:shuliang', (req, res) => {
	var obj = req.params
	console.log(obj)
	res.send(`购物车添加成功！商品：${obj.uname},购买数量：${obj.shuliang}`)
})
