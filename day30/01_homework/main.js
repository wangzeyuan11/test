//引入同一级目录下的circle.js
var circle = require('./circle.js')
console.log(circle)
//调用所暴露的函数
// console.log(circle.myArea(5).toFixed(2))
// console.log(circle.myLen(5).toFixed(2))
console.log(circle(5).toFixed(2))
