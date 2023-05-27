const express = require('express')
const routed = express.Router()
routed.post('/myreg', (req, res) => {
	res.send('成功')
})
module.exports = routed
