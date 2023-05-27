const erxpress = require('express')
const connection = require('../connection')
const router = erxpress.Router()

router.post('/', (req, res, next) => {
	//获取post传递的参数
	var obj = req.body
	console.log(obj)
	//把当前时间的时间戳添加进去
	obj.ctime = Date.now()
	//执行sql命令
	connection.query('insert into ht_cooperate set ?', [obj], (err, r) => {
		if (err) {
			return next(err)
		}
		console.log(r)
		res.send({
			code: 200,
			msg: '留言成功'
		})
	})
})

module.exports = router
