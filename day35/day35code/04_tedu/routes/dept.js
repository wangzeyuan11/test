//引入express模块
const express = require('express')
//引入连接模块
const connection = require('../connection')
//创建路由器模块
const router = express.Router()
//添加部门
//接口地址：/dept/add
//
router.post('/add', (req, res) => {
	var obj = req.body
	console.log(obj)
	//执行sql命令，将数据插入到数据库
	connection.query('insert into dept set ?', [obj], (err, r, next) => {
		if (err) {
			return next(err)
		}
		console.log(r)
	})
	//send方法会自动将对象转为json
	res.send({
		code: 200,
		msg: "部门添加成功"
	})
})
router.delete('/del', (req, res, next) => {
	//获取get传递的参数
	var obj = req.query
	console.log(obj)
	//开始执行sql命令
	connection.query('delete from dept where did=?', [obj.did], (err, r) => {
		if (err) {
			// throw err
			//如果连接或者sql命令出现错误，把错误交给下一个错误处理的中间件,阻止程序往后执行
			return next(err)
		}
		console.log(r)
		//如果对象下的属性affectedRows值为0，说明删除失败，否则就是删除成功
		if (r.affectedRows === 0) {
			res.send({
				code: 400,
				msg: '删除失败'
			})
		} else {
			res.send({
				code: 200,
				msg: '删除成功',
			})
		}
	})
})
router.put('/update', (req, res) => {
	var obj = req.body
	console.log(obj)
	//mysql命令
	connection.query('update dept set ? where did=?', [obj, obj.did], (err, r) => {
		if (err) {
			return next(err)
		}
		console.log(r)
		if (r.changedRows === 0) {
			res.send({
				code: 400,
				msg: '修改失败'
			})
		} else {
			res.send({
				code: 200,
				msg: '修改成功'
			})
		}
	})
})

module.exports = router
