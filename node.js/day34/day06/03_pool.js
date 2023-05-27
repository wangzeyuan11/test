// 引入mysql模块
const mysql = require('mysql')
// 创建连接池对象，包含一组连接
const pool = mysql.createPool({
	host: '127.0.0.1',
	port: '3306',
	user: 'root',
	password: '',
	database: 'tedu',
	connectionLimit: 15  //设置连接池的数量
})
// 获取一个连接，通过回调函数来获取
pool.getConnection((err, connection) => {
	// err 可能获取失败的结果
	if(err) {
		throw err
	}
	// connection  成功获取的结果
	// 使用连接执行SQL命令
	connection.query('select * from dept', (err, r) => {
		if(err) {
			throw err
		} 
		console.log(r)
		// 把连接归还到连接池
		connection.release()
	})
})