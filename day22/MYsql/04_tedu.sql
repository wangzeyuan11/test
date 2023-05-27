drop database if exists tedu;
create database tedu;
use tedu;
create table emp(
	num int,
	uname varchar(3),
	xb varchar(1),
	phone varchar(11)
);
insert into emp value(1,'聂彤','女',13689888888);
insert into emp value(2,'王泽源','男',13688888888);
insert into emp value(3,'王彤','女',13888888888);


-- 删除数据
delete from emp where num=2;
-- 修改
update emp set uname='ming',phone = 19988888888 where num=3;