-- 设置客户端连接服务器端编码
set names utf8;
-- 丢弃数据库如果存在
drop database if exists hantang;
-- 创建新的数据库
create database hantang charset=utf8;
-- 进入数据库
use hantang;
-- 轮播图表
create table ht_banner(
    bid int primary key auto_increment,
    title varchar(32),
    pic varchar(128),
    href varchar(128)
);
-- 插入数据
insert into ht_banner values(null,'轮播图1','/images/banner1.jpg','http://www.codece.cn');
insert into ht_banner values(null,'轮播图2','/images/banner2.jpg','http://www.codece.cn');
insert into ht_banner values(null,'轮播图3','/images/banner3.jpg','http://www.codece.cn');
insert into ht_banner values(null,'轮播图4','/images/banner4.jpg','http://www.codece.cn');

-- 新闻分类表
create table ht_cat(
	cid int primary key auto_increment,
	cname varchar(8) unique
);
-- 插入数据
insert into ht_cat values
(10,'公司动态'),
(20,'产品资讯'),
(30,'业界资讯');
-- 创建新闻数据表
create table ht_news(
	nid int primary key auto_increment,
	title varchar(64),
	ctime bigint,
	detail varchar(10240),
	cat_id int,
	-- 将cat_id列作为外键，它的值必须在ht_cat表的cid中出现过
	foreign key(cat_id) references ht_cat(cid)
);
-- 插入数据
insert into ht_news values(null,'让操作更简单 本周最受关注智能电视盘点',1642822323333,'<p style="text-indent:2em;">经过几年的发展，智能电视已经被越来越多的消费者所熟悉，全新的操作流程，炫酷的智能体验，以及更多的人机交互功能，让智能电视走进了更多消费者的家庭。那么，什么样的电视能称之为智能电视呢？我们又该如何选择智能电视呢？接下来，笔者就为大家盘点一下本周网购途径最受欢迎的智能电视，希望能对大家选购智能电视起到一些帮助。</p><p><img border="0" alt="让操作更简单 本周最受关注智能电视盘点" src="http://img1.cache.netease.com/catchpic/1/13/1383E9844F4CF5B61A35ABBA4509D054.jpg" /> </p><p style="text-indent:2em;">让操作更简单 本周最受关注智能电视盘点</p><p style="text-indent:2em;">TOP1：海信LED42K520DX3D智能电视</p><p style="text-indent:2em;">海信K520系列智能电视，打破频道界限，同类节目合并呈现。通过直播聚合技术，把同一时段的同类节目汇集在一起，形成直播导航界面，让您一眼挑中喜爱的节目。用户还可以通过文字、语音搜索，查找自己喜欢的电视节目。 目前，这款电视在京东商城直降1100元，加上节能补贴400元，成交价仅为4199元，喜欢的朋友不要错过。</p><p><img border="0" alt="海信LED42K520DX3D智能电视" src="http://img1.cache.netease.com/catchpic/4/41/4166B3AF26EACDDE16731B00532BB853.jpg" /></p><p style="text-indent:2em;">海信LED42K520DX3D智能电视</p><p style="text-indent:2em;">海信K520系列是国内首发的带安卓4.0系统的智能电视，配合Android4.0研发的SAMRTZONE2.2深度优化平台，采用1080P全高清操作界面，简易直观，真正适合电视使用。K520系列内置双核处理器（2CPU+2GPU），运行速度超流畅。</p><p><img border="0" alt="背部特写" src="http://img1.cache.netease.com/catchpic/A/AF/AF980A7FCF358B4E4E6A762213C0F309.jpg" /> </p><p style="text-indent:2em;">背部特写</p><p style="text-indent:2em;">海信K520智能电视能够与智能手机、海信I’TV，通过无线网络进行多屏互动，实现大屏传小屏、小屏传大屏、智能云分享、智能云遥控。在此基础上，实现了大屏传小屏后的反向控制，I’TV可以反向控制电视。</p><p><img border="0" alt="接口特写" src="http://img1.cache.netease.com/catchpic/1/11/116B3AB92FE1CE350A11E11FA0529EE8.jpg" /></p>',20);
insert into ht_news values(null,'独家对话马化腾：微信是社交应用与电信业务无关',1592820000333,'<p style="text-indent:2em;">凤凰科技讯 3月31日消息，针对微信是否具有电信业务特征的问题，腾讯董事局主席马化腾今日在IT领袖峰会间隙独家对话凤凰科技时予以否认，马化腾称，微信不是电信业务，是一款社交化应用。</p><p style="text-indent:2em;">自微信推出之后，即有不少业内人士认为微信因为可以传输信息及语音，具有明显的电信基础业务特征。也正因此，有人称腾讯为没有牌照的“虚拟运营商”。</p><p style="text-indent:2em;">不过，马化腾今日在独家对话凤凰科技时表示，微信不是电信业务，是典型的社交应用。</p><p style="text-indent:2em;">有业内人士认为，马化腾如此表态是为了避免“被”成为“虚拟运营商”，否则，腾讯将不可避免的向基础电信运营商支付网络租用费。（王鹏）</p>',10);
insert into ht_news values(null,'菲律宾海域发生5.4级地震 震源深度103公里',1566620000333,'<p><img src="http://img1.cache.netease.com/catchpic/5/55/551D645D57D394F7269393D9DCA338A1.jpg" alt="菲律宾海域发生5.4级地震震源深度103公里（图）" /> </p><p style="text-indent:2em;">图片来自美国地质勘探局网站。</p><p style="text-indent:2em;">中新网4月12日电 据美国地质勘探局网站消息，北京时间4月12日18点34分，菲律宾南部海域发生里氏5.4级<a href="http://news.163.com/special/rbdblhddz/" target="_blank">地震</a>，震源深度103.2公里。</p>',30);
insert into ht_news values(null,'老外街头救晕倒中国小伙 奇怪他人只拍照不施救',1569990000333,'<p style="text-indent:2em;"><img alt="" src="http://y0.ifengimg.com/644db11e181e00f8/2013/0412/re_51673177a7ac3.jpg" /> </p><p style="text-indent:2em;">巴基斯坦留学生哈马德讲述救人经过。记者杨涛摄</p><p style="text-indent:2em;">原标题：小伙子晕倒引来路人围观 有的拍照有的拍视频</p><p style="text-indent:2em;">巴基斯坦留学生“闯镜头”救人</p><p style="text-indent:2em;">前天下午，武昌地铁2号线光谷站出口发生感人一幕：一名小伙不幸晕倒在地，正好路过的巴基斯坦来华留学生哈马德见状，毫不犹豫地上前施救，让小伙在现场苏醒过来。</p><p style="text-indent:2em;">小伙晕倒被外国人救醒</p><p style="text-indent:2em;">前天下午3点50分，光谷地铁站C出口，一名年轻小伙突然晕倒在地。目击者马同学说，倒地小伙看起来二十出头，身体十分虚弱。</p><p style="text-indent:2em;">小伙倒地后，周围站满了围观的路人，就在大家犹豫要不要将其扶起时，人群中突然走进来一个皮肤黝黑的外国男子，他俯下身开始对小伙进行急救。有路人递来一瓶矿泉水，外国男子不断给小伙脸上和脖子上洒清水，试图让其清醒过来。</p><p style="text-indent:2em;">大约过了15分钟，小伙渐渐苏醒过来。在另外一名男子的帮助下，两人一起将小伙搀扶到旁边的花坛台阶上坐下。外国男子询问小伙的身份，有没有同伴和亲人，但小伙身体十分虚弱，听得懂大家说话，自己却始终说不出话来。</p><p style="text-indent:2em;">因湖北省中医院光谷院区就在光谷附近，有好心市民在路边拦下一辆出租车，两名男子和白衣女子将小伙扶上车，将其送往医院救治，外国男子则悄悄离开了现场。</p><p style="text-indent:2em;">救人者是巴基斯坦留学生</p><p style="text-indent:2em;">外国男子究竟是谁？根据马同学提供的信息，昨天下午4点，记者在中南民族大学辗转找到了这位外国男子。</p><p style="text-indent:2em;">他叫哈马德（Ahmed waqas），今年31岁，来自巴基斯坦伊斯兰堡。哈马德约1米78的个子，穿着一身休闲运动装，露出一张阳光般的笑脸。</p><p style="text-indent:2em;">哈马德开口就说一口流利的中文，他告诉记者，曾在北京学过半年的中文，去年9月再次来到中国，就读于中南民族大学国际教育学院，刚好学的就是汉语言专业，目前正在上大一。</p><p style="text-indent:2em;">前天下午3点半，哈马德在校门口乘坐538路公交车前往光谷广场，他下车后看见马路对面的地铁站C出口聚满了围观的人，透过人群看到一名小伙子晕倒在地。</p><p style="text-indent:2em;">“围观的人群中，有的在拍照，有的在拍视频，还有的在打电话。”哈马德说，让他感到奇怪的是，就是没有一个人上前施救。</p><p style="text-indent:2em;">哈马德介绍，小伙身体向左侧倒在地上，还在不断抽搐，但已经处于昏迷状态，鼻孔还流出了血。曾接触过急救知识的他来不及多想，俯下身子按住小伙的脖子，检查其脉搏。同时，他不断给小伙的胸部和手掌心按摩。</p><p style="text-indent:2em;">功夫不负有心人，15分钟后，小伙逐渐睁开眼苏醒过来。</p><p style="text-indent:2em;">昨天下午，记者来到湖北省中医院光谷院区急诊科，试图找到被救的小伙。由于无法核实其身份信息，医护人员在查阅了接诊记录后，并没有找到这名小伙。</p><p><img alt="20万台小米2S售罄" src="http://y1.ifengimg.com/719f9cb65353fcc6/2013/0410/ori_5164a76e5ebec.jpeg" /></p><p style="text-indent:2em;">最后多说一句：现在预约小米2S，除了有16GB标准版外，还有16GB电信版可选，有兴趣的用户可以关注一下。</p>',20);

