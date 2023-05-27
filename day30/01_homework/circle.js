//创建函数，传递半径返回面积
function area(r) {
	return Math.PI * Math.pow(r, 2)
}
//创建函数，传递半径返回周长
function len(r) {
	return 2 * Math.PI * r
}
var person = {
	name: '新',
	sex: '男'
}
//将函数暴露出去，外部才能够使用
// module.exports = {
// 	myArea: area,
// 	myLen: len,
// 	myPer: person
// }
module.exports = area
//局部常量
console.log(__dirname) //绝对路径
console.log(__filename) //绝对路径加模块名称
