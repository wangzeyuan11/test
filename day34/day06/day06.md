# Node.js第6天

## 一、回顾MySQL数据库 

连接

```bash
mysql.exe -h127.0.0.1 -P3306 -uroot -p
mysql -uroot
mysql -uroot < 拖拽文件
```

对数据的增删改查

```mysql
insert into 数据表名称 values(一组值,..);
delete from 数据表名称 where 条件;
update 数据表名称 set 列名称=值, 列名称=值 where 条件;
select * from 数据表名称 where 条件 order by 排序 limit 开始的值, 数据量;
```

## 二、mysql模块

mysql模块是Node.js下专门用于操作mysql数据库的模块，属于第三方模块，需要先去下载安装。

下载安装命令

```bash
npm install mysql
```

createConnection()      创建mysql的连接对象

```
multipleStatements: true   //开启一次执行多个SQL命令
```

connect()     测试mysql连接

query(SQL命令, [要过滤的值],  回调函数)     执行SQL命令，如果有需要往SQL命令中拼接的值需要先进行过滤，最后通过回调函数来获取结果。

**SQL注入：**在让用户提供值的位置，破坏了原来的SQL命令，加入新的条件或者SQL命令。

**防止SQL注入：**先对用户提供的值进行过滤，过滤后再去拼接到SQL命令

**占位符（?）**：过滤后的值会自动替换占位符，完成拼接。

练习：假设获取到了客户端传递员工的编号，执行SQL命令，删除编号对应的员工。

### SQL命令的直接结果

| SQL命令  | 结果                                        |
| -------- | ------------------------------------------- |
| 查询命令 | 数组                                        |
| 删除命令 | 对象,  通过affectedRows属性判断是否删除成功 |
| 插入命令 | 对象                                        |
| 修改命令 | 对象，通过changedRows属性判断是否修改成功   |

### 连接池

创建连接池：可以一次创建一组连接，每次执行SQL命令，就会从连接池中获取一个连接，执行完命令以后再把连接还回去。

createPool()       创建连接池对象，默认连接数量是15

getConnection()      从连接池中获取一个连接

query()       执行SQL命令

release()     释放连接，会把连接归还到连接池





练习：使用express创建WEB服务器，设置端口；托管静态资源到public目录下，包含文件search.html，点击查询按钮，向服务器发请求 (get  /emp/search)；

创建路由器模块emp.js，添加路由(get  /search)，监听按钮的请求，最后在WEB服务器引入并挂载，添加前缀/emp；  

最后执行SQL命令查询出该姓名对应的员工，最后响应’查询成功‘

![image-20230307164720776](assets\image-20230307164720776.png)



练习：在public目录下新建添加员工网页add.html，点击提交，向服务器发请求(post  /emp/add)，服务器端获取传递的参数，执行SQL命令，将数据插入到数据库，响应’员工添加成功‘

![image-20230307180057263](assets\image-20230307180057263.png)













