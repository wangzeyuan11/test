//引入mysql
const mysql = require('mysql')
//创建连接池对象，包含一组连接
const pool = mysql.createPool({
	host: '127.0.0.1',
	port: '3306',
	user: 'root',
	password: '',
	database: 'tedu',
	connectionLimit: 15 //设置连接池的数量
})
//获取一个连接
pool.getConnection((err, connection) => {
	//err 可能获取失败的结果
	if (err) {
		throw err
	}
	// connection 获取执行成功的结果
	//使用这个连接去执行sql命令
	connection.query('select * from dept', (err, r) => {
		if (err) {
			throw err
		}
		console.log(r)
		//把连接归还到连接池
		connection.release()
	})
})
