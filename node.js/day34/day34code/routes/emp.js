//引入express模块
const express = require('express')
//引入连接模块
const connection = require('../connection')
//创建路由器模块
const router = express.Router()
//添加路由
//1.搜索员工(get/search)
router.get('/search', (req, res) => {
	//获取get传递的参数
	var obj = req.query
	console.log(obj)
	//开始执行sql命令
	connection.query('select * from emp where ename =?', [obj.ename], (err, r) => {
		if (err) {
			throw err
		}
		console.log(r)
	})
	res.send('查询成功')
})
//暴露路由器对象
module.exports = router
