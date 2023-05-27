var b = new Date()
var c = new Date()
var year = b.getFullYear()
var month = b.getMonth() + 1
var day = b.getDate()
var hour = b.getHours()
var minute = b.getMinutes()
var second = b.getSeconds()

var a = setInterval(() => {
	console.log(`当前时间：${year}年${month}月${day}日${hour}:${minute}:${second}`)
}, 1000)
