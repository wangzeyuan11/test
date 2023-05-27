set names utf8;
drop database if exists hantang;
create database hantang charset=utf8;
use hantang;
create table category(
id int primary key auto_increment,
cpname varchar(10) unique
);