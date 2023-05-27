// 引入mysql模块
const mysql = require('mysql')
// 创建mysql的连接对象,需要提供连接所需要的参数
const connection = mysql.createConnection({
	host: '127.0.0.1',
	port: '3306',
	user: 'root',
	password: '',
	database: 'tedu', //连接后要进入的数据库
	// 开启一次执行多个SQL命令
	multipleStatements: true
})
// 测试连接
// connection.connect()
/* 
// 执行SQL命令，会自动建立连接
// 是异步方法，通过回调函数获取结果
connection.query('select * from dept',(err, r) => {
	// err 可能产生的错误结果
	if(err) {
		throw err
	}
	// r 成功的结果
	console.log(r)
})

// 假设已经从客户端获取了一个员工的姓名，执行SQL命令，查询出该员工的这条数据。
var str = 'xxx" || "1'
// 'select * from emp where ename="xxx" || "1"'
connection.query(`select * from emp where ename="${str}"`, (err, r) => {
	if(err) {
		throw err
	}
	console.log(r)
})


// 防止SQL注入：先把用户提供的值进行过滤，过滤后再去拼接
var str = 'tom'
connection.query(
	// ? 占位符，过滤后要替换的位置
	`select * from emp where ename=?`,
	[str],  //数组中的值就会被mysql模块进行过滤
	(err, r) => {
		if(err) {
			throw err
		}
		console.log(r)
})

// 练习：假设获取到了客户端传递员工的编号，执行SQL命令，删除编号对应的员工。
var id = '13'
connection.query('delete from emp where eid=?', [id] ,(err, r) => {
	if(err) {
		throw err
	}
	// r代表SQL命令执行成功的结果，格式为对象；如果对象下的属性affectedRows值为0说明删除失败，否则就是删除成功
	console.log(r)
	if(r.affectedRows === 0) {
		console.log('删除失败')
	} else {
		console.log('删除成功')
	}
	
})

// 练习：假设获取了客户端传递过来的一条员工的数据，格式为对象，包含的属性有姓名、性别、生日、工资、所属部门编号；执行SQL命令，将这条数据插入到数据库
var obj = {
	ename: '新哥',
	sex: '1',
	birthday: '1982-8-9',
	salary: '48890',
	deptid: '30'
}
// 执行SQL命令，插入数据
connection.query('insert into emp values(null,?,?,?,?,?)', [obj.ename, obj.sex, obj.birthday, obj.salary, obj.deptid], (err, r) => {
	if(err) {
		throw err
	}
	console.log(r)
})


var obj = {
	//birthday: '1982-8-9',
	//salary: '48890',
	//sex: '1',
	ename: '新哥3',
	deptid: '20'
}
connection.query('insert into emp set ?', [obj], (err, r) => {
	if(err) {
		throw err
	}
	console.log(r)
})

// 练习：假设已经获取到了客户端传递的要修改的员工数据，格式为对象，包含的属性有编号、姓名、性别、生日、工资、所属部门编号；执行SQL命令，修改编号对应的这个员工。
var obj = {
	eid: '2',
	ename: '新333',
	sex: '1',
	birthday: '1999-5-1',
	salary: '20009',
	deptid: '10'
}
// 
connection.query('update emp set ? where eid=?', [obj, obj.eid], (err, r) => {
	if(err) {
		throw err
	}
	console.log(r)
	// SQL命令执行成功的结果是对象，如果对象下的changedRows属性值为0说明修改失败，否则修改成功
	if(r.changedRows === 0) {
		console.log('修改失败')
	} else {
		console.log('修改成功')
	}
	
})
 */

// 一次执行多个SQL命令
connection.query('select * from dept; select * from emp', (err, r) => {
	if(err) {
		throw err
	}
	console.log(r)
})

