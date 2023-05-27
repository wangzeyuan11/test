//假设已经获取到了客户端请求过来的URL
//var str = 'https://www.jd.com/product.html?kw=手机&a=1'
//从中获取url中的各部分
//将url转为对象
//var obj = new URL(str)
//获取查询参数,参数名对应的值
//var qs = obj.searchParams

//console.log(qs.get('kw'))
//console.log(qs)
var a = 'https://www.tmooc.cn/course/web.html?cid=2212&cname=Nodejs'
var b = new URL(a)
var c = b.searchParams
//console.log(c)
//console.log(b)
console.log(`
	班级名称: WEB${c.get('cid')}  课程名称：${c.get('cname')}
`)
