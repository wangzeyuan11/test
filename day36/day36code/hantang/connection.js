//引入mysql模块
const mysql = require('mysql')
//创建连接对象
const connection = mysql.createConnection({
	host: '127.0.0.1',
	port: '3306',
	user: 'root',
	password: '',
	database: 'hantang',
	multipleStatements: true
})
//暴露连接对象
module.exports = connection;
