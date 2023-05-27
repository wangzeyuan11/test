drop database if exists xz;
create database xz;
use xz;
create table user(
	id int,
	uname varchar(5),
	upwd varchar(15),
	eml varchar(20),
	phone varchar(15),
	zname varchar(4),
	sfzx varchar(1),
	zcsj varchar(10)
);
insert into user value(1,'wzy','199604','809417558@qq.com','13689826557','王泽源','是','2023.02.18');
insert into user value(2,'wzys','199804','809217558@qq.com','13689826547','泽源','是','2023.02.18');
insert into user value(3,'wzy','199704','809317558@qq.com','13689826357','王源','是','2023.02.18');
delete from user where id=2;
update user set uname='nt',upwd='2001.02.19',eml='809918778@qq.com',phone='15555555555',zname='聂彤' where id=3;