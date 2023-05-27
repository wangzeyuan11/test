--如果qq数据库存在就删除
drop database if exists qq;
--创建新的数据库
create database qq;
--进入数据库
use qq;
-- 创建保存音乐数据的表
create table music(
	id int, -- 指定编号这一列存储的是整数类型
	title varchar(32), -- 指定标题这一列存储字符串类型
	singer varchar(16),
	timer varchar(5)
);
-- 插入数据
insert into music values(1,'我们的歌','王力宏','04:07');
insert into music values(2,'lost','park','03:19');

-- 查询数据
select * from music;


-- 删除数据
delete from emp where id=2;
-- 修改
update