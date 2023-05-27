//引入文件系统模块
const fs = require('fs')
// console.log(fs)

//查看一个文件的状态
//同步执行
// var s = fs.statSync('../day02')
// console.log(s)
// //是否为文件
// console.log(s.isFile())
// //是否为目录
// console.log(s.isDirectory())

//异步执行
//会在一个新的线程执行
// fs.stat('homwkork.html', (err, r) => {
// 	//err参数，表示可能产生的错误
// 	if (err) {
// 		throw err
// 	}
// 	// r 成功的结果
// 	console.log(r)
// })
//写入文件
//如果文件不存在会创建文件
// fs.writeFileSync('1.txt', 'a')
//异步
// fs.writeFile('2.txt', 'b', (err) => {
// 	if (err) {
// 		throw err
// 	}
// 	console.log('写入成功')
// })

// fs.appendFileSync('3.txt', 'a\n')
// fs.appendFile('4.txt', 'b\n', (err) => {
// 	if (err) {
// 		throw err
// 	}
// 	console.log('追加写入成功')
// })
// 练习：创建一个数组，包含一组姓名，遍历数组获取到每个姓名，将姓名写入到文件data.txt
//使用异步方法写入
// var a = ['王泽源', '聂彤', '王彤', '聂源']
// for (var i = 0; i < a.length; i++) {
// 	// b = a[i]
// 	// console.log(b)
// 	fs.appendFile('data.txt', a[i] + '\n', (err) => {
// 		if (err) {
// 			throw err
// 		}
// 		console.log('写入成功')
// 	})
// }

//读取文件
//同步
// var data = fs.readFileSync('1.txt')
// console.log(data)
//异步
// fs.readFile('1.txt', (err, r) => {
// 	if (err) {
// 		throw err
// 	}
// 	console.log(r)
// })
//删除文件
// fs.unlinkSync('1.txt')
//异步删除2.txt
// fs.unlink('2.txt', (err) => {
// 	if (err) {
// 		throw err
// 	}
// 	console.log('删除成功')
// })
//检测文件是否存在
// console.log(fs.existsSync('3.txt'))
//练习：如果文件3.txt存在，则删除文件

if (fs.existsSync('3.txt')) {
	fs.unlinkSync('3.txt')
}
console.log('删除')


if (fs.existsSync('4.txt')) {
	console.log(fs.readFileSync('4.txt').toString())
}
console.log('读取')

console.log('结束')
