set names utf8;
drop database if exists  xuezi;
create database xuezi charset=utf8;
use xuezi;
create table laptop(
lid int,
title varchar(32) primary key,
pic varchar(320),
price decimal(7,2) not null,
ctime date unique,
tj boolean,
kucun smallint
);
insert into laptop value(1,'菠萝手机','img/3.jpg',1699,'2023-02-20',true,100);
insert into laptop value(2,'菠萝大手机','img/2.jpg',null,null,false,100);
insert into laptop value(3,'菠萝小手机','img/3.jpg',1699,'2023-02-20',true,100);