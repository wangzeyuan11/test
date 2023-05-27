//路由器模块
//引入express模块
const express = require('express')
//创建路由器对象
const router = express.Router()
//添加路由
//删除用户路由(get/delete)
router.get('/delete', (req, res) => {
	res.send('用户删除成功')
})

//将路由器暴露出去
module.exports = router
