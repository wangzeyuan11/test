console.log('引入了功能模块')

var a = 1

function fn() {
	return 2
}
//创建一个函数，传递任意两个数字，返回总和；将这个函数暴露出去；最后在主模块下去调用

function add(a, b) {
	return a + b
}


//每个模块中都有一个暴露的对象,默认是空对象
//如果想让外部使用哪一个功能，就需要把它放入到暴露对象中
module.exports = {
	myA: a,
	//练习：把函数名字暴露出来
	myB: fn,
	myAdd: add
}
