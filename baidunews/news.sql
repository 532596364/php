create table news(
id int(11) not null AUTO_INCREMENT,
newstype char(200) ,
newstitle varchar(200),
newsimg varchar(200),
newstime datetime,
newssrc char(100),
primary key(id)
);
INSERT INTO `news` VALUES (1, '精选', '测试数据中的第一条数据', 'img/1.JPEG', '2016-11-4 15:30:31', '极客学院');
INSERT INTO `news` VALUES (2, '百家', '测试数据中的第二条数据', 'img/2.JPEG', '2016-11-4 15:33:30', '极客学院');
INSERT INTO `news` VALUES (3, '科技', '测试数据中的第三条数据', 'img/3.JPEG', '2016-11-4 15:34:11', '极客学院');
INSERT INTO `news` VALUES (4, '互联网', '测试数据中的第四条数据', 'img/4.JPEG', '2016-11-4 20:10:18', '极客学院');
INSERT INTO `news` VALUES (6, '本地', '测试数据中的第6条数据', 'img/6.JPEG', '2016-11-4 21:43:18', '极客学院');
INSERT INTO `news` VALUES (7, '社会', '测试数据中的第7条数据', 'img/7.JPEG', '2016-11-4 21:43:26', '极客学院');
INSERT INTO `news` VALUES (8, '军事', '测试数据中的第8条数据', 'img/8.JPEG', '2016-11-4 21:43:32', '极客学院');
INSERT INTO `news` VALUES (9, '女人', '测试数据中的第9条数据', 'img/9.JPEG', '2016-11-4 21:43:37', '极客学院');
INSERT INTO `news` VALUES (10, '高校', '测试数据中的第10条数据', 'img/10.JPEG', '2016-11-4 21:43:40', '极客学院');
INSERT INTO `news` VALUES (11, '更多', '测试数据中的第11条数据', 'img/11.JPEG', '2016-11-4 21:43:43', '极客学院');
INSERT INTO `news` VALUES (12, '娱乐', '测试数据中的第12条数据', 'img/12.JPEG', '2016-11-4 21:50:12', '极客学院');
