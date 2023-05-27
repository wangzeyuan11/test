-- 设置客户端连接服务器端的编码
set names utf8;
-- 删除数据库，如果存在的话
drop database if exists hantang;
-- 创建新的数据库，设置存储字符的编码
create database hantang charset=utf8;
-- 进入数据库
use hantang;
-- 创建保存新闻类别的表
create table category(
	cid int primary key auto_increment,
	cname varchar(16) unique
);
-- 插入数据
insert into category values(10,'公司动态');
insert into category values(20,'产品资讯');
insert into category values(30,'业界资讯');
-- 让类别名称使用默认值
insert into category values(40,default);

-- 创建保存新闻数据的表
create table news(
	nid int primary key auto_increment,
	title varchar(64) not null,
	-- 给列设置默认值 
	origin varchar(16) default '央视网',
	ctime datetime default '2023-2-21 10:23:40',
	detail varchar(10240),
	cate_id int,
	-- 将cate_id设置为外键约束，插入的值必须在category的主键列cid出现过
	foreign key(cate_id) references category(cid)
);
-- 插入数据
insert into news values(null,'新闻1','新京报','2023-2-20 12:30:40','详情1',20);
insert into news values(null,'新闻2','央视网','2023-2-19 23:15:40','详情2',30);
insert into news values(null,'新闻3','新浪娱乐','2023-1-1 5:30:20','详情3',10);
-- 练习：往新闻表中插入数据，只给编号和标题提供具体值，其它的列使用默认值
-- default会使用列的默认值
insert into news values(null,'新闻4',default,default,default,default);
-- 只是给某些列提供值，没有出现的列使用默认值
insert into news(nid,title) values(null,'新闻5');

