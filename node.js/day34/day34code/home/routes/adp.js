const express = require('express')
const connection = require('../connection')
const router = express.Router()
router.post('/add', (req, res) => {
	var obj = req.query
	console.log(obj)
	connection.query('select * from emp where ename =?', [obj.ename], (err, r) => {
		if (err) {
			throw err
		}
		console.log(r)
	})
	res.send('查询成功')
})
module.exports = router
