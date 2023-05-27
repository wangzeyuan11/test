//ES6(ES2015)中提供的代码
//兼容性问题：这些语法无法适配2016年之前的浏览器

//babel:https://www.babeljs.cn
//可以把ES6+ 的代码降级为ES5即ES2009的代码格式
//npm i babel-loader @babel/core @babel/preset-env
//在配置文件中进行加载

var url = 'https://api.xin88.top/car/news.json'

fetch(url).then(res=>res.json()).then(data=>{
  console.log(data);
})

////////////////////
class Emp{ 
  constructor(ename,age){
    this.ename = ename
    this.age = age
  }
}

var emp1 = new Emp('凯凯',22)
console.log({emp1});