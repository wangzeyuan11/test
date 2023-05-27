//引入mysql模块
const mysql = require('mysql')
//创建mysql的连接对象,需要提供连接所需要的参数
const connection = mysql.createConnection({
	host: '127.0.0.1',
	port: '3306',
	user: 'root',
	password: '',
	database: 'tedu', //连接后要进入的数据库
	//开启一次执行多个sql命令
	multipleStatements: true
})
//测试连接
//这句话可以省略
// connection.connect()

//执行SQL命令的同时，会自动建立连接
// 是异步方法，通过回调函数获取结果
// connection.query('select * from dept', (err, r) => {
// 	// err 可能产生的错误
// 	if (err) {
// 		throw err
// 	}
// 	//r 成功的结果
// 	console.log(r)
// })

//假设已经从客户端获取了一个员工的姓名,执行SQL命令，查询出改员工的命令
// var str = 'tom"||"  1'
// // ('select * from emp where ename = + "tom" || "1"	'
// connection.query(`select * from emp where ename ="${str}"`, (err, r) => {
// 	if (err) {
// 		throw err
// 	}
// 	console.log(r)
// })

//防止sql注入:先把用户提供的值进行过滤，过滤后再去拼接
// var str = 'tom'
// // ('select * from emp where ename = + "tom" || "1"	'
// //?是占位符
// connection.query(`select * from emp where ename =?`,
// 	[str], (err, r) => {
// 		if (err) {
// 			throw err
// 		}
// 		console.log(r)
// 	})

// var arr = '13'
// connection.query('delete from emp where eid = ?',
// 	[arr], (err, r) => {
// 		if (err) {
// 			throw err
// 		}
// 		//r sql命令执行成功的结果,格式为对象;如果对象下的属性affectedRows值为0说明删除失败，否则就是删除成功
// 		if (r.affectedRows === 0) {
// 			console.log('删除失败')
// 		} else {
// 			console.log('删除成功')
// 		}
// 	}
// )

// var obj = {
// 	ename: '新歌',
// 	sex: '1',
// 	birthday: '1996-05-05',
// 	salary: '6000',
// 	deptid: '30'
// }
//执行sql命令
// connection.query('insert into emp values(null,?,?,?,?,?)', [obj.ename, obj.sex, obj.birthday, obj.salary, obj.deptid],
// 	(err, r) => {
// 		if (err) {
// 			throw err
// 		}
// 		console.log(r)
// 	}) */
// connection.query('insert into emp set ?', [obj], (err, r) => {
// 	if (err) {
// 		throw err
// 	}
// 	console.log(r)
// })

//练习：修改员工数据
// var obj = {
// 	eid: '2',
// 	ename: 'y',
// 	sex: '0',
// 	birthday: '1996-05-05',
// 	salary: '6000',
// 	deptid: '40'
// }
// connection.query('update emp set ? where eid =?', [obj, obj.eid], (err, r) => {
// 	if (err) {
// 		throw err
// 	} else if (r.changedRows === 1) {
// 		console.log('修改成功')
// 	} else {
// 		console.log('修改失败')
// 	}
// console.log(r);
// })

//一次执行多个sql命令
connection.query('select * from dept; select * from emp', (err, r) => {
	if (err) {
		throw err
	}
	console.log(r)
})
