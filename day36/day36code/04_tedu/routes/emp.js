//引入express模块
const express = require('express')
//引入连接模块
const connection = require('../connection')
//创建路由器模块
const router = express.Router()
//添加路由
//1.搜索员工(get/search)
//接口地址：http://127.0.0.1:3000/emp/search
//接口请求方式:get

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
		//查询的结果是数组,如果是空数组说明该员工是不存在的，否则员工存在
		if (r.length === 0) {
			res.send({
				code: 400,
				msg: '员工不存在'
			})
		} else {
			res.send({
				code: 200,
				msg: '查询成功',
				data: r
			})
		}
	})
})
//2.添加成员（post /add）
//接口地址：http://127.0.0.1:3000/emp/add
//请求方式：post
router.post('/add', (req, res) => {
	var obj = req.body
	console.log(obj)
	//执行sql命令，将数据插入到数据库
	connection.query('insert into emp set ?', [obj], (err, r) => {
		if (err) {
			throw err
		}
		console.log(r)
	})
	//send方法会自动将对象转为json
	res.send({
		code: 200,
		msg: "员工添加成功"
	})
})

//
router.delete('/del', (req, res, next) => {
	//获取get传递的参数
	var obj = req.query
	console.log(obj)
	//开始执行sql命令
	connection.query('delete from emp where eid=?', [obj.eid], (err, r) => {
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

router.put('/update', (req, res, next) => {
	//获取get传递的参数
	var obj = req.body
	console.log(obj)
	//开始执行sql命令
	connection.query('update emp set ? where eid=?', [obj, obj.eid], (err, r) => {
		if (err) {
			// throw err
			//如果连接或者sql命令出现错误，把错误交给下一个错误处理的中间件,阻止程序往后执行
			return next(err)
		}
		console.log(r)
		//结果是对象，如果对象下的changedRows为0说明修改失败，否则成功
		if (r.changedRows === 0) {
			res.send({
				code: 400,
				msg: '修改失败'
			})
		} else {
			res.send({
				code: 200,
				msg: '修改成功',
			})
		}
	})
})

//员工列表分页查询
router.get('/list', (req, res, next) => {
	//获取get传递的参数
	var obj = req.query
	console.log(obj)
	//如果传递页码pno为空，要设置默认为第一页
	if (obj.pno === '') {
		obj.pno = 1
	}
	//如果每页数据量为空，设置默认为5条数据
	if (!obj.count) {
		obj.count = 5
	}
	console.log(obj)
	//计算开始查询的值
	var start = (obj.pno - 1) * obj.count
	// 将每页的数据转为数字
	var size = parseInt(obj.count)
	//开始执行sql命令
	connection.query('select * from emp limit ?,?;select count(*) as n from emp', [start, size], (err, r) => {
		if (err) {
			//如果连接或者sql命令出现错误，把错误交给下一个错误处理的中间件,阻止程序往后执行
			return next(err)
		}
		console.log(r)
		//响应给客户端
		res.send({
			code: 200,
			msg: '员工列表',
			data: r[0],
			total: r[1][0].n
		})
	})
})

//暴露路由器对象
module.exports = router
