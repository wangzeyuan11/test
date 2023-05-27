// index.js
// 模块化语法: Node.js环境下提供的, 浏览器不支持
// 允许在JS文件中, 引入来自其他JS的模块
// webpack: 能够自动把 模块化语法转为普通的浏览器支持的脚本
// 执行命令: npx webpack
// 效果: 把 jQuery脚本的代码 和 当前文件的代码合并在一起, 存储在main.js中

// 安装jquery模块: npm i jquery
const $ = require('jquery')
const axios = require('./axios')

// 在js中引入外部的css文件
// webpack基础功能仅能打包JS类型的文件, 如果要操作其他类型文件, 则比如使用对应的 加载器- loader
// 1. 安装加载器模块: npm i css-loader style-loader
import './my.css'
// npm i sass-loader sass
import './my.scss'

// 图片类型的文件: 需要特殊配置后才能加载,  默认已经集成了加载器, 只要配置即可
import bigskin4 from './bigskin-4.jpg';
const img = new Image(200, 140)
img.style.border = '3px solid red'
img.src = bigskin4
$('body').append(img)

$('h1').css('color', 'red')

var url = 'https://api.xin88.top/car/news.json'
// 传统开发时, 如果使用来自外部脚本中的内容, 没有代码提示
// 但是在 模块化开发时, 会给出提示!  -- 重大升级
axios.get(url).then(res => res.json()).then(data => {
  console.log(data)
})

// 编译后, main.js 会自动更新