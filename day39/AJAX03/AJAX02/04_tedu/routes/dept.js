// 引入express模块
const express = require('express')
// 引入数据库连接模块
const connection = require('../connection')
// 创建路由器对象
const router = express.Router()
// 添加路由
// 1.添加部门(post /add)
// 接口地址：/dept/add
// 请求方式：post
router.post('/add', (req, res, next) => {
	// 获取post传递的参数
	var obj = req.body
	console.log(obj)
	// 执行SQL命令，将数据插入到数据库
	connection.query('insert into dept set ?',[obj], (err, r) => {
		if(err) {
			return next(err)
		}
		console.log(r)
		res.send({code: 200, msg: '部门添加成功'})
	})
})
// 暴露路由器对象
module.exports = router
