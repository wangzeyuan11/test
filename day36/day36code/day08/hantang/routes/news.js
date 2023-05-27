// 引入express模块
const express = require('express')
// 引入数据库连接模块
const connection = require('../connection')
// 创建路由器对象
const router = express.Router()
// 添加路由
// 1.新闻类别(get /cat)
// 接口地址：/v1/news/cat
// 请求方式：get
router.get('/cat', (req, res, next) => {
	// 执行SQL命令
	connection.query('select * from ht_cat order by cid asc', (err, r) => {
		if(err) {
			return next(err)
		}
		res.send({code: 200, msg: '新闻类别', data: r})
	})
})

// 2.新闻列表(get /list)
// 接口地址：/v1/news/list
// 请求方式：get
router.get('/list', (req, res ,next) => {
	// 获取get传递的参数
	var obj = req.query
	console.log(obj)
	// 如果当前页码为空设置默认值
	if(!obj.pno) { obj.pno = 1 }
	// 如果每页数据量为空设置默认值
	if(!obj.count) { obj.count = 10 }
	console.log(obj)
	// 计算开始查询的值
	var start = (obj.pno - 1) * obj.count
	// 将每页的数据量转为数字型
	var size = parseInt(obj.count)
	// 执行SQL命令
	connection.query('select nid,title,ctime from ht_news where cat_id=? order by ctime desc limit ?,?; select count(*) as n from ht_news where cat_id=?', [obj.cat_id, start, size, obj.cat_id], (err, r) => {
		if(err) {
			return next(err)
		}
		console.log(r)
		res.send({
			code: 200,
			msg: '新闻列表',
			data: r[0],
			total: r[1][0].n
		})	
	})
})

// 3.新闻详情(get /detail)
// 接口地址：/v1/news/detail
// 请求方式：get
router.get('/detail', (req, res, next) => {
	// 获取get传递的参数
	var obj = req.query
	console.log(obj)
	// 执行SQL命令
	connection.query('select * from ht_news where nid=?', [obj.nid], (err, r) => {
		if(err) {
			return next(err)
		}
		res.send({code: 200, msg: '新闻详情', data: r})
	})
})


// 暴露路由器对象
module.exports = router