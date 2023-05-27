var a = 1  //局部变量
function fn() {  //局部函数
	return 2
}

console.log(global.a) //undefined
console.log(global.fn)