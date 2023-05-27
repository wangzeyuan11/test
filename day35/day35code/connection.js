//引入musql模块
const mysql = require('mysql')
//创建连接对象
const connection = mysql.createConnection({
	host: '127.0.0.1',
	port: '3306',
	user: 'root',
	password: '',
	database: 'tedu',
	multipleStatements: true //开启一次执行多个sql命令
})
module.exports = connection
