const express = require('express')
const adpRouter = require('./routes/adp')
const app = express()
app.listen(3000)
app.use(express.static('public'))
app.use(express.urlencoded({
	extended: true
}))
app.use('/emp', adpRouter)
