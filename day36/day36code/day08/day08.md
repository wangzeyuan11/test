# Node.js第8天

## 一、使用express项目生成器搭建项目(脚手架)

文档：https://www.expressjs.com.cn/starter/generator.html

### 生成项目

```bash
npx express-generator
```

   npx会临时安装一个包，使用完会自动卸载

```bash
npm install
```

  会安装package.json中记录的依赖包 

```bash
npm start
```

  启动项目，运行的是package.json中scripts下start对应的命令

  或者     node    bin/www

  启动后服务器占用的端口是3000



  练习：编写关于汉唐路由器about.js，创建路由器对象，添加路由，暴露路由器对象；

  路由中编写(公司简介/董事长致辞)接口(get   /)，传递编号(1/2)，响应{code: 200, msg: '关于汉唐', data: 查询的数据}        ht_about

  在WEB服务器下引入关于汉唐路由器，进行挂载，添加前缀/v1/about

  最后使用Apipost创建项目，并测试接口

   练习：编写公司大事件接口(get  /event)，执行SQL命令，查询出数据表ht_event中所有的数据，最后响应  {code: 200, msg: '公司大事件', data: 数据}

   练习：编写旗下公司接口(get  /member)，执行SQL命令，查询出数据表ht_member中所有的数据，最后响应{code: 200, msg: '旗下公司', data: 数据}

   练习：编写新闻中心路由器news.js，创建路由器对象，添加路由，暴露路由器对象；  

   编写新闻类别列表接口(get   /cat)，查询数据表ht_cat中所有的数据，最后响应{code: 200, msg: '新闻类别', data: 数据}

   在WEB服务器下引入并挂载，添加前缀/v1/news



练习：编写新闻列表接口(get  /list)，get传递新闻类别编号、当前的页码、每页的数据量；获取传递的参数，执行SQL命令，查询出这一页的数据。最后响应

{code: 200, msg: '新闻列表', data: 这一页数据,  total: 这个类别总数据量}



select nid,title,ctime from ht_news where cat_id=传递类别编号  limit  开始查询的值, 每页的数据量;

select count(*) as n from ht_news where cat_id=传递的类别编号



## 二、pm2

是Node.js的进程管理器，可以简化node任务管理

### 1.特征：

   自动重新启动

   后台运行

   服务信息查看

   最大内存重启....

###  2.安装

   pm2属于Node.js下的第三方模块

   全局安装pm2

```bash
npm install -g pm2
```

   查看是否安装了pm2 

```bash
pm2 -v
```

  使用pm2启动一个node项目

  --watch  监听程序源文件的编号，一旦发生变化会自动重启(热启动)

```bash
pm2 start 项目的启动文件  --name 自定义名称  --watch 
```

 查看当前node进程列表

```bash
pm2 list
```

 停止一个node进程

```bash
pm2 stop [进程名] | [进程id]
```

重启进程

```bash
pm2 restart [进程名] | [进程id]
```

删除进程

```bash
pm2 delete [进程名] | [进程id]
```

查看日志

```bash
pm2 logs       所有日志
pm2 logs  [进程名] | [进程id]
```





课后练习：

  编写公司业务路由器busi.js，添加接口(get  /)，get传递参数，返回对应的业务

​       挂载添加前缀 /v1/busi

  编写企业文化路由器culture.js，添加接口(get  /)，get传递参数，返回对应的文化

​     挂载添加前缀 /v1/culture
