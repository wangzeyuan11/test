const express = require('express')
const connection = require('../connection')
const router = express.Router()

router.get('/', (req, res, next) => {
	var obj = req.query
	console.log(obj)
	//执行sql命令
	connection.query('select * from ht_business where bid =?', [obj.bid], (err, r) => {
		if (err) {
			return next(err)
		}
		res.send({
			code: 200,
			msg: '公司业务',
			data: r
		})
	})

})
module.exports = router
