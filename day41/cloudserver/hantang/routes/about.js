// 引入express模块
const express = require('express')
// 引入数据库连接模块
const connection = require('../connection')
// 创建路由器对象
const router = express.Router()
// 添加路由(接口)
// 1.公司简介/董事长致辞(get /)
// 接口地址：/v1/about
// 请求方式：get
router.get('/', (req, res, next) => {
	// 获取get传递的参数
	const obj = req.query
	console.log(obj)
	// 执行SQL命令
	connection.query('select * from ht_about where aid=?', [obj.aid], (err, r) => {
		if(err) {
			return next(err)
		}
		console.log(r)
		res.send({code: 200, msg: '关于汉唐', data: r})
	})
})

// 2.公司大事件(get /event)
// 接口地址：/v1/about/event
// 请求方式：get
router.get('/event', (req, res, next) => {
	// 执行SQL命令
	connection.query('select * from ht_event', (err, r) => {
		if(err) {
			return next(err)
		}
		// 直接响应
		res.send({code: 200, msg: '公司大事件', data: r})
	})
})

// 3.旗下公司(get /member)
// 接口地址： /v1/about/member
// 请求方式：get
router.get('/member', (req, res, next) => {
	// 执行SQL命令
	connection.query('select * from ht_member order by mid asc', (err, r) => {
		if(err) {
			return next(err)
		}
		res.send({code: 200, msg: '旗下公司', data: r})
	})
})


// 暴露路由器对象
module.exports = router