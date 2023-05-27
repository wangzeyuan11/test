// 引入express模块
const express = require('express')
// 引入数据库连接模块
const connection = require('../connection')
// 创建路由器对象
const router = express.Router()
// 添加路由
// 公司业务(get /)
// 接口地址：/v1/busi
// 请求方式：get
router.get('/', (req, res, next) => {
	// 获取get传递的参数
	var obj = req.query
	console.log(obj)
	// 执行SQL命令
	connection.query('select * from ht_business where bid=?', [obj.bid], (err, r) => {
		if(err) {
			return next(err)
		}
		res.send({code: 200, msg: '公司业务', data: r})
	})
})
// 暴露路由器对象
module.exports = router