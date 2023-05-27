const express = require('express')
const connection = require('../connection')
const router = express.Router()

router.get('/', (req, res, next) => {
	//获取get传参
	var obj = req.query
	console.log(obj)
	connection.query('select * from ht_culture where cid =?', [obj.cid], (err, r) => {
		if (err) {
			return next(err)
		}
		res.send({
			code: 200,
			msg: '企业文化',
			data: r
		})
	})
})

module.exports = router
