/* 
console.log(1)  //输出日志
console.info(2)  //输出消息
console.warn(3)  //输出警告
console.error(4)  //输出错误
 */


// 开始计时
console.time('for')
for(var i=1; i<=100000; i++) {
	
}
// 结束计时
console.timeEnd('for')



console.time('while')
var j=1;
while(j<=100000) {
	j++
}
console.timeEnd('while')

console.time('do-while')
var k=1
do {
	k++
} while(k<=100000)
console.timeEnd('do-while')
