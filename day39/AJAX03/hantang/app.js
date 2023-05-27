var express = require('express');
var path = require('path');
var logger = require('morgan');
const cors = require('cors')

// 引入路由器
var indexRouter = require('./routes/index');
// 引入关于汉唐路由器
const aboutRouter = require('./routes/about')
// 引入新闻中心路由器
const newsRouter = require('./routes/news')
// 引入公司业务路由器
const busiRouter = require('./routes/busi')
// 引入企业文化路由器
const cultureRouter = require('./routes/culture')
// 引入合作交流路由器
const coopRouter = require('./routes/coop')
// 引入招贤纳士路由器
const jobRouter = require('./routes/job')

// 创建WEB服务器
var app = express();

// 使用cors解决跨域
app.use(cors())
// 记录日志
app.use(logger('dev'));
// 将post传参过程中的json转为对象
app.use(express.json());
// 将post传参转为对象
app.use(express.urlencoded({ extended: true }));
// 托管静态资源，使用了绝对路径
app.use(express.static(path.join(__dirname, 'public')));
// 挂载路由器
app.use('/v1', indexRouter);
app.use('/v1/about', aboutRouter)
app.use('/v1/news', newsRouter)
app.use('/v1/busi', busiRouter)
app.use('/v1/culture', cultureRouter)
app.use('/v1/coop', coopRouter)
app.use('/v1/job', jobRouter)

// 错误处理中间件
app.use(function(err, req, res, next) {
  // 打印错误信息
	console.log(err)
	res.send({code: 500, msg: '服务器端错误'})
});

module.exports = app;