insert into ht_news values(null,'美媒民调：78%的被访者因通胀陷入财务困境',1594440000333,'<p>美国福克斯新闻网站当地时间9月14日公布的一项最新民意调查显示，通货膨胀已经成为让大部分美国人头疼的问题。约78%的被访者表示，通货膨胀导致他们陷入财务困境；约34%的被访者形容自己因此遭遇“严重困难”。此外，超半数被访者认为，今年3月至今，美国的通货膨胀问题“完全没有”得到控制。</p><p>美国劳工部9月13日公布的数据显示，今年8月美国消费者价格指数CPI同比增长8.3%，高于市场预期的8.1%，同比涨幅仍维持在高位。严重的通货膨胀导致许多家庭在支付食品、房贷、水电燃气等费用时捉襟见肘。</p>',10);
insert into ht_news values(null,'这些进攻性武器，美国真会供应乌军吗？',1604440000333,'<p>美国媒体近日爆料称，乌克兰向美国提出的武器需求清单包括几十种进攻性武器系统，其中可通过“海马斯”系统发射、射程达300公里的“陆军战术导弹系统”（ATACMS）备受关注。俄罗斯驻美国大使安东诺夫14日警告称，美国向基辅提供最大射程为300公里的“陆军战术导弹系统”的后果是美国将直接卷入与俄罗斯的军事冲突。这款武器为什么让俄方这么警惕，除了这款武器，美国未来还可能向乌克兰提供哪些进攻性武器？</p><h3>为何这款导弹被俄大使点名</h3><p>近日，美国《华尔街日报》报道称，乌克兰已经编制了一份新的武器清单，该“进攻性行动”清单包括29种武器系统，其中包括ATACMS导弹，它能够打击300公里外的目标。同时，乌克兰还要求美提供“海马斯”多管火箭炮系统、坦克、无人机、火炮系统、“鱼叉”反舰导弹和2000枚火箭炮炮弹。</p>',10);
insert into ht_news values(null,'俄罗斯警告美国：向乌克兰提供远程导弹将跨越“红线”',1604440000333,'<img src="https://n.sinaimg.cn/news/crawl/59/w550h309/20220916/9006-409c3076394635fb0b0d8b86ec6cd856.jpg" width="300"><p>当地时间9月15日，俄罗斯外交部表示，如果美国决定向乌克兰提供远程导弹，将跨越“红线”，并成为“冲突的直接当事方”。</p><p>据路透社9月15日报道，俄罗斯外交部发言人扎哈罗娃是在当天的新闻发布会上做出这番警告的，她还说，俄罗斯“保留捍卫其领土的权利”。</p><p>美国目前已公开向乌克兰提供可由“海马斯”多管火箭炮发射的GMLRS火箭弹，这种火箭弹可击中80公里以外的目标。“海马斯”还可以发射“陆军战术导弹系统”（ATACMS），其射程将达到300公里。8月19日，一名乌克兰高级官员拒绝透露是否已获得ATACMS。</p>',20);
insert into ht_news values(null,'周四纽约黄金期货收跌1.9% 创两年多新低',1604198000333,'<img src="https://n.sinaimg.cn/finance/transform/80/w550h330/20220916/3322-4f1ee731ee65284fd4c6a97dae036f2b.jpg" width="300"><p>分析师认为，黄金市场的势头和交易员情绪都非常悲观，因为市场普遍预期美联储将在11月和12月的货币政策会议上继续积极加息。</p><p>美联储将在下周二至周三召开货币政策会议，预计将至少把基准利率再上调75个基点，甚至有可能加息100个基点。</p><p>纽约商品交易所12月交割的黄金期货价格下跌31.80美元，跌幅为1.9%，报收于每盎司1677.30美元。按照最活跃合约计算，这是自2020年4月3日以来最活跃合约的最低收盘价，也是自今年7月5日以来最大的单日百分比跌幅。</p>',20);
insert into ht_news values(null,'马斯克表示 特斯拉仍然存在“用工荒”',1454198000333,'<img src="https://n.sinaimg.cn/spider20220915/54/w578h276/20220915/7f1e-3e0e0380e365dbdb0821e70956f1363f.png" width="300"><p>　据外国媒体报道，特斯拉（TSLA）据称仍然缺乏必要的空间或资源来让所有员工重返办公室，此时距离CEO马斯克要求员工复工复产已经过去三个月时间。现在，特斯拉正密切监控员工的出勤率，包括马斯克在内的高管们每周都会收到关于员工缺勤的报告。特斯拉有一部分员工先前被安排远程办公，他们（当时）自称自己可能无法满足马斯克的重返办公室办公等要求，这部分人早在6月份就已经被开除。</p>',30);
insert into ht_news values(null,'一代传奇落幕！网球天王费德勒宣布退役”',1454198000333,'<img src="https://n.sinaimg.cn/sports/transform/257/w650h407/20220915/259b-d9257a39bc1d3aa90274b2cf15993a60.png" width="300"><p>北京时间9月15日晚，网球天王罗杰-费德勒在个人社媒上宣布退役。</p><p>41岁的费德勒是男子网坛历史最伟大球员之一，曾103次斩获单打冠军，大满贯单打夺冠20次（澳网6冠、法网1冠、温网8冠、美网5冠），共计310周位于男单世界第一。</p><p>附费德勒告别信：</p><p>在这些年网球给我的所有礼物中，最棒的毫无疑问是我一路上所遇到的人：我的朋友、我的竞争对手、以及最重要的球迷，是他们给予了这项运动生命。</p>',30);
insert into ht_news values(null,'Adobe再扩张，以200亿美元收购协同设计软件公司Figma',1454198000333,'<img src="https://n.sinaimg.cn/finance/transform/116/w550h366/20220916/d88a-8efc84a35c8de1b82d01c2d6a581d470.png" width="300"><p>美国软件巨头Adobe加码收购。9月15日，Adobe宣布，Adobe宣布将以约200亿美元收购协同设计软件公司Figma，强化旗下协同设计平台阵容。这起交易将以现金和股票的方式支付，Adobe计划一半以现金支付，另一半以Adobe股票置换，</p><p>根据交易安排，Figma联合创始人兼首席执行官Dylan Field和员工将额外获得约600万股Adobe限制性股票，这些股票将在交易完成后的四年内获得。交易完成后，Dylan Field将会继续领导Figma，但他将会向Adobe数字媒体业务总裁 David Wadhwani汇报工作。</p><p>Adobe称，将通过手头现金以及贷款来支付交易款项，收购预计将于2023年完成，但仍必须受到监管单位的批准与许可，并还有若干条件必须达成，包含需要Figma的股东批准。Adobe截至9月2日止持有的现金和约当现金约为38.7亿美元。</p>',30);
insert into ht_news values(null,'2023年全国硕士研究生招生考试公告发布',1454198000333,'<img src="https://n.sinaimg.cn/finance/transform/116/w550h366/20220916/d88a-8efc84a35c8de1b82d01c2d6a581d470.png" width="300"><p>一、初试时间<br>2023年全国硕士研究生招生考试初试时间为2022年12月24日至25日（每天上午8：30—11：30，下午14：00—17：00）。超过3小时的考试科目在12月26日进行（起始时间8：30，截止时间由招生单位确定，不超过14：30）。考试时间以北京时间为准。不在规定日期举行的硕士研究生招生考试，国家一律不予承认。</p>',30);
insert into ht_news values(null,'伍兹小麦联手成立体育公司 不单纯对抗LIV高尔夫',1684198000333,'<img src="https://n.sinaimg.cn/sports/transform/215/w650h365/20220824/a26e-561e85c47c3ff060a72d288022ee97a2.jpg" width="300"><p>北京时间8月24日，泰格-伍兹和麦克罗伊联手，推出“明日体育公司”（TMRW Sports），其目的不止是对抗LIV高尔夫。
</p><p>两位美巡超级明星成立的这家公司，还有一个核心人物：著名的体育行业经理人麦克-麦卡利（Mike McCarley）。公司专注于“建立以科技为中心的企业，以高新的方式营运体育、媒体和娱乐”。</p><p>“我非常激动，与明日体育公司合作，让人们可以通过更多途径参与体育运动，”伍兹在新闻稿中说，“在我一生之中遇到了许多体育运动员、演艺圈的艺人、以及各方面的人士，他们都很热爱我们的体育运动，他们也与我们一样，希望给下一代体育粉丝创造更美好的未来。我们将同心协力，利用科技，为我们喜爱的体育运动带来全新的应运模式。”</p><p>麦克-麦卡利是明日体育公司的创始人和首席执行官，而伍兹和麦克罗伊被列为联合创始人。</p>',10);
insert into ht_news values(null,'大将军：库里排历史第10 单看数据已超魔术师',1611198000333,'<img src="https://n.sinaimg.cn/sports/transform/238/w650h388/20220916/23ff-c5379d68e3cd299cf666f1c13208204f.png" width="300"><p>北京时间9月16日，在今年夺得第4冠，且当选总决赛MVP后，库里的历史地位就成为大家热议的话题。近日，阿里纳斯做客《Fubo Sports》节目，称库里目前就排在历史第10位，排名还会上升。从数据上看，库里已超越了魔术师。</p><p>其实，早在10天前做客《Vlad TV》节目时，阿里纳斯就称，库里已经是历史前10球员了。如今，阿里纳斯旧事重提，称库里目前就排在第10位。“你得明白，斯蒂芬的NBA生涯尚未结束，最终他会在历史前10中占据一席之地，”阿里纳斯说。</p><p>在被问到如今库里是否已超越了魔术师时，阿里纳斯表示：“若抛开比赛影响力不谈，单论数据的话，那么斯蒂芬的确已超越魔术师了。但魔术师和伯德影响力巨大，我不觉得当今世界会允许你将库里排在魔术师前面。或许再过30、40年可以，但如今还不能。”</p>',10);
insert into ht_news values(null,'四川昨日新增本土“43＋132”',1433198000333,'<img src="https://n.sinaimg.cn/sports/transform/238/w650h388/20220916/23ff-c5379d68e3cd299cf666f1c13208204f.png" width="300"><p>新增本土确诊病例43例：外省返川闭环转运人员2例，成都7例，内江11例，宜宾5例，18例由既往无症状感染者转为确诊病例（外省返川闭环转运人员4例，成都6例，内江3例，宜宾3例，泸州1例，阿坝1例）。</p><p>新增本土无症状感染者132例：外省返川闭环转运人员4例，成都7例，内江91例，宜宾21例，达州8例，阿坝1例。</p><p>新增境外输入确诊病例3例（在成都，其中1例为既往无症状感染者转为确诊病例）。新增境外输入无症状感染者7例（在成都）。新增治愈出院病例221例，无新增疑似病例，无新增死亡病例。</p>',10);
insert into ht_news values(null,'和普京的这次会见，八个很意味深长的细节！',1554198000333,'<img src="https://n.sinaimg.cn/news/crawl/89/w550h339/20220916/bfdd-4fccb59bf9047e1c0db21ff8c50a420c.jpg" width="300"><p>毫无疑问，在这两天撒马尔罕一场接一场的会见中，15日下午与普京的这次会见，是最让世界关注的焦点。两个大国的领导人面对面坐到一起，侃侃而谈。</p><p>看了一下，新华社通稿比较简单，不到700个字。但如果仔细研读，你就会发现，看似枯燥的新闻措辞中，其实有很多耐人寻味的细节。</p><p>领导人的表态，有些肯定是有所指的。但说什么，怎么说，说到什么地步，却很有讲究。</p>',10);
insert into ht_news values(null,'潘玮柏陪老婆逛街好恩爱 宣云身材纤细小鸟依人',1554198000333,'<p>新浪娱乐讯 　　9月13日，有网友晒出偶遇潘玮柏和老婆宣云一同逛街的照片，照片中，潘玮柏身穿黑白印花衬衫和黑色长裤，而老婆宣云则身穿印花上衣和牛仔裤，戴着帽子和口罩很是低调，令网友格外注意的是，宣云身材十分纤细苗条，站在潘玮柏旁边显得小鸟依人，两人一路同行很是亲密。不少网友评论称“两个人好恩爱！”“好般配好幸福”“两个人也太有cp感了吧！”等等。 　　2020年7月27日，潘玮柏发文宣布与宣云的结婚喜讯...</p>',10);
insert into ht_news values(null,'民警5年前办案就餐未付款？上海警方：已成立联合调查组',1554198000333,'<p>据@警民直通车-上海 微博消息，上海市公安局9月15日发布警方通报称，针对群众反映“杨浦分局长白新村派出所民警于2017年5月办案期间就餐未付款”一事，市公安局党委高度重视，已责成督察总队、法制总队、杨浦分局成立联合调查组，全面查清事实情况。警方将根据调查结果，严格依规依纪依法进行处理。</p>',10);
insert into ht_news values(null,'超跑新力量 抢先实拍Hyper SSR',1554198000333,'<p>由于起步晚，起点低，再加上早些年缺少核心技术积累，自主品牌能登上到如今的高度，靠的更多是把资源投入到走量的车型上获得的市场回报，小排量+SUV成为了不少自主品牌企业的发展密码，而在更向上的区间，更大的马力、更小众的市场则鲜有成功案例。不过在电动车时代来临的当下，能源结构的变化带来了如今汽车本质上的改变，过去内燃机时代积的经验突然失去了绝对意义，更清洁高效的动力成为了未来的发展主流。而正是因为市场格局出现了变化，自主品牌头一次超越了不少燃油车时代的霸主，引领了新的格局。</p>',10);
insert into ht_news values(null,'国庆假期火车票17日开售 出行需要注意啥？',1554198000333,'<p>根据国办安排，2022年国庆节放假时间为10月1日至7日。按照铁路客票预售期15天的规定，9月17日起，旅客可以通过12306网站、APP等购买国庆黄金周首日(10月1日)火车票，而10月6日和7日火车票将分别于9月22和23日开售。中新经纬查询12306网站发现，国庆黄金周前两日，多数车票仍有富余。以9月29日从北京出发为例，截至9月15日12时查询时，前往天津、上海、西安、南京等大部分车次有较多余票，前往东北的车次则稍显紧俏。</p>',10);
insert into ht_news values(null,'华夏幸福，跪着赚钱',1554198000333,'<p>9月14日，华夏幸福(2.820, -0.11, -3.75%)披露，其全资子公司幸福安基中标沈阳市苏家屯区ＨＤ项目。该项目建筑面积72万平方米，为代建保交付项目。幸福安基是今年8月18日才成立的代建公司。上述沈阳项目原为另一个出险大型房企持有，时移势易，华夏幸福也成为了接盘者，其中标费率为1.15%。</p>',10);
insert into ht_news values(null,'两驴友海拔3700米高山遭遇高反一人昏迷',1554198000333,'<p>“我原本9月12日下午还要带车前往泸定的，但接到报警电话后，必须前往救援。”9月13日，甘孜州消防救援支队榆林特勤站副站长王枭说起12日那场救援，有点意外：除了这两名被困驴友外，我们在下山的过程中，还看见有两名驴友正在下山。“没想到地震期间，他们还要来。”</p>',10);
insert into ht_news values(null,'陈乔恩发粉色天空照 连续六年悼念好友乔任梁',1554198000333,'<p>新浪娱乐讯 9月16日，陈乔恩在微博发布粉色天空图片，连续六年悼念好友乔任梁。2016年9月16日晚，乔任梁因抑郁症在上海家中去世，年仅28岁。据悉，乔任梁去世后，他的家人朋友及粉丝都会用粉红色纪念他，陈乔恩每年的今天都会给乔任梁送上一个粉红的天空。</p>',10);

-- 创建关于汉唐表
create table ht_about(
	aid int primary key auto_increment,
	title varchar(16),
	detail varchar(10240)
);
-- 插入数据
insert into ht_about values(1,'公司简介','<p><span style="white-space:normal;">北京汉唐资产管理集团有限公司</span>由北京市工商局批准设立，注册资本人民币5亿元。公司成立于2004年，经过近十年的发展，旗下拥有北京亿利恒丰投资管理有限公司、北京汉唐凌和资本管理有限公司、北京众融互联财富投资管理有限公司、北京京盛典当行有限公司、山西融联恒丰投资有限公司、北京逸乐酒店管理有限公司、北京样云雅轩餐饮有限公司等控股子公司，形成以资产管理、财富管理、金融投资、融资业务、互联网金融、典当业务、海外金融业务、宾馆餐饮为主营业务的金融投资集团公司 。目前，公司已获得中国证监会批准的私募股权、私募证券资格。</p><img src="./images/about-pic.jpg" alt="" /> <p>集团公司拥有雄厚实力的股东背景和广泛的业务渠道，搭建了完善的综合服务体系和全面的服务网络，专家团队经验丰富，铺垫了良好的业务发展格局。集团公司始终以金融业务为公司的立业之本、生存之本、发展之本；以两翼扩张（金融、连锁酒店）为公司快速发展的策略，力争用五年时间在全国省会城市基本完成典当行分子机构的布局，通过市场并购的方式形成全国性的连锁酒店企业；公司的发展道路，将充分发挥公司投行业务功能，以资本运作、资产管理实现公司资产规模的跨越式发展。</p><集团集团公司系统弘扬“尊重员工、和谐共进”的核心企业文化理念，金融业务板块将始终坚持“稳健、诚信、创新、共好”的企业核心价值，宾馆餐饮企业将始终坚持“因您而变、超越期望”的企业核心价值，以客户为中心、以市场为导向，共同坚持诚信为本、创新制胜、永无止境、执行到底的企业精神，为多个行业多个领域的数万个客户提供了优良的服务。</p><p>当前，集团公司正处于高速发展阶段，力争5年内，将公司建设成为产业链条丰富、管理科学高效、盈利能力突出、品牌形象有力的现代企业集团，形成若干家经营管理规范的国内外上市公司。</p>');
insert into ht_about values(2,'董事长致辞','<p>时光如梭，岁月如歌。伴随着中国金融改革开放的浪潮，北京汉唐集团翩然迈过12个年头，形成了以资产管理、财富管理、金融投资、互联网金融、典当业务、海外金融业务、宾馆餐饮等为主营业务的金融投资集团公司，经营机构遍布中国主要的一、二线城市。天地和谐，源于携手，回眸汉唐集团取得的每一点成绩，都离不开各级政府和众多银行家、企业家、合作伙伴、广大客户的支持与厚爱！离不开公司全体同仁的不懈努力！在此，我深表感恩并致谢意！</p><p>随着中国经济社会进入新常态，金融市场化进程明显加快，大资管混业竞争日趋加剧。放眼未来，唯有紧扣金融市场化脉搏、聚焦细分市场、苦练内功的公司，才能在激烈的市场竞争中立于不败之地。汉唐集团将致力于打造中国最具专业实力、最具内涵价值、最具盈利能力和影响力的金融服务公司，不断为客户创造优于市场水平的价值空间。我们将实施“金融+实业”的双轮驱动战略，在股权投资领域，我们将聚焦医疗健康、现代农业、信息技术等产业投资；在财富管理领域，我们将面向国内外市场，为客户提供股票基金、资管计划、海外保险等具有市场竞争力的投资产品；在宾馆餐饮产业，我们将建设全国50家以上的精品快捷连锁宾馆和500家以上的“聚德羊杂割”连锁快餐门店。为此，我们将深扎专业土壤，精耕细作，以专业创造价值，用创新成就未来，形成汉唐集团面向新常态协同发展的核心竞争力。天道酬勤，经过公司全体员工的执着追求，不懈努力，我们再用5年时间，将公司建设成为产业链条丰富、管理科学高效、盈利能力突出、品牌形象有力的专业化、国际化企业集团。</p><p>昨日的辉煌，打造了我们浑身的钢筋铁骨，我们将站在新的起点上厚积薄发，迎接这个伟大时代给予我们的无限良机，构筑更加美好的汉唐梦想！让我们携手拥抱汉唐集团更加美好的明天！</p><div class="dsz">董事长：<img src="./images/dsz.jpg" alt="" /></div>');

-- 创建公司大事件表
create table ht_event(
	eid int primary key auto_increment,
	title varchar(64),
	ctime date
);
-- 插入数据
insert into ht_event values(null,'汉唐亿利恒丰投资管理有限公司获得私募证券基金备案资格。','2015-1-22');
insert into ht_event values(null,'汉唐凌和资本管理有限公司获得私募股权基金备案资格。','2015-1-22');
insert into ht_event values(null,'北京汉唐资产管理有限公司与联想控股建立项目合作机制。','2015-1-9');
insert into ht_event values(null,'北京汉唐资产管理有限公司获得私募证券基金备案资格。','2015-1-7');
insert into ht_event values(null,'北京汉唐资产管理有限公司收购香港万兆丰资产管理有限公司，海外业务正式拉开序幕。','2015-1-6');
insert into ht_event values(null,'北京众融互联财富投资管理有限责任公司网站平台正式发布。','2014-12-16');
insert into ht_event values(null,'北京众融互联财富投资管理有限责任公司获中国电子商务协会批准成立产业金融委员会，并成为会员单位。','2014-12-10');
insert into ht_event values(null,'北京汉唐资产管理有限公司与绵世投资集团建立项目合作机制。','2014-11-21');
insert into ht_event values(null,'北京众融互联财富投资管理有限责任公司协办《透过表情看思想》--第一届中国知名企业家肖像展。','2014-11-14');
insert into ht_event values(null,'北京众融互联财富投资管理有限责任公司获得中关村高新技术企业认证。','2014-11-14');
insert into ht_event values(null,'北京汉唐资产管理有限公司与中银律师事务所、瑞华会计师事务所建立起项目推荐合作机制。','2014-11-10');
insert into ht_event values(null,'北京众融互联财富投资管理有限责任公司成为北京市未来科技城及北京市昌平区重点支持','2014-10-26');
insert into ht_event values(null,'互联网金融企业，被评为区委区政府重点项目。北京汉唐资产管理有限公司入股内蒙古力农羊业集团。','2014-10-21');
insert into ht_event values(null,'北京众融互联财富投资管理有限责任公司在北京市未来科技城正式设立。','2014-9-19');
insert into ht_event values(null,'北京汉唐资产管理有限公司与石天资本建立合作机制。','2014-9-4');
insert into ht_event values(null,'北京汉唐资产管理有限公司与山西证券、中信建投建立合作关系。','2014-9-2');
insert into ht_event values(null,'北京汉唐资产管理有限公司与新企投资建立投资联盟合作机制。','2014-8-27');
insert into ht_event values(null,'祥云雅轩餐饮有限公司成为密云县"明厨亮灶"工程试点单位。','2014-5-1');

-- 创建旗下公司表
create table ht_member(
	mid int primary key auto_increment,
	mname varchar(32) unique not null
);
insert into ht_member values(null,'北京京盛典当行有限公司');
insert into ht_member values(null,'北京亿利恒丰投资管理有限公司');
insert into ht_member values(null,'北京汉唐凌和资本管理有限公司');
insert into ht_member values(null,'北京众融互联财富投资有限公司');
insert into ht_member values(null,'北京祥云雅轩餐饮有限公司');
insert into ht_member values(null,'北京逸乐酒店管理有限公司');
insert into ht_member values(null,'上海烁昕投资管理有限公司');
insert into ht_member values(null,'上海隽烁资产管理有限公司');
insert into ht_member values(null,'深圳诺金投资有限公司');
insert into ht_member values(null,'天津聚德成餐饮有限责任公司');

-- 公司业务
create table ht_business(
    bid int primary key auto_increment,
    title varchar(16),
    detail varchar(10240)
);
insert into ht_business values(null,'私募基金','<p>	以稳健投资、价值共创的投资理念，专注于在信息技术、医疗健康、文化产业、现代农业领域内的创新。</p><p>与成长机会。重点投资于成长期和扩展期企业，兼顾处于Pre-IPO的项目。对已投资项目通过积极主动的增值服务创造价值，促进已投企业创新与成长，帮助创建一流的公司。</p><img src="./images/fund1.jpg" alt="" /> <h3>私募证券</h3><p>始终坚持以投资收益为导向、以价值投资为理念，以稳健、高效为目标，力求帮助客户达到资产的保值增值。证券市场业务主要围绕上市公司定向增发、证券投资基金、证券自营业务三方面展开，不断扩展公司管理资产规模。同时和对家证券公司合作开展PB业务，根据既定的投资策略进行主动管理，目前已发行的产品有“亿利恒丰”系列资产管理计划等。</p><img src="./images/fund2.jpg" alt="" />');
insert into ht_business values(null,'资产管理','<p>资产管理业务主要涉及流动资金贷款、融资、项目融资、综合授信、动产与不动产融资，结合企业实际情况设计金融产品，满足企业融资需求。</p><p>（一）资产管理业务特色</p><ul class="busi-list1 clearfix"><li><img src="./images/zichan1.jpg" alt="" />科学的资产配置</li><li><img src="./images/zichan2.jpg" alt="" />有效的资产管理</li><li><img src="./images/zichan3.jpg" alt="" />完善的风控体系</li><li><img src="./images/zichan4.jpg" alt="" />稳健的投资收</li></ul><p>（二）资产管理产品</p><p style="margin-left:28px;"><img src="./images/zichan5.jpg" alt="" /></p>');
insert into ht_business values(null,'财富管理','<p class="p1">我们秉承以客户需求为中心的经营理念，根据客户资产规模、财富目标、投资偏好，集合相关金融产品，提供一站式的金融产品组合以及多对一的财富咨询服务，彰显对高端客户的重视与公司品牌独特的竞争优势。</p><p class="p2">	·  公司资产跨境流转<br />·  海外投资基金管理<br />·  企业境外投融资服务<br />·  企业高管与员工激励计划的服务方案<br />·  家庭慈善事业服务计划<br />·  家族办公室</p><img src="./images/wealth.jpg" alt="" /></p>');
insert into ht_business values(null,'投资顾问','<p style="text-indent:2em;">公司为企业客户提供融资顾问服务、投资顾问服务和投后管理顾问服务，为企业提供IPO上市的顾问咨询服务。将主要利用汉唐集团既有的客户、资金、信息和网络优势，根据客户需求和业务发展战略协助设计短期或中长期投资方案；</p><p style="padding-left:28px;">做好重大项目投资或股权投资的前期准备工作；<br />配合专项顾问服务团队做好客户重大项目投资和股权投资顾问工作；<br />做好客户投资活动的后续顾问服务工作。</p><img src="/themes/hantang/images/invest.jpg" />');


-- 企业文化
create table ht_culture(
    cid int primary key auto_increment,
    title varchar(16),
    detail varchar(10240)
);
insert into ht_culture values(null,'核心理念','<img src="./images/culture.jpg" alt="" /> <p style="text-indent:0;">1、公司核心文化理念：尊重员工、和谐奋进。</p><p style="text-indent:0;border-bottom:0 none;">2、公司的核心价值观</p><p style="border-bottom:0 none;">金融业务类公司：稳健、诚信、创新、共好；</p><p>宾馆酒店类公司：因您而变、超越期望。</p><p style="text-indent:0;">3、公司管理理念: 以业绩论成败,让数字说话;以奖优罚劣为基本管理手段，让优秀的员工和团队脱颖而出;坚持以事为重、以人为先的管理作风。
</p><p style="text-indent:0;">4、公司的经营理念：以客户为中心、以市场为导向。</p><p style="text-indent:0;">5、公司的企业精神：诚信为本、创新制胜、永无止境、执行到底。</p>');
insert into ht_culture values(null,'公司愿景','<p>汉唐集团将致力于打造: <br />中国最具<span>专业实力</span>、最具<span>内涵价值</span>、最具<span>盈利能力</span>和<span>影响力</span>的金融服务公司<br />实现集团经营的专业化、国际化。</p><img src="./images/vision.jpg" alt="" />	');

-- 合作交流
create table ht_cooperate(
    cid int primary key auto_increment,
    cname varchar(16),
    phone varchar(32),
	email varchar(32),
    detail varchar(10240),
    ctime bigint,
    is_recommend boolean  -- 1-项目推荐  0-投资意向
);
insert into ht_cooperate values(null,'新桑','18212345678','xin888@qq.com','我有项目推荐',1581233342234,1);
insert into ht_cooperate values(null,'铭桑','18812345678','ming123@qq.com','我有投资意向',1636632342234,0);

-- 招贤纳士
create table ht_job(
    jid int primary key auto_increment,
    title varchar(32),
    detail varchar(10240),
    ctime bigint
);
insert into ht_job values(null,'业务经理','<strong><span style="color:#000000;">在招职位</span></strong><br />融资业务部: 业务经理<br /><strong><span style="color:#000000;">岗位职责</span></strong><br />1、负责拓展销售渠道，开发新客户，销售公司发行或代销的金融理财产品；<br />2、负责维护销售渠道，维护老客户，为客户提供理财咨询等服务；<br />3、负责收集市场信息和客户建议，向客户传递公司产品与服务信息；<br />4、负责为客户提供金融理财的合理化建议，为客户实现资产保值增值；<br />5、负责向客户提供贷款融资类相关的业务工作；<br />6、负责组织并策划高级营销活动，开发高端市场；<br /><strong><span style="color:#000000;">任职资格</span></strong><br />1、专科及以上学历，经济、金融类等相关专业；<br />2、具有在证券公司、银行、保险等金融行业工作经验优先；<br />3、具有一定的证券、股票和基金相关的金融基础知识；<br />4、具有广泛的客户资源和金融营销经验者优先考虑；<br />5、具有较强的沟通能力和客户开发能力；<br />6、具有很强的工作责任心和良好的人际关系；<br />7、具有较强的团队合作精神，能承受一定的工作压力<br /><strong><span style="color:#000000;">加入方式：</span></strong><br />1、直接将电子简历以“应聘岗位-姓名-学校-专业”的方式命名，发送到邮箱hr@hantangamc.com；<br />2、登陆智联招聘或者前程无忧招聘网站，搜索“北京汉唐资产管理有限公司”职位，直接投递简历即可。<br />以上两种方式均可。',1630000000000);
insert into ht_job values(null,'财务经理','招聘财务经理1名，负责公司财务',1582300000000);
insert into ht_job values(null,'保安招聘','招聘保安若干名，负责公司安保工作',1542300000000);


-- 联系我们
create table ht_contact(
    cid int primary key auto_increment,
    cname varchar(32),
    addr varchar(64),
    tel char(12),
    fax char(12),
    code char(6)
);
insert into ht_contact values(null,'北京汉唐资产管理集团有限公司','北京市西城区黄寺大街23号阳光丽景3号楼23-81','010-85187800','010-85188700','100011');
insert into ht_contact values(null,'北京汉唐凌和资本管理有限公司','北京市西城区黄寺大街23号阳光丽景3号楼23-81','010-85187800','010-85188700','100011');
insert into ht_contact values(null,'北京京盛典当行有限公司','北京市西城区黄寺大街23-35','010-82233288','010-82233288','100011');
insert into ht_contact values(null,'北京祥云雅轩餐饮有限公司','北京市密云区鼓楼大街东斜街11号(原密云大鸭梨)','010-89030333','010-89030333','100011');
insert into ht_contact values(null,'天津聚德成餐饮有限责任公司','天津市和平区成都道211号','022-23352787','022-23352787','100011');

-- 合作伙伴
create table ht_partner (
	pid int primary key auto_increment,
	title varchar(16),
	pic varchar(128),
	href varchar(128)
);
insert into ht_partner values(null,'华融证券','/images/01.jpg','http://www.hrsec.com.cn');
insert into ht_partner values(null,'长城证券','/images/02.jpg','http://www.hrsec.com.cn');
insert into ht_partner values(null,'中金公司','/images/03.jpg','http://www.hrsec.com.cn');
insert into ht_partner values(null,'华能贵诚','/images/04.jpg','http://www.hrsec.com.cn');
insert into ht_partner values(null,'中国民生信托','/images/05.jpg','http://www.hrsec.com.cn');
insert into ht_partner values(null,'华安基金','/images/06.jpg','http://www.hrsec.com.cn');
insert into ht_partner values(null,'财通基金','/images/07.jpg','http://www.hrsec.com.cn');
insert into ht_partner values(null,'浙商银行','/images/08.jpg','http://www.hrsec.com.cn');
insert into ht_partner values(null,'江苏银行','/images/09.jpg','http://www.hrsec.com.cn');
insert into ht_partner values(null,'中国民生银行','/images/10.jpg','http://www.hrsec.com.cn');