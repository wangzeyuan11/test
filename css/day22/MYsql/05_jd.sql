drop database if exists jd;
create database jd;
use jd;
create table student(
	id int,
	name varchar(5),
	age varchar(10),
	chengji int
);
insert into student value(1,'王泽源','1996,04,29',100);
insert into student value(2,'聂彤','1998,02,19',90);
insert into student value(3,'聂彤王','1996,05,29',60);

delete from student where id=1;

update student set name='yuan',chengji=10 where id=3;
