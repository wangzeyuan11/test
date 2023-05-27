const express = require('express')
const routed = express.Router()
routed.get('/update', (req, res) => {
	res.send('药品响应成功')
})
module.exports = routed
