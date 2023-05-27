set names utf8;
drop database if exists hantang;
create database hantang charset=utf8;
use hantang;
create table category(
id int primary key auto_increment,
cpname varchar(16) unique
);
insert into category values(10,'公司动态');
insert into category values(20,'产品咨询');
insert into category values(30,'业界咨询');
-- 让类别名称使用默认值
insert into category values(40,default);

create table news(
id int primary key auto_increment,
biaoti varchar(20) not null,
-- 给列设置默认值
laiyuan varchar(20) default '央视网',
itime date,
xiangqing varchar(10240) default '央视网',
lid int,
-- 将lid设置为外键约束，插入的值必须在category的主键列cid出现过
foreign key(lid) references category(id)
);
insert into news value(null,'可乐不好喝','新闻1','2023-02-20','不好喝',10);
insert into news value(null,'可乐好喝','新闻2','2023-02-20','好喝',20);
insert into news value(null,'可乐好不好喝',default,default,default,30);
insert into news(id,biaoti) values(null,'新闻5');