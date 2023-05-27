//引入文件系统模块
const fs = require('fs')
//以流的方式读取文件
var rs = fs.createReadStream('20221211164552.png')
//创建一个写入的流，可以流的方式写入文件
var ws = fs.createWriteStream('1.jpg')
//将读取的流添加到写入的流
rs.pipe(ws)


//绑定事件，监听是否有数据流入到内存
// rs.on('data', (c) => {
// 	//c代表每次所读取流入的数据
// 	console.log(c)
// })

// btn.onclick = function(){

// }
