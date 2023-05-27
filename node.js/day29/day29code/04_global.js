var a = 1 //局部变量

function fn() { //局部函数
	return 3
}

console.log(global.a) //undifined
console.log(global.fn)
