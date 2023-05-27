const express = require('express')
const connection = require('../connection')
const router = express.Router()
// 添加路由
// 1.职位列表(get /list)
// 接口地址：/v1/job/list
// 请求方式：get
router.get('/list', (req, res, next) => {
	// 获取get传递的参数
	var obj = req.query
	console.log(obj)
	// 如果页码为空
	if(!obj.pno) { obj.pno = 1 }
	// 如果每页数据量为空
	if(!obj.count) { obj.count = 2 }
	// 计算开始查询的值
	var start = (obj.pno - 1) * obj.count
	// 将每页数据量转为数字型
	var size = parseInt(obj.count)
	// 执行SQL命令
	connection.query('select jid,title,ctime from ht_job limit ?,?; select count(*) as n from ht_job',[start, size], (err, r) => {
		if(err) {
			return next(err)
		}
		console.log(r)
		res.send({
			code: 200,
			msg: '职位列表',
			data: r[0],
			total: r[1][0].n
		})
	})
})

// 2.职位详情(get /detail)
// 接口地址：/v1/job/detail
// 请求方式：get
router.get('/detail', (req, res, next) => {
	// 获取get传递的参数
	var obj = req.query
	console.log(obj)
	// 执行SQL命令
	connection.query('select * from ht_job where jid=?', [obj.jid], (err, r) => {
		if(err) {
			return next(err)
		}
		res.send({code: 200, msg: '职位详情', data: r})
	})
})

module.exports = router