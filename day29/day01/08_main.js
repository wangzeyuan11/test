// 引入功能模块
// 同一级路径  ./
// 引入成功一个模块后，得到的是另一个模块暴露的对象
var obj = require('./08_2.js')
console.log(obj)
console.log(obj.myA)
// 调用暴露的函数
console.log(obj.myFn())
console.log(obj.myAdd(10,30))