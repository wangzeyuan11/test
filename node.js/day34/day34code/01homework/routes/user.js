//1引入express模块
const express = require('express')
//2创建路由器对象
const router = express.Router()
//3添加路由
//用户注册(post /myreg)
router.post('/myreg', (req, res) => {
	//获取post传递的参数
	console.log(req.body)
	res.send('注册成功！欢迎：' + req.body.yh)
})
//4暴露路由器对象
module.exports = router
