//1.一次性定时器
//开启
// var timer = setTimeout(() => {
// 	console.log('boom')
// }, 3000)
// //先打印1，然后3000毫秒之后，再把回调函数放入到事件队列
// console.log(1)
// //清除
// clearTimeout(timer)

//2.周期定时器
// var timer = setInterval(() => {
// 	console.log('boom')
// }, 3000)
// console.log(1)
// clearTimeout(timer)

//3.立即执行定时器
// console.log(2)
// setImmediate(() => {
// 	console.log(1)
// })
// process.nextTick(() => {
// 	console.log(4)
// })
// console.log(3)

//练习：开启周期性定时器，每隔三秒钟去打印hello，要求打印3此以后，再去清除定时器
//声明变量，用来计数
var num = 0
var timer = setInterval(() => {
	console.log('hello')
	//打印一次，数量加一
	num++
	//当数量为3，清除
	if (num === 3) {
		clearTimeout(timer)
	}
}, 1000)
