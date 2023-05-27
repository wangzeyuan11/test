# JS第4天

双色球

红球：在1~33之间随机获取6个，不能重复，进行从小到大的排序

蓝球：在1~16之间随机获取1个，可以和红球重复

要求：将获取到的7个数字放入到一个数组。

## 一、Date对象

用于项目中日期时间的存储和计算

### 创建Date对象 

```js
new Date('2023/2/27 10:40:30')
new Date(2023,1,27,10,40,30)  //第2个参数月份的值是0~11对应1~12月
new Date()   //存储的是当前操作系统的时间
new Date(1680000000000)   //存储的是距离计算机元年(1970-1-1 0:0:0)的毫秒数，会产生一个具体的日期时间    1秒 = 1000毫秒
```

### Date对象转为本地字符串

```js
toLocaleString()  //存在兼容性问题，不同的JS解释器下显示有差别，只能用于开发调试阶段
```

### 获取Date对象存储的值

```js
getFullYear()  //年
getMonth()   //月份，值是0~11，用的时候需要加1
getDate()  //日期
getHours()   //小时
getMinutes()  //分钟
getSeconds()  //秒钟
getMilliseconds()  //毫秒
getDay()   //星期，值是0~6，对应的是日~六
getTime()   //获取时间戳

Date.now()   //获取当前时间的时间戳
```

练习：创建Date对象，保存当前系统的日期时间，最后打印以下格式

'今天是xxxx年xx月xx日  xx时xx分xx秒  星期x'

```js
var d = new Date()
var year = d.getFullYear()
var month = d.getMonth() + 1
var date = d.getDate()
var hour = d.getHours()
var minute = d.getMinutes()
var second = d.getSeconds()
var day = d.getDay()  //范围0~6
// 如果秒钟小于10，在前拼接0，否则正常显示
second = second<10 ? '0'+second : second
// 创建数组，包含日~六，下标范围0~6
var arr = ['日', '一', '二', '三', '四', '五', '六']
// console.log(arr[day])
console.log(`今天是${year}年${month}月${date}日  ${hour}时${minute}分${second}秒  星期${arr[day]}`)
```

练习：计算出当前时间距离周末（2023/3/4）还有x天x时x分x秒

```js
// 创建对象，保存当前时间
var d1 = new Date()
// 获取当前时间的时间戳
// console.log(Date.now(),d1.getTime())
// 创建对象，保存周末时间
var d2 = new Date('2023/3/4')
// 计算相差的毫秒数
var d = d2.getTime() - d1.getTime()
// 把相差的单位改为秒
d = parseInt(d/1000)
// 计算相差的秒钟部分：去除含有的分钟（60秒），总的相差的秒钟%60
var second = d%60
// 计算相差的分钟部分：去除总的秒数中含有的小时(3600秒)，单位要求是分钟
var minute = parseInt(d%3600/60) 
// 计算相差的小时部分：去除总的秒数中含有的天(24*3600)，单位要求是小时
var hour = parseInt(d%(24*3600)/3600) 
// 计算相差的天部分：直接将总的秒数单位转为天(24*3600)
var day = parseInt(d/(24*3600)) 
console.log(`距离周末还有${day}天${hour}时${minute}分${second}秒`)
```

### 设置存储的值

```js
setFullYear()  //年
setMonth()   //月份，值是0~11
setDate()  //日期
setHours()   //小时
setMinutes()  //分钟
setSeconds()  //秒钟
setMilliseconds()  //毫秒
setTime()   //设置时间戳，会产生一个具体的日期时间
```

### 拷贝一个Date对象

```js
var d = new Date('2023/2/21 14:42:50')
// 拷贝一份Date对象，把一个对象作为参数传递
var d2 = new Date(d)
```

练习：创建Date对象，保存员工的**入职时间**2023/2/28，假设合同期为3年，计算出合同的**到期时间**；合同到期前一个月进行续签，计算出**续签时间**；

最后打印出以下格式

入职时间：xxxx-xx-xx..

到期时间：xxxx-xx-xx..

续签时间：xxxx-xx-xx..

## 二、数字对象

```js
new Number()   //将一个数字包装为对象，存储在了堆内存中
Number()   //将一个值转换为数字
toFixed(n)   //保留小数点后n位
```

## 三、布尔对象

```js
new Boolean()   //将一个布尔值包装为对象
Boolean()   //将一个值转换为布尔型
!!值    //将一个值隐式转换为布尔型
```

## 四、错误处理

### 常见的错误

- 语法错误(SyntaxError)：代码书写不符合语法规范，例如缺少半块括号、使用中文符号...
- 引用错误(ReferenceError)：使用了未声明的变量
- 类型错误(TypeError)：当前调用的不是一个函数类型
- 范围错误(RangeError)：当前使用的值超出了JS的规定范围
- 自定义错误：用户自己指定的错误，用于调试 

```js
throw 错误内容
```

###  错误处理

```js
try{
    // 尝试执行，可能会出现错误
}catch(err){
    // 一旦try中出现错误，就会捕获到错误，把错误信息放入到err
    // 不会阻止后续代码执行
}
```

## 五、ES6新特性

ECMA   ->   JS的标准规范   **E**CMA**S**cript   ->  ES

ES6 / ES2015      JS的第六套标准规范

### 新增声明方式    

```js
let  a = 1
```

   let声明的变量解决了提升的问题，let声明的变量不允许重复声明。

​      练习：创建函数getDays，传递任意一个日期，返回这个日期是这一年当中的第几天

​       function  getDays(){

​       }

​      getDays(2023, 2, 27)
