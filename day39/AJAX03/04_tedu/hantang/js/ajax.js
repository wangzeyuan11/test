//声明变量，用于保存服务器地址
var baseURL = 'http://127.0.0.1:3000'

//封装post请求
function post(obj) {
	//obj.type 接口的请求方式
	//obj.url 传递过来的地址
	//obj.data 接口传递的参数，对象格式，需要转化为查询参数格式 a=1&b=2
	//obj.success 函数，成功以后会调用
	var arr = []
	for (var k in obj.data) {
		//k代表属性名 obj[k]代表属性值
		// console.log(k + '=' + obj[k])
		arr.push(k + '=' + obj.data[k])
	}
	//数组转字符串，元素之间用&分割
	var str = arr.join('&')
	console.log(str)
	//1.创建HTTP请求对象
	var xhr = new XMLHttpRequest()
	//2.打开服务器的连接，设置请求的接口
	xhr.open(obj.type, baseURL + obj.url)
	//3.发送请求
	//设置请求头中的内容类型
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
	//将参数放入到请求体
	xhr.send(str)
	//4.绑定事件，监听服务器端响应
	xhr.onload = function() {
		//将响应的结果JSON转为JS，然后在传到外部
		obj.success(JSON.parse(xhr.responseText))
	}
}
//封装get请求
function get(obj) {
	//obj.type 接口的请求方式
	//obj.url 传递过来的地址
	//obj.data 接口传递的参数，对象格式，需要转化为查询参数格式 a=1&b=2
	//obj.success 函数，成功以后会调用
	var arr = []
	for (var k in obj.data) {
		//k代表属性名 obj[k]代表属性值
		// console.log(k + '=' + obj[k])
		arr.push(k + '=' + obj.data[k])
	}
	//数组转字符串，元素之间用&分割
	var str = arr.join('&')
	console.log(str)
	//1.创建HTTP请求对象
	var xhr = new XMLHttpRequest()
	//2.打开服务器的连接，设置请求的接口
	xhr.open(obj.type, baseURL + obj.url + '?' + str)
	//3.发送请求
	xhr.send()
	//4.绑定事件，监听服务器端响应
	xhr.onload = function() {
		//将响应的结果JSON转为JS，然后在传到外部
		obj.success(JSON.parse(xhr.responseText))
	}
}
