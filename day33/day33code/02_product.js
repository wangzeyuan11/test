const express = require('express')
const route = express.Router()
route.get('/update', (req, res) => {
	res.send('商品修改成功')
})
route.get('/delete', (req, res) => {
	res.send('商品删除成功')
})
module.exports = route
