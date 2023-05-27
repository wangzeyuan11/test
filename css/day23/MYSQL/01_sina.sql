set names utf8;
drop database if exists sina;
create database sina charset=utf8;
use sina;
create table news(
id int,
title varchar(64),
ctime varchar(12),
origin varchar(16),
detail varchar(10240)
);
insert into news values(1,'聂彤被王泽源吃辣！！！聂彤被王泽源吃辣！！！','2023-02-20','王泽源家里','详情1');
insert into news values(2,'聂彤把王泽源吃辣！！！聂彤把王泽源吃辣！！！','2023-02-19','王泽源家里','详情2');
insert into news values(3,'聂彤被王泽源吃！！！聂彤被王泽源吃！！！','2023-02-18','王泽源家里','详情3');