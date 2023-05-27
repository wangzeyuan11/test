// index.js

// 关于开发环境:
// - 目前每次修改代码,都要手动执行 编译命令
// - webpack提供了监听模式, 自动监听页面的内容变化, 进行编译
// 需要在 package.json 中进行配置启动的脚本

// 关于开发服务器: webpack提供了热更新服务器
// npm i webpack-dev-server
// 执行命令: npm run start  启动服务器
// 特点: 比 live server 插件提供的服务器, 给出更多的报错提示. 辅助程序员写出更好的代码
// 从4阶段开始, 都会使用 webpack 自带的服务器来进行开发

// index.html 生成的插件
// npm i html-webpack-plugin

// ES6模块引入语法, 和 const $ = require('jquery') 作用一致
// 仅仅语法有所不同 
import $ from 'jquery'

$('h1').css('color', 'blue')

$('body').append(
  `<p>Hello !!</p>`
)