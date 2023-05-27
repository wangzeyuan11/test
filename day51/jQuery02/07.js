//07.js

//防御性编程：通常出现在多人协作 开发场景中
//需要提前预判 使用者 有可能出现的问题 提前预案

//预判：使用此js文件的人，有可能在head中引入，导致代码无法查询到DOM元素
//解决：监听 DOM元素加载完毕的时候，在调用代码
//DOMContentLoaded:DOM的内容加载完毕时触发
addEventListener('DOMContentLoaded',function(){
//问题：在.js中书写jQuery代码，没有提示！
//解决：借助node.js的环境，来提供代码提示
$('ul').css('border','2px solid gray')
//划线：代表被抛弃 不推荐使用 这里是误报
$('li').click(function(){
    alert('111')
})
})

//jQuery做了封装，简化上方的写法：
$(function(){
    $('ul').css('background-color','orange')
})

//$(实参)：函数重载有三种情况
//字符串：当做css选择器 进行元素查找
//元素：封装成jquery类型的对象
//函数：在dom元素加载完毕后 在调用
