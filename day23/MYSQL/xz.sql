-- 要设置客户端连接服务器端的编码为utf-8
set names utf8;
-- 先删除数据库xz，如果存在
	drop database if exists xz;
-- 创建一个新的数据库xz 要设置存储字符的编码为utf-8
create database xz charset=utf8;
-- 进入数据库
	use xz;
-- 创建数据表
create table user(
	uid int,
	uname varchar(16),
	upwd varchar(32),
	email varchar(32),
	phone varchar(11),
	user_name varchar(16),
	is_online varchar(1),
	reg_time varchar(10)  -- 2023-02-20
	-- 文章的封面图，存储的图像的路径
	pic varchar(256)
);
-- 插入数据
insert into user values(1,'yu','123abc','yu@qq.com','137123456789','小雨','是','2022-12-31','img/1.jpg');
insert into user values(2,'nan','666666','nan@qq.com',16623832345,'楠姐','否','2020-05-01','img/2.jpg');
insert into user values(3,'xin','888888','xin@qq.com',1991234678,'新歌','否','2021-01-01','img/3.jpg');
-- 修改数据
update user set upwd='cccccc',email='yu@163.com' where uid=1;
-- 删除数据
delete from user where uid=2; 