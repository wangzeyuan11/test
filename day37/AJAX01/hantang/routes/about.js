//引入express模块
const express = require('express')
//引入数据库连接模块
const connection = require('../connection')
//创建路由器对象
const router = express.Router()
//添加路由（接口）
//1.公司简介/董事长致辞(get /)
//接口地址：/v1/about
//请求方式:get
router.get('/', (req, res, next) => {
	//获取get传递的参数
	var obj = req.query
	console.log(obj)
	//开始执行sql命令
	connection.query('select * from ht_about where aid =?', [obj.aid], (err, r) => {
		if (err) {
			return next(err)
		}
		console.log(r)
		res.send({
			code: 200,
			msg: '关于汉唐',
			data: 'r'
		})
	})
})

//公司大事件接口(get /event),执行sql命令，查询数据表ht_event中所有的数据，最后响应{code:200,msg:公司大事件,data:数据}
//接口地址：/v1/about/event
//请求方式：get
router.get('/event', (req, res, next) => {
	//执行sql命令
	connection.query('select * from ht_event', (err, r) => {
		if (err) {
			return next(err)
		}
		//直接响应
		res.send({
			code: 200,
			msg: '公司大事件',
			data: r
		})
	})

})
//
router.get('/member', (req, res, next) => {
	connection.query('select * from ht_member order by mid asc', (err, r) => {
		if (err) {
			return next(err)
		}
		res.send({
			code: 200,
			msg: '旗下公司',
			data: r
		})
	})
})

//暴露对象
module.exports = router
