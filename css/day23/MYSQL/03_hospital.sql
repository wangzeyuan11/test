set names utf8;
drop database if exists hospital;
create database hospital charset=utf8;
use hospital;
create table medicine(
id int primary key auto_increment,
yname varchar(10) unique,
guige varchar(20) not null,
danwei varchar(2),
gongxiao varchar(20)
);
insert into medicine value(1,'阿莫西林胶囊','0.25g*24片','盒','抗微生物药物');
insert into medicine value(2,'阿莫林胶囊','0.25g*24片','盒','抗微生物药物');
insert into medicine value(3,'阿莫西胶囊','0.25g*24片','盒','抗微生物药物');
insert into medicine value(null,'阿莫西胶囊1','0.25g*24片','盒','抗微生物药物');
insert into medicine value(null,'阿莫西胶囊2','0.25g*24片','盒','抗微生物药物');
insert into medicine value(null,'阿莫西胶囊3','0.25g*24片','盒','抗微生物药物');