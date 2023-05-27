//模块化语法：Node.js环节下提供的，浏览器不支持
//允许在JS文件中，引入来自其他JS的模块
//webpack:能够自动把模块化语法转为普通的浏览器支持的脚本
//执行命令：npx webpack
//效果：把jQuery脚本的代码 和 当前文件的代码合并在一起 存储在main.js中

//安装jquery模块：npm i jquery
const { data } = require('jquery')
const $ = require('jquery')
const axios = require('./axios')

//在js中引入外部css文件
//webpack基础功能仅能打包JS类型的文件，如果要操作其他类型文件，则必须使用对应的加载器- loader
//1.安装加载器模块：npm i css-loader
import './my.css'

import './my.scss'

//图片类型的文件：需要特殊配置后才能加载 只要配置即可
import r01 from './r01.jpg'
const img = new Image(200,140)
img.style.border = '3px solid red'
img.src = r01
$('body').append(img)

$('h1').css('color','red')

var url = 'https://api.xin88.top/car/news.json'
//传统开发时,如果使用来自外部脚本中的内容,没有代码提示
//但是在模块化开发时 会给出提示！ --重大升级
axios.get(url).then(res=>res.json()).then(data=>{
    console.log(data);
})
//编译后，main.js会自动更新