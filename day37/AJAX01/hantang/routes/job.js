const express = require('express')
const connection = require('../connection')
const router = express.Router()

//接口地址：/v1/job/list
//请求方式：
router.get('/list', (req, res, next) => {
	//获取get传递的参数
	var obj = req.query
	console.log(obj)
	//如果当前页码为空，设置默认值
	if (!obj.pno) {
		obj.pno = 1
	}
	//如果每页数据量为空设置默认值
	if (!obj.count) {
		obj.count = 2
	}
	console.log(obj)
	//计算开始查询的值
	var start = (obj.pno - 1) * obj.count
	//将每页的数据量转为数字类型
	var size = parseInt(obj.count)
	connection.query(
		'select jid,title,ctime from ht_job limit ?,?;select count(*) as n from ht_job', [start, size], (
			err, r) => {
			if (err) {
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


router.get('/detail', (req, res, next) => {
	var obj = req.query
	console.log(obj)
	//执行sql命令
	connection.query('select * from ht_job where jid=?', [obj.jid], (err, r) => {
		if (err) {
			return next(err)
		}
		res.send({
			code: 200,
			msg: '职位详情',
			data: r
		})
	})
})



module.exports = router
