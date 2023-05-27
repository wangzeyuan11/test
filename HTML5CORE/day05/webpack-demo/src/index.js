// index.js

//关于开发环境:
//目前每次修改代码 都要手动智行 编译命令
//webpack提供了监听模式 自动监听页面的内容变化 进行编译
//需要在package.json配置脚本

//关于开发服务器 webpack提供了热更新服务器
//npm i webpack-dev-server

//index.html生成的插件
//npm i html -webpack-plugin

//ES6模块引入语法 和const $ = require('jquery)作用一致
//仅仅语法有所不同
import $ from 'jquery'

$('h1').css('color','blue')

$('body').append(
    `<p>Hello !!</p>`
)