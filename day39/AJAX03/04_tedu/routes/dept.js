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
// 2.删除部门(delete /del)
// 接口地址：/dept/del
// 请求方式：delete
router.delete('/del', (req, res, next) => {
	// 获取get传递参数
	var obj = req.query
	console.log(obj)
	// 执行SQL命令
	connection.query('delete from dept where did=?', [obj.did], (err, r) => {
		if(err) {
			return next(err)
		}
		console.log(r)
		// 如果对象下的affectedRows值为0说明删除失败，否则就是删除成功
		if(r.affectedRows === 0) {
			res.send({code: 400, msg: '删除失败'})
		} else {
			res.send({code: 200, msg: '删除成功'})
		}
	})
})
// 3.修改部门(put /update)
// 接口地址：/dept/update
// 请求方式：put
router.put('/update', (req, res, next) => {
	// 获取post传递的参数
	var obj = req.body
	console.log(obj)
	// 执行SQL命令，修改数据
	connection.query('update dept set ? where did=?', [obj, obj.did], (err, r) => {
		if(err) {
			return next(err)
		}
		console.log(r)
		// 如果对象下changedRows值为0说明修改失败，否则修改成功
		if(r.changedRows === 0) {
			res.send({code: 400, msg: '修改失败'})
		} else {
			res.send({code: 200, msg: '修改成功'})
		}
	})
})


// 暴露路由器对象
module.exports = router
