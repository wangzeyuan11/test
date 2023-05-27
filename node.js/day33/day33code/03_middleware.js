const express = require('express')
const app = express()
app.listen(3000)

// function fn(req, res, next) {
// 	// console.log('拦截了对/list的请求')
// 	//获取get传递的参数
// 	console.log(req.query)
// 	//验证用户的身份是否为管理员
// 	//如果不是管理员root
// 	if (req.query.token !== 'root') {
// 		res.send('请提供管理员身份')
// 	} else {
// 		//否则是管理员,往后继续执行，可能是下一个中间键或者是路由
// 		next()
// 	}

// }

// function foo(req, res, next) {
// 	console.log('拦截了所有的请求')
// 	//往后执行
// 	next()
// }
//添加一个全局的中间件，拦截所有路由的请求
// app.use(foo)

//添加中间件，拦截对/list的请求,一旦拦截会调用函数fn
// app.use('/list', fn)

// app.get('/list', (req, res) => {
// 	res.send('这是所有后台数据，只有管理员有权限')
// })

//添加中间件，拦截对/add的请求，验证用户的身份
// app.use('/add', fn)
// //添加路由(get/add),响应'药品添加成功'
// app.get('/add', (req, res) => {
// 	res.send('药品添加成功')
// })

//练习：添加路由(get/shopping),用于将商品放入购物车，传递商品的总价；添加中间件，拦截对/shopping的请求，
//传递的总价满300减50；最后在路由中间响应‘商品的总价XXX
function discount(req, res, next) {
	// console.log('拦截了/shopping的请求')
	//获取get传递的参数
	console.log(req.query)
	//满300-50
	if (req.query.total >= 300) {
		req.query.total -= 50
	}
	//往后执行
	next()
}
//中间件
app.use('/shopping', discount)

app.get('/shopping', (req, res) => {
	//获取get传参
	console.log(req.query)

	res.send('商品的总价：' + req.query.total)
})
