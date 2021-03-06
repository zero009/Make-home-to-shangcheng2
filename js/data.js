//导航悬浮层二级菜单左侧内容
var listBox = { 
    list1:[
                [ 
                    {
                       hre:'#',
                       dt:'年货人气TOP榜',
                       dd:['进口美食折折不休','年货甄选 限量5折起']
                    },
                    {
                       hre:'#',
                       dt:'进口糖果/巧克力',
                       dd:['巧克力','牛奶巧克力','黑巧克力','松露','糖','硬糖','软糖','棉花糖','婚庆装','礼盒']
                    },
                    {
                        hre:'#',
                        dt: '进口饼干/糕点',
                        dd:['饼干',' 曲奇','威化','夹心饼干','苏打饼干','传统糕点','西式糕点','面包干','饼干礼盒']
                    },
                    {
                        href:'#',
                        dt: '进口零食/ 果干/ 坚果',
                        dd:['坚果','开心果','什锦坚果','巴旦木','腰果','蜜饯','芒果干','蔓越莓干','榴莲干','布丁','零食','膨化','薯片','肉脯','海苔','鱼肉肠']
                    }
                ],
                [
                    {
                       hre:'#',
                       dt:'进口牛奶/奶粉',
                       dd:['进口牛奶','整箱牛奶','全脂','低脂','脱脂','德国牛奶','香蕉牛奶','成人奶粉','酸奶']
                    },
                    {
                        hre:'#',
                        dt:'进口酒/ 饮料/ 水',
                        dd:['葡萄酒','啤酒','洋酒','起泡酒','水','碳酸饮料','果蔬汁','咖啡','茶饮料']
                    },
                    {
                        hre:'#',
                        dt:'进口冲饮/ 咖啡/ 茶',
                        dd:['早餐谷物','蜂蜜','柚子茶','巧克力粉','养生粉','花果茶','红茶','绿茶','白咖啡','速溶','咖啡豆','咖啡粉','咖啡胶囊']
                    },
                    {
                        hre:'#',
                        dt:'进口粮油/ 速食/ 调味',
                        dd:['食用油','橄榄油','大米','意面','果酱','烘焙','方便面','罐头','调味料','酱油']
                    }
                ],
                [
                    {
                        hre:'#',
                        dt:'水果/ 蔬菜',
                        dd:['进口水果','国产水果','叶菜类','根茎类','车厘子','蓝莓','猕猴桃','苹果','提子']
                    },
                    {   
                        hre:'#',
                        dt:'海鲜/ 肉类/ 禽蛋',
                        dd:['鱼类','虾/虾仁','海参','海鲜礼盒','鳕鱼','牛肉','羊肉','猪肉','熏腊','鸡鸭','蛋类']
                    },
                    {
                        hre:'#',
                        dt:'乳品烘焙/ 速食/ 熟食/ 票券',
                        dd:['黄油','奶酪','鲜奶','酸奶','低温饮品','面点类','火锅制品','熟食','半成品','泡菜','面包甜品券','年货礼券','烘焙甜品','披萨']
                    },
                    {
                        hre:'#',
                        dt:'海购',
                        dd:['食品','保健滋补','母婴','美容护理','服装鞋帽','箱包','首饰','家电','数码']
                    }
                ]
            ],
    list2:[
        [{  hre:"#",
            dt:"年货人气TOP榜",
            dd:['国产美食1元限量抢','猴年酒水大赏','顺丰发货 年货速达','明星年货狂欢购']
         },
         {  hre:"#",
            dt:"年货礼盒",
            dd:['坚果礼盒','零食','饼干礼盒','糖巧礼盒','酒礼盒','牛奶礼盒','箱装饮料','干货礼盒']
         },
         {  hre:"#",
            dt:"饼干/糕点",
            dd:['饼干','曲奇','威化','薄脆','夹心','蛋卷','糕点礼盒','肉松饼','沙琪玛','蛋糕','派']
         },
         {  hre:"#",
            dt:"米/ 面/ 油/干货",
            dd:['食用油','大米','面粉','面条','杂粮','菌菇','木耳/银耳','莲子/红枣','桂圆','枸杞','红豆','绿豆','薏仁','茶油','亚麻籽油']
         }
        ],
        [{  hre:"#",
            dt:"休闲零食/坚果/蜜饯",
            dd:['坚果','核桃','碧根果','腰果','开心果','礼盒','蜜饯','红枣','猪肉脯','牛肉干','炒货','膨化','薯片','海苔','鱼干','鸭脖']
         },
         {  hre:"#",
            dt:"糖果/ 巧克力",
            dd:['奶糖','棒棒糖','口香糖','薄荷糖','果冻','黑巧克力','牛奶巧克力','夹心巧克力']
         },
         {  hre:"#",
            dt:"厨房调料/ 果酱/ 沙拉酱",
            dd:['酱油','醋','料酒','豆腐乳','鸡精/味精','香油','调味料','糖/盐','调味汁']
         },
         {  hre:"#",
            dt:"方便速食",
            dd:['方便面','火腿肠','速食汤','八宝粥','肉罐头','水果罐头','八宝饭','方便粉丝']
         }
        ],
        [{  hre:"#",
            dt:"酒",
            dd:['白酒','葡萄酒','黄酒','洋酒','啤酒','预调酒','起泡酒','整箱酒','滋补酒']
         },
         {  hre:"#",
            dt:"饮料饮品",
            dd:['椰奶','碳酸饮料','即饮咖啡','功能饮料','果蔬汁','饮用水','茶饮料','含乳饮料']
         },
         {  hre:"#",
            dt:"冲饮/ 咖啡/ 茶",
            dd:['麦片','奶粉','豆奶粉','天然粉','可可粉','芝麻糊','花草茶','乌龙茶','绿茶','红茶','奶茶','速溶咖啡','咖啡豆','咖啡粉']
         },
         {  hre:"#",
            dt:"牛奶乳品",
            dd:['纯牛奶','酸奶','儿童奶','豆奶','风味奶','乳酸菌饮料','香蕉牛奶']
         }
        ] ],
    list3:[
            [{  hre:"#",
                dt:"年货人气TOP榜",
                dd:['新生服饰','宝宝旅行','宝宝防感冒','母婴满199减100']
             },
             {  hre:"#",
                dt:"奶粉",
                dd:[ '1段','2段','3段','4段','特殊配方','孕妈奶粉','有机奶粉','羊奶粉']
             },
             {  hre:"#",
                dt:"尿裤/湿巾",
                dd:['NB','S','M','L','XL','纸尿裤','拉拉裤','成人纸尿裤','尿垫','婴儿湿巾']
             },
             {  hre:"#",
                dt:"洗护清洁",
                dd:['宝宝洗浴','婴儿护肤','洗衣液/皂','理发器','奶瓶清洁','日常护理','座便器','口腔护理','洗手液','爽身粉','耳温枪']
             }
            ],
            [{  hre:"#",
                dt:"进口母婴",
                dd:['1号海购','尿裤','奶粉','辅食','营养品','奶瓶','吸奶器','洗护','孕妈专区','玩具']
             },
             {  hre:"#",
                dt:"辅食/营养品",
                dd:['米粉粥','面条','肉酥','饼干','果泥','零食','钙铁锌','DHA','益生菌','维生素','清火']
             },
             {  hre:"#",
                dt:"宝宝喂养",
                dd:['奶瓶','奶嘴','吸奶器','牙胶','安抚奶嘴','哺喂电器','儿童餐具','水杯/水壶']
             },
             {  hre:"#",
                dt:"玩具",
                dd:['0－1岁','1－3岁','3－6岁','6岁以上','益智玩具','积木拼插','健身玩具','电动摇控','模型','毛绒玩具','动漫']
             }
            ],
            [{  hre:"#",
                dt:"孕妈专区",
                dd:['孕妈装','防辐射服','内衣裤','孕妈洗护','孕妇枕','待产包','产妇巾','防溢乳垫','储奶袋','产后修复','妈咪出行','一次性']
             },
             {  hre:"#",
                dt:"寝具/ 服饰",
                dd:['口水巾','套件','睡袋','婴儿枕','浴巾','婴儿鞋','服饰礼盒','连身衣']
             },
             {  hre:"#",
                dt:"童装/童鞋",
                dd:['羽绒服','外套','运动裤','毛衣','棉服','内衣','童靴','打底裤','皮鞋','运动鞋']
             },
             {  hre:"#",
                dt:"童车床/ 安全防护",
                dd:['婴儿床','婴儿手推车','餐椅','学步车','三轮车','电动车','安全座椅','出行用品']
             }
            ]
          ],
    list4:[
            [{hre:"#",
                dt:"年货人气TOP榜",
                dd:['进口厨卫清洁','清洁小工具','我纸在乎你','厨房清洁必备','浴室闪亮','沃尔玛生活馆','优选好货5元9起']
             },
             {  hre:"#",
                dt:"衣物清洁护理",
                dd:[ '洗衣液','洗衣粉','洗衣皂','衣领净','去渍剂','衣物除菌柔顺剂','彩漂进口衣物清洁护理','天然皂粉']
             },
             {  hre:"#",
                dt:"清洁/卫浴用具",
                dd:['拖把/配件','抹布','百洁布','家务手套','擦窗器','除尘工具','垃圾桶','钢丝球','清洁刷','脸盆','水桶','肥皂盒','浴帘']
             }
            ],
            [{  hre:"#",
                dt:"纸品湿巾",
                dd:['软包抽纸','盒装抽纸','卷筒纸','手帕纸','厨房用纸','湿巾纸','湿厕纸','商务卫生纸','商务擦手纸','商务餐巾纸','平板卫生纸']
             },
             {  hre:"#",
                dt:"厨房/卫浴清洁",
                dd:['洗洁精','蔬果净','消毒液','油污净','洁厕剂','洁厕块','管道通','浴室清洁','玻璃清洁','多用途清洁','除水垢进口']
             },
             {  hre:"#",
                dt:"居室清洁/保养",
                dd:['防潮/防蛀','除甲醛','空气清新','鞋用品','驱蚊驱虫','地板清洁护理','家私清洁护理','家电清洁剂']
             }
            ],
            [{  hre:"#",
                dt:"一次性用品",
                dd:['垃圾袋','保鲜袋','保鲜膜','密实袋','纸杯','塑杯','杯托','一次性手套','一次性餐具','桌布/围裙','一次性鞋套']
             },
              {  hre:"#",
                dt:"餐具水具",
                dd:['水杯/壶','保温杯','保温壶','滤水壶','茶具','酒具','保鲜盒','碗/碟/盘','密封罐','套装餐具','刀/叉/匙筷子']
             },
             {
                hre:"#",
                dt:"厨具锅具",
                dd:['炒锅','平底锅','套装锅','蒸锅','汤锅','煲刀具剪刀收纳','厨房工具','烘焙工具','砧板','火锅','米箱','调味瓶']
             }
            ]        
          ],
    list5:[
            [ 
              {
                hre:'#',
                dt:'年货人气TOP榜',
                dd:['衣橱换新','雾霾攻略','萌宠口粮','优选好货','爆款直降','沃尔玛生活馆']
              },
              {
                hre:'#',
                dt:'床上用品',
                dd:['床品套件','秋冬被','枕头/枕芯','电热毯','毯子','床单','被罩','床垫/床褥','儿童床品']
             },
             {
               hre:'#',
               dt: '家纺布艺',
               dd:['毛巾/浴巾','居家拖鞋','马桶圈','地垫','桌布','防尘罩','窗帘','靠垫坐垫','沙发垫']
             },
             {
               href:'#',
               dt: '宠物用品',
               dd:['猫粮','狗粮','零食','沐浴露','猫砂','宠物保健','宠物服装','出行装备','尿片','水族宠物玩具','窝笼驱虫','吹风机']
             }
            ],
            [
             {
                hre:'#',
                dt:'餐具水具',
                dd:['水杯/壶','保温杯','滤水壶','茶具','酒具','保鲜盒','碗/碟/盘','密封罐','套装餐具']
             },
             {
                hre:'#',
                dt:'厨具锅具',
                dd:['炒锅','平底锅','套装锅','蒸锅','汤锅','煲刀具','剪刀','厨房','工具','收纳','烘焙','砧板']
             },
             {
                hre:'#',
                dt:'收纳洗晒',
                dd:['收纳箱','收纳柜','压缩袋','衣物收纳','卫浴收纳','杂物收纳','旅行收纳','衣架晾晒衣架','洗护袋','洗衣袋']
             },
             {
                hre:'#',
                dt:'居家日用',
                dd:['口罩','炭包','粘钩','挂钩','防潮垫','隔热垫','驱虫','防虫','雨伞','雨具','保暖贴','热水袋']
             }
            ],
            [
             {
                hre:'#',
                dt:'家具',
                dd:['卧室家具','客厅家具','餐厅家具','储物书房家具','沙发床床垫','桌椅柜']
             },
             {   
                hre:'#',
                dt:'家装建材',
                dd:['灯饰','厨房卫浴','五金工具','电子电工吸顶灯','开关插座','浴霸','龙头花洒']
             },
             {
                hre:'#',
                dt:'智能家居',
                dd:['智能灯具','智能马桶','智能插座','智能水杯','智能锁','创意礼品']
              },
              {
                hre:'#',
                dt:'家装软饰/ 新年装饰/ 园艺',
                dd:['钟饰','香薰/蜡烛装饰','摆件','节日婚庆照片墙','装饰画','装饰贴','手工/十字绣','鲜花迷你盆栽','园艺用品','永生花']
              }
            ]
       ],
    list6:[
            [ 
              {
                hre:'#',
                dt:'年货人气TOP榜',
                dd:['衣橱换新','雾霾攻略','萌宠口粮','优选好货','爆款直降','沃尔玛生活馆']
              },
              {
                hre:'#',
                dt:'床上用品',
                dd:['床品套件','秋冬被','枕头/枕芯','电热毯','毯子','床单','被罩','床垫/床褥','儿童床品']
             },
             {
               hre:'#',
               dt: '家纺布艺',
               dd:['毛巾/浴巾','居家拖鞋','马桶圈','地垫','桌布','防尘罩','窗帘','靠垫坐垫','沙发垫']
             },
             {
               href:'#',
               dt: '宠物用品',
               dd:['猫粮','狗粮','零食','沐浴露','猫砂','宠物保健','宠物服装','出行装备','尿片','水族宠物玩具','窝笼驱虫','吹风机']
             }
            ],
            [
             {
                hre:'#',
                dt:'餐具水具',
                dd:['水杯/壶','保温杯','滤水壶','茶具','酒具','保鲜盒','碗/碟/盘','密封罐','套装餐具']
             },
             {
                hre:'#',
                dt:'厨具锅具',
                dd:['炒锅','平底锅','套装锅','蒸锅','汤锅','煲刀具','剪刀','厨房','工具','收纳','烘焙','砧板']
             },
             {
                hre:'#',
                dt:'收纳洗晒',
                dd:['收纳箱','收纳柜','压缩袋','衣物收纳','卫浴收纳','杂物收纳','旅行收纳','衣架晾晒衣架','洗护袋','洗衣袋']
             },
             {
                hre:'#',
                dt:'居家日用',
                dd:['口罩','炭包','粘钩','挂钩','防潮垫','隔热垫','驱虫','防虫','雨伞','雨具','保暖贴','热水袋']
             }
            ],
            [
             {
                hre:'#',
                dt:'家具',
                dd:['卧室家具','客厅家具','餐厅家具','储物书房家具','沙发床床垫','桌椅柜']
             },
             {   
                hre:'#',
                dt:'家装建材',
                dd:['灯饰','厨房卫浴','五金工具','电子电工吸顶灯','开关插座','浴霸','龙头花洒']
             },
             {
                hre:'#',
                dt:'智能家居',
                dd:['智能灯具','智能马桶','智能插座','智能水杯','智能锁','创意礼品']
              },
              {
                hre:'#',
                dt:'家装软饰/ 新年装饰/ 园艺',
                dd:['钟饰','香薰/蜡烛装饰','摆件','节日婚庆照片墙','装饰画','装饰贴','手工/十字绣','鲜花迷你盆栽','园艺用品','永生花']
              }
            ]
       ],
    list7:[
            [ 
              {
                hre:'#',
                dt:'年货人气TOP榜',
                dd:['衣橱换新','雾霾攻略','萌宠口粮','优选好货','爆款直降','沃尔玛生活馆']
              },
              {
                hre:'#',
                dt:'床上用品',
                dd:['床品套件','秋冬被','枕头/枕芯','电热毯','毯子','床单','被罩','床垫/床褥','儿童床品']
             },
             {
               hre:'#',
               dt: '家纺布艺',
               dd:['毛巾/浴巾','居家拖鞋','马桶圈','地垫','桌布','防尘罩','窗帘','靠垫坐垫','沙发垫']
             },
             {
               href:'#',
               dt: '宠物用品',
               dd:['猫粮','狗粮','零食','沐浴露','猫砂','宠物保健','宠物服装','出行装备','尿片','水族宠物玩具','窝笼驱虫','吹风机']
             }
            ],
            [
             {
                hre:'#',
                dt:'餐具水具',
                dd:['水杯/壶','保温杯','滤水壶','茶具','酒具','保鲜盒','碗/碟/盘','密封罐','套装餐具']
             },
             {
                hre:'#',
                dt:'厨具锅具',
                dd:['炒锅','平底锅','套装锅','蒸锅','汤锅','煲刀具','剪刀','厨房','工具','收纳','烘焙','砧板']
             },
             {
                hre:'#',
                dt:'收纳洗晒',
                dd:['收纳箱','收纳柜','压缩袋','衣物收纳','卫浴收纳','杂物收纳','旅行收纳','衣架晾晒衣架','洗护袋','洗衣袋']
             },
             {
                hre:'#',
                dt:'居家日用',
                dd:['口罩','炭包','粘钩','挂钩','防潮垫','隔热垫','驱虫','防虫','雨伞','雨具','保暖贴','热水袋']
             }
            ],
            [
             {
                hre:'#',
                dt:'家具',
                dd:['卧室家具','客厅家具','餐厅家具','储物书房家具','沙发床床垫','桌椅柜']
             },
             {   
                hre:'#',
                dt:'家装建材',
                dd:['灯饰','厨房卫浴','五金工具','电子电工吸顶灯','开关插座','浴霸','龙头花洒']
             },
             {
                hre:'#',
                dt:'智能家居',
                dd:['智能灯具','智能马桶','智能插座','智能水杯','智能锁','创意礼品']
              },
              {
                hre:'#',
                dt:'家装软饰/ 新年装饰/ 园艺',
                dd:['钟饰','香薰/蜡烛装饰','摆件','节日婚庆照片墙','装饰画','装饰贴','手工/十字绣','鲜花迷你盆栽','园艺用品','永生花']
              }
            ]
       ]     
};
//导航悬浮层二级菜单最右侧内容
var listBox2 ={
    list1:[
         {"hre" : '#',"p":'进口零食饼干',"span":'环球零嘴吃不停',"sr":'img/sidelist1-1.jpg'},
         {"hre" : '#',"p":'有辣味&nbsp;够年味',"span":'全场9.9起',"sr":'img/sidelist1-1.jpg'},
         {"hre" : '#',"p":'进口粮油品类中心',"span":'爆款直降',"sr":'img/sidelist1-3.jpg'}
       ],
    list2:[
         {"hre" : '#',"p":'中国好粮油',"span":'全场9.9起',"sr":'img/sidelist2-1.jpg'},
         {"hre" : '#',"p":'来伊份过年促销',"span":'来伊份过年不打折',"sr":'img/sidelist2-1.jpg'},
         {"hre" : '#',"p":'美味零食',"span":'休闲美味 折扣到底',"sr":'img/sidelist2-3.jpg'}
       ],
    list3:[
         {"hre" : '#',"p":'猴宝价到',"span":'满199减100送100',"sr":'img/sidelist3-1.jpg'},
         {"hre" : '#',"p":'母婴会员专享',"span":'母婴会员专享页',"sr":'img/sidelist3-2.jpg'},
         {"hre" : '#',"p":'强生婴儿',"span":'强生1号店旗舰店',"sr":'img/sidelist3-3.jpg'}
       ],
    list4:[
         {"hre" : '#',"p":'清洁不打烊',"span":'买就送',"sr":'img/sidelist4-1.jpg'},
         {"hre" : '#',"p":'一次性用品',"span":'优惠不断',"sr":'img/sidelist4-2.jpg'},
         {"hre" : '#',"p":'冬季衣物洗护',"span":'爆款5折',"sr":'img/sidelist4-3.jpg'}
       ],
    list5:[
         {"hre" : '#',"p":'进口零食饼干',"span":'环球零嘴吃不停',"sr":'img/sidelist1-1.jpg'},
         {"hre" : '#',"p":'有辣味&nbsp;够年味',"span":'全场9.9起',"sr":'img/sidelist1-2.jpg'},
         {"hre" : '#',"p":'进口粮油品类中心',"span":'爆款直降',"sr":'img/sidelist1-3.jpg'}
       ],
    list6:[
         {"hre" : '#',"p":'进口零食饼干',"span":'环球零嘴吃不停',"sr":'img/sidelist1-1.jpg'},
         {"hre" : '#',"p":'有辣味&nbsp;够年味',"span":'全场9.9起',"sr":'img/sidelist1-2.jpg'},
         {"hre" : '#',"p":'进口粮油品类中心',"span":'爆款直降',"sr":'img/sidelist1-3.jpg'}
       ],
    list7:[
         {"hre" : '#',"p":'进口零食饼干',"span":'环球零嘴吃不停',"sr":'img/sidelist1-1.jpg'},
         {"hre" : '#',"p":'有辣味&nbsp;够年味',"span":'全场9.9起',"sr":'img/sidelist1-2.jpg'},
         {"hre" : '#',"p":'进口粮油品类中心',"span":'爆款直降',"sr":'img/sidelist1-3.jpg'}
       ]
};
// 轮播图内容
var banArr = [
         {"sr" : 'img/1.jpg',"bg": 'rgb(255,210,216)', "hre":'#', "al":'年货真选'},
         {"sr" : 'img/2.jpg',"bg": 'rgb(241,216,175)', "hre":'#', "al":'年货真选'},
         {"sr" : 'img/3.jpg',"bg": 'rgb(35, 210, 231)', "hre":'#', "al":'年货真选'},
         {"sr" : 'img/4.jpg',"bg": 'rgb(33,163,177)', "hre":'#', "al":'年货真选'},
         {"sr" : 'img/5.jpg',"bg": 'rgb(255,165,55)', "hre":'#', "al":'年货真选'},
         {"sr" : 'img/6.jpg',"bg": 'rgb(255, 229, 167)', "hre":'#', "al":'年货真选'},
         {"sr" : 'img/7.jpg',"bg": 'rgb(83, 190, 86)', "hre":'#', "al":'年货真选'},
         {"sr" : 'img/8.jpg',"bg": 'rgb(255, 148, 164)', "hre":'#', "al":'年货真选'},
         {"sr" : 'img/9.jpg',"bg": 'rgb(207,8,3)', "hre":'#', "al":'年货真选'}
    ];
//推荐品项展示内容
var showArr =[
        [
         {"sr" : 'img/collect1.jpg',"p":'进口牛奶',"st1":'4步提升生活质量',"st2":'买就对了9.9元',"hre":'#'},
         {"sr" : 'img/collect2.jpg',"p":'智能设备',"st1":'存印美美的你',"st2":'买就送豪礼',"hre":'#'},
         {"sr" : 'img/collect3.jpg',"p":'照片打印机',"st1":'优质奶源',"st2":'单件6.9折起',"hre":'#'},
         {"sr" : 'img/collect4.jpg',"p":'1姐帮你选空净',"st1":'远离雾霾',"st2":'全面直降特惠',"hre":'#'}
        ],
        [
         {"sr" : 'img/collect5.jpg',"p":'进口咖啡',"st1":'日本进口',"st2":'爆款7折起',"hre":'#'},
         {"sr" : 'img/collect6.jpg',"p":'时尚影音',"st1":'耳机困难户',"st2":'好货低至9.9元',"hre":'#'},
         {"sr" : 'img/collect7.jpg',"p":'年货国酒',"st1":'真品真酒',"st2":'爆款一贵就赔',"hre":'#'},
         {"sr" : 'img/collect8.jpg',"p":'饮料乳品',"str1":'家宴饮料疯抢',"st2":'超低价秒杀',"hre":'#'}
        ]
    ]
// 今日必团
var dayBox1 = [
         {"hre" : '#',"p":'进口·海购',"span":'全球最值得买',"sr":'img/01.jpg',"alt":'值得买'},
         {"hre" : '#',"p":'剁手价',"span":'洁柔3层172g卷纸',"sr":'img/02.jpg',"alt":'洁柔卷纸'},
         {"hre" : '#',"p":'特产中国·甄选特产',"span":'莆田桂圆干39.9元2袋',"sr":'img/03.jpg',"alt":'莆田桂圆'},
         {"hre" : '#',"p":'新品上市0元试用',"span":'负离子烫发神器',"sr":'img/04.jpg',"alt":'烫发神器'}
    ];
var dayBox2 = [
            {"hre" : '#',"p":'进口·海购',"span":'全球最值得买',"sr":'img/05.jpg',"alt":'值得买'},
            {"hre" : '#',"p":'进口·海购',"span":'全球最值得买',"sr":'img/06.jpg',"alt":'值得买'}
    ];
// 楼层大小标题
var biTit = {
    F1:[
         {"hre" : '#',"aText":'进口酒',"tit":'进口酒'},
         {"hre" : '#',"aText":'进口冲饮',"tit":'进口冲饮'},
         {"hre" : '#',"aText":'进口直采',"tit":'进口直采'},
         {"hre" : '#',"aText":'海购箱包',"tit":'海购箱包'},
         {"hre" : '#',"aText":'海购电器',"tit":'海购电器'},
         {"hre" : '#',"aText":'海购母婴',"tit":'海购母婴'}
     ],
    F2:[
         {"hre" : '#',"aText":'活色生鲜',"tit":'活色生鲜'},
         {"hre" : '#',"aText":'时令水果',"tit":'时令水果'},
         {"hre" : '#',"aText":'进口直采',"tit":'进口直采'},
         {"hre" : '#',"aText":'新鲜蔬菜',"tit":'新鲜蔬菜'},
         {"hre" : '#',"aText":'海鲜水产',"tit":'海鲜水产'},
         {"hre" : '#',"aText":'家禽蛋类',"tit":'家禽蛋类'},
         {"hre" : '#',"aText":'低温乳品',"tit":'低温乳品'},
         {"hre" : '#',"aText":'方便菜',"tit":'方便菜'}
     ],
    F3:[
         {"hre" : '#',"aText":'咖啡',"tit":'咖啡'},
         {"hre" : '#',"aText":'糖果巧克力',"tit":'糖果巧克力'},
         {"hre" : '#',"aText":'厨房调料',"tit":'厨房调料'},
         {"hre" : '#',"aText":'方便速食',"tit":'方便速食'},
         {"hre" : '#',"aText":'冲饮谷物',"tit":'冲饮谷物'},
         {"hre" : '#',"aText":'饮料饮品',"tit":'饮料饮品'}
     ],
    F4:[
         {"hre" : '#',"aText":'身体护理',"tit":'身体护理'},
         {"hre" : '#',"aText":'洗发护发',"tit":'洗发护发'},
         {"hre" : '#',"aText":'新年大扫除',"tit":'新年大扫除'},
         {"hre" : '#',"aText":'洗衣液',"tit":'洗衣液'},
         {"hre" : '#',"aText":'冬季沐浴',"tit":'冬季沐浴'},
         {"hre" : '#',"aText":'纸品',"tit":'纸品'}
     ],
    F5:[
         {"hre" : '#',"aText":'宝宝洗衣液',"tit":'宝宝洗衣液'},
         {"hre" : '#',"aText":'营养米粉',"tit":'营养米粉'},
         {"hre" : '#',"aText":'奶瓶奶嘴',"tit":'奶瓶奶嘴'},
         {"hre" : '#',"aText":'儿童玩具',"tit":'儿童玩具'},
         {"hre" : '#',"aText":'拉拉裤',"tit":'拉拉裤'},
         {"hre" : '#',"aText":'营养品',"tit":'营养品'}
     ],
    F6:[
         {"hre" : '#',"aText":'棉拖鞋',"tit":'棉拖鞋'},
         {"hre" : '#',"aText":'毛巾',"tit":'毛巾'},
         {"hre" : '#',"aText":'暖宝宝',"tit":'暖宝宝'},
         {"hre" : '#',"aText":'防霾口罩',"tit":'防霾口罩'},
         {"hre" : '#',"aText":'秋冬床品',"tit":'秋冬床品'},
         {"hre" : '#',"aText":'换季收纳',"tit":'换季收纳'}
     ],
    F7:[
         {"hre" : '#',"aText":'新款连衣裙',"tit":'新款连衣裙'},
         {"hre" : '#',"aText":'男女外套',"tit":'男女外套'},
         {"hre" : '#',"aText":'男女内裤',"tit":'男女内裤'},
         {"hre" : '#',"aText":'雪地靴',"tit":'雪地靴'},
         {"hre" : '#',"aText":'女包新品',"tit":'女包新品'},
         {"hre" : '#',"aText":'冲锋衣裤',"tit":'冲锋衣裤'}
     ],
    F8:[
         {"hre" : '#',"aText":'iPad',"tit":'iPad'},
         {"hre" : '#',"aText":'家电直降特惠',"tit":'家电直降特惠'},
         {"hre" : '#',"aText":'电脑配件',"tit":'电脑配件'},
         {"hre" : '#',"aText":'单反',"tit":'单反'}
     ],
    F9:[
         {"hre" : '#',"aText":'进口好货',"tit":'新款连衣裙'},
         {"hre" : '#',"aText":'生鲜粮油',"tit":'生鲜粮油'},
         {"hre" : '#',"aText":'iphone疯抢',"tit":'iphone疯抢'},
         {"hre" : '#',"aText":'大牌纸尿裤',"tit":'大牌纸尿裤'},
         {"hre" : '#',"aText":'精致女装',"tit":'精致女装'}
     ]
};
var smTit = {
    F1:[
         {"hre" : '#',"aText":'进口牛奶',"tit":'进口牛奶'},
         {"hre" : '#',"aText":'进口饼干',"tit":'进口饼干'},
         {"hre" : '#',"aText":'进口巧克力',"tit":'进口巧克力'},
         {"hre" : '#',"aText":'进口坚果',"tit":'进口坚果'},
         {"hre" : '#',"aText":'进口咖啡',"tit":'进口咖啡'},
         {"hre" : '#',"aText":'进口粮油',"tit":'进口粮油'}
     ],
     F2:[
         {"hre" : '#',"aText":'1号生鲜',"tit":'1号生鲜'},
         {"hre" : '#',"aText":'新鲜水果',"tit":'新鲜水果'},
         {"hre" : '#',"aText":'车厘子',"tit":'车厘子'},
         {"hre" : '#',"aText":'品质牛肉',"tit":'品质牛肉'},
         {"hre" : '#',"aText":'海鲜水产',"tit":'海鲜水产'},
         {"hre" : '#',"aText":'鲜活蛋类',"tit":'鲜活蛋类'}
     ],
     F3:[
         {"hre" : '#',"aText":'饼干糕点',"tit":'饼干糕点'},
         {"hre" : '#',"aText":'休闲零食',"tit":'休闲零食'},
         {"hre" : '#',"aText":'粮油干货',"tit":'粮油干货'},
         {"hre" : '#',"aText":'国产名酒',"tit":'国产名酒'},
         {"hre" : '#',"aText":'牛奶乳品',"tit":'牛奶乳品'},
         {"hre" : '#',"aText":'保健滋补',"tit":'保健滋补'}
     ],
     F4:[
         {"hre" : '#',"aText":'洗衣护发',"tit":'洗衣护发'},
         {"hre" : '#',"aText":'护手霜',"tit":'护手霜'},
         {"hre" : '#',"aText":'牙膏牙刷',"tit":'牙膏牙刷'},
         {"hre" : '#',"aText":'纸品湿巾',"tit":'纸品湿巾'},
         {"hre" : '#',"aText":'衣物洗护',"tit":'衣物洗护'},
         {"hre" : '#',"aText":'家庭清洁',"tit":'家庭清洁'}
     ],
     F5:[
         {"hre" : '#',"aText":'洗护清洁',"tit":'洗护清洁'},
         {"hre" : '#',"aText":'哺育喂养',"tit":'哺育喂养'},
         {"hre" : '#',"aText":'孕妈用品',"tit":'孕妈用品'},
         {"hre" : '#',"aText":'儿童玩具',"tit":'儿童玩具'},
         {"hre" : '#',"aText":'副食营养',"tit":'副食营养'},
         {"hre" : '#',"aText":'营养品',"tit":'营养品'}
     ],
     F6:[
         {"hre" : '#',"aText":'餐具水具',"tit":'餐具水具'},
         {"hre" : '#',"aText":'锅具厨具',"tit":'锅具厨具'},
         {"hre" : '#',"aText":'床上用品',"tit":'床上用品'},
         {"hre" : '#',"aText":'家纺布艺',"tit":'家纺布艺'},
         {"hre" : '#',"aText":'家装建材',"tit":'家装建材'},
         {"hre" : '#',"aText":'宠物用品',"tit":'宠物用品'}
     ],
     F7:[
         {"hre" : '#',"aText":'女装内衣',"tit":'女装内衣'},
         {"hre" : '#',"aText":'品质男装',"tit":'品质男装'},
         {"hre" : '#',"aText":'大牌箱包',"tit":'大牌箱包'},
         {"hre" : '#',"aText":'运动户外',"tit":'运动户外'},
         {"hre" : '#',"aText":'珠宝饰品',"tit":'珠宝饰品'},
         {"hre" : '#',"aText":'潮流鞋靴',"tit":'潮流鞋靴'}
     ],
     F8:[
         {"hre" : '#',"aText":'手机',"tit":'手机'},
         {"hre" : '#',"aText":'手机配件',"tit":'手机配件'},
         {"hre" : '#',"aText":'平板电脑',"tit":'平板电脑'},
         {"hre" : '#',"aText":'家电',"tit":'家电'},
         {"hre" : '#',"aText":'数码配件',"tit":'数码配件'},
         {"hre" : '#',"aText":'取暖器',"tit":'取暖器'}
     ],
     F9:[
         {"hre" : '#',"aText":'进口食品',"tit":'进口食品'},
         {"hre" : '#',"aText":'食品',"tit":'食品'},
         {"hre" : '#',"aText":'奢华美妆',"tit":'奢华美妆'},
         {"hre" : '#',"aText":'母婴',"tit":'母婴'},
         {"hre" : '#',"aText":'精品女装',"tit":'精品女装'},
         {"hre" : '#',"aText":'手机数码',"tit":'手机数码'}
     ]
};
// 各楼层图片内容
    //mod_div内容加载
var modArr = {
    F1:[
     {hre:'#',p:'费列罗新年聚会',span:'全场直降',sr:'img/haigou0.jpg'},
     {hre:'#',p:'进口休闲零食中心',span:'美味零食5折起',sr:'img/haigou4.jpg'},
     {hre:'#',p:'甜蜜美味买1送1',span:'进口糖品中心',sr:'img/haigou5.jpg'},
     {hre:'#',p:'全球中国年 大牌洋货预告',span:'补血必备 铁元105元抢',sr:'img/haigou6.jpg'},
     {hre:'#',p:'Equate品牌闪购',span:'Equate洗手液 1元秒杀',sr:'img/haigou7.jpg'},
     {hre:'#',p:'港台地区馆',span:'手工制造 台湾牛轧糖',sr:'img/haigou8.jpg'}
    ],
    F2:[
     {hre:'#',p:'崇明桃林生态养土',span:'味香肉紧下单后宰杀',sr:'img/shengxian1.jpg'},
     {hre:'#',p:'送礼就要新奇特',span:'买2份减10元',sr:'img/shengxian5.jpg'},
     {hre:'#',p:'过年不打烊',span:'全场五折起',sr:'img/shengxian6.jpg'},
     {hre:'#',p:'生鲜排行榜大家都在买',span:'天鹅堡情人蛋糕118元起',sr:'img/shengxian7.jpg'},
     {hre:'#',p:'生鲜-让爱先回家',span:'车厘子 买6斤送2斤',sr:'img/shengxian8.jpg'},
     {hre:'#',p:'年尾疯抢',span:'进口新奇士 12个/￥69',sr:'img/shengxian9.jpg'}
    ],
    F3:[
     {hre:'#',p:'芒果干108g*3袋',span:'新年零食必备',sr:'img/yinliao0.jpg'},
     {hre:'#',p:'坚果零食',span:'爆款低价',sr:'img/yinliao4.jpg'},
     {hre:'#',p:'真品真酒一贵就赔',span:'1号酒窖',sr:'img/yinliao5.jpg'},
     {hre:'#',p:'拼手速1元限量抢',span:'国食美食年终盘点',sr:'img/yinliao6.jpg'},
     {hre:'#',p:'寿全斋满66减20',span:'热饮好茶',sr:'img/yinliao7.jpg'},
     {hre:'#',p:'健康加倍',span:'买一送一',sr:'img/yinliao8.jpg'}
    ],
    F4:[
     {hre:'#',p:'0元购',span:'遇见最美的自己',sr:'img/chuwei0.jpg'},
     {hre:'#',p:'坚果零食',span:'爆款低价',sr:'img/chuwei4.jpg'},
     {hre:'#',p:'真品真酒一贵就赔',span:'1号酒窖',sr:'img/chuwei5.jpg'},
     {hre:'#',p:'拼手速1元限量抢',span:'国食美食年终盘点',sr:'img/chuwei6.jpg'},
     {hre:'#',p:'寿全斋满66减20',span:'热饮好茶',sr:'img/chuwei7.jpg'},
     {hre:'#',p:'健康加倍',span:'买一送一',sr:'img/chuwei9.jpg'},
     {hre:'#',p:'大扫除新年团',span:'全场2.5折起',sr:'img/chuwei11.jpg'},
     {hre:'#',p:'女性护理年货团',span:'授权正品2.9折起',sr:'img/chuwei12.jpg'},
     {hre:'#',p:'健康加倍',span:'买一送一',sr:'img/chuwei8.jpg'}
    ],
    F5:[
     {hre:'#',p:'感恩钜惠-哺育喂养专',span:'满199减100',sr:'img/muying0.jpg'},
     {hre:'#',p:'"裤"爽新春 乐抢好货',span:'纸尿裤中心',sr:'img/muying4.jpg'},
     {hre:'#',p:'宝宝过年，提前囤货',span:'奶粉中心提前陪你过大年',sr:'img/muying5.jpg'},
     {hre:'#',p:'前世情人的月光宝盒',span:'玩具满199减60 399减120',sr:'img/muying6.jpg'},
     {hre:'#',p:'倩麒防辐射年货节',span:'全场2.6折起 满269减20',sr:'img/muying7.jpg'},
     {hre:'#',p:'UOVO童鞋超级返',span:'4.4折起 返利24%~56%',sr:'img/muying7.jpg'}
    ],
    F6:[
     {hre:'#',p:'1号珍品优选推荐',span:'新春钜惠',sr:'img/jiaju0.jpg'},
     {hre:'#',p:'家装一站购 新年换新',span:'品牌钜惠好货不断',sr:'img/jiaju4.jpg'},
     {hre:'#',p:'博洋年货专抢',span:'9.9起红包认领',sr:'img/jiaju5.jpg'},
     {hre:'#',p:'春节不打烊',span:'全场1.5折起',sr:'img/jiaju6.jpg'},
     {hre:'#',p:'博洋家纺带回家',span:'精品2.6折起',sr:'img/jiaju7.jpg'},
     {hre:'#',p:'松下品牌2.1折起',span:'新年家装感恩回馈',sr:'img/jiaju8.jpg'}
    ],
    F7:[
     {hre:'#',p:'感恩钜惠-哺育喂养专',span:'满199减100',sr:'img/baihuo0.jpg'},
     {hre:'#',p:'时尚女装馆',span:'新年穿新装低至2折起',sr:'img/baihuo3.jpg'},
     {hre:'#',p:'过年不打烊',span:'箱包配饰1折起',sr:'img/baihuo4.png'},
     {hre:'#',p:'我的美丽日志旗舰店',span:'满138减10 下单有礼',sr:'img/baihuo5.jpg'},
     {hre:'#',p:'李宁智能芯片跑步鞋',span:'爆款五折起',sr:'img/baihuo6.jpg'},
     {hre:'#',p:'倩麒防辐射年货节',span:'全场2.6折起 满269减20',sr:'img/baihuo8.jpg'},
     {hre:'#',p:'UOVO童鞋超级返',span:'4.4折起 返利24%~56%',sr:'img/baihuo9.jpg'},
     {hre:'#',p:'UOVO童鞋超级返',span:'4.4折起 返利24%~56%',sr:'img/baihuo10.jpg'}
    ],
    F8:[
     {hre:'#',p:'0元购',span:'遇见最美的自己',sr:'img/jiadian0.jpg'},
     {hre:'#',p:'1号店自营家电',span:'猴年直降惠课',sr:'img/jiadian4.jpg'}
    ],
    F9:[
     {hre:'#',p:'团新装迎新年',span:'全场好货5折起',sr:'img/yihaotuan0.jpg'}
    ]
} ;
   // mod_s内容加载
var msJson = {
    F4:{"hre":'#',"sr":'img/chuwei10.jpg','p':'威露士年货节','span':'巩固-健康-生活','em':'满100减50'},
    F7:{"hre":'#',"sr":'img/baihuo7.jpg','p':'男女鞋靴馆','span':'专柜大牌3折起','em':'鞋靴精品99元起'},
    F8:{"hre":'#',"sr":'img/jiadian9.jpg','p':'电脑数码','span':'开年一炮而红','em':'任性低至5折'}
};
   //mod_Div内容加载
var mdJson = {
    one:{'hre':'#',"sr":'img/jiadian5.jpg','p':"魅族MX5直降200再送耳机",'b':"￥1499"},
    two:{'hre':'#',"sr":'img/jiadian6.jpg','p':"炫控双旦压力锅",'b':"￥299"},
    three:{'hre':'#',"sr":'img/jiadian7.jpg','p':"iphone6比京东还低",'b':"￥4899"},
    four:{'hre':'#',"sr":'img/jiadian8.jpg','p':"松下电吹风",'b':"￥199"},
    five:{'hre':'#',"sr":'img/jiadian10.jpg','p':"iPad Mini2 超值低价",'b':"￥3199"},
    six:{'hre':'#',"sr":'img/jiadian11.jpg','p':"联想 ThinkPad X250",'b':"￥4599"},
    seven:{'hre':'#',"sr":'img/jiadian12.jpg','p':"Apple Watch 全线直降",'b':"￥2399"}
}
   //1号团内容加载
var yhTuan = {
    one:[
         {'hre':"#",'sr':"img/yihaotuan1.jpg",'al':'年货只挑良品铺子','u':'0.4折起','s':'165800'},
         {'hre':"#",'sr':"img/yihaotuan2.jpg",'al':'九阳春节惠不停','u':'1折起','s':'9773'}
    ],
    two:[
         {'hre':"#",'sr':"img/yihaotuan3.jpg",'p':"楼兰蜜语 红枣夹核桃200g 个头大 核心枣 新疆骏枣红枣夹核桃仁 年货零食小吃干果坚果",'span':"人已购买",'s':"9476",'b':"￥26.9",'i':"参考价",'del':"￥60"},
         {'hre':"#",'sr':"img/yihaotuan4.jpg",'p':"YUZHAOLIN俞兆林 37度恒温秋衣秋裤薄款塑身打底美体套装",'span':"人已购买",'s':"9476",'b':"￥38.9",'i':"参考价",'del':"￥299"}
    ],
    three:[
         {'hre':"#",'sr':"img/yihaotuan5.jpg",'p':"BEYOND/博洋 博洋家纺 短毛绒保暖床单四件套-别样风情 多款拼款",'span':"人已购买",'s':"9476",'b':"￥26.9",'i':"参考价",'del':"￥60"},
         {'hre':"#",'sr':"img/yihaotuan6.jpg",'p':"DEVONDALE德运 全脂牛奶 纯牛奶 10*1L 澳大利亚进口",'span':"人已购买",'s':"9476",'b':"￥26.9",'i':"参考价",'del':"￥60"}
    ],
     four:[
         {'hre':"#",'sr':"img/yihaotuan7.jpg",'p':"BEYOND/博洋 博洋家纺 短毛绒保暖床单四件套-别样风情 多款拼款",'span':"人已购买",'s':"9476",'b':"￥26.9",'i':"参考价",'del':"￥60"},
         {'hre':"#",'sr':"img/yihaotuan8.jpg",'p':"DEVONDALE德运 全脂牛奶 纯牛奶 10*1L 澳大利亚进口",'span':"人已购买",'s':"9476",'b':"￥26.9",'i':"参考价",'del':"￥60"}
    ]
};
  //加载mod_div2中的数据
var ulArr= {
    F1:[
      {'hre':'#',"sr":'img/haigou1.jpg'},
      {'hre':'#',"sr":'img/haigou2.jpg'},
      {'hre':'#',"sr":'img/haigou3.jpg'}
    ],
    F2:[
      {'hre':'#',"sr":'img/shengxian2.jpg'},
      {'hre':'#',"sr":'img/shengxian3.jpg'},
      {'hre':'#',"sr":'img/shengxian4.jpg'}
    ],
    F3:[
      {'hre':'#',"sr":'img/yinliao1.jpg'},
      {'hre':'#',"sr":'img/yinliao2.jpg'},
      {'hre':'#',"sr":'img/yinliao3.jpg'}
    ],
    F4:[
      {'hre':'#',"sr":'img/chuwei1.jpg'},
      {'hre':'#',"sr":'img/chuwei2.jpg'},
      {'hre':'#',"sr":'img/chuwei3.jpg'}
    ],
    F5:[
      {'hre':'#',"sr":'img/muying1.jpg'},
      {'hre':'#',"sr":'img/muying2.jpg'},
      {'hre':'#',"sr":'img/muying3.jpg'}
    ],
    F6:[
     {'hre':'#',"sr":'img/jiaju1.jpg'},
     {'hre':'#',"sr":'img/jiaju2.jpg'},
     {'hre':'#',"sr":'img/jiaju3.jpg'}
    ],
    F7:[
      {'hre':'#',"sr":'img/chuwei1.jpg'},
      {'hre':'#',"sr":'img/chuwei2.jpg'},
      {'hre':'#',"sr":'img/chuwei3.jpg'}
    ],
    F8:[
     {'hre':'#',"sr":'img/jiadian1.jpg'},
     {'hre':'#',"sr":'img/jiadian2.jpg'},
     {'hre':'#',"sr":'img/jiadian3.jpg'}
    ]
};
// 闪购图片加载
var sgArr = [
     [{"hre":'#',"sr":'img/shangou0.jpg','al':"今日大牌"},{"hre":'#',"sr":'img/shangou1.jpg',"al":"AU&&MU"},{"hre":'#',"sr":'img/shangou2.jpg',"al":"艺福堂"},{"hre":'#',"sr":'img/shangou3.jpg',"al":'雅鹿羽绒服'},{"hre":'#',"sr":'img/shangou4.jpg',"al":'ELLE'}],
     [{"hre":'#',"sr":'img/shangou00.jpg','al':"今日大牌"},{"hre":'#',"sr":'img/shangou01.jpg','al':"今日大牌"},{"hre":'#',"sr":'img/shangou02.jpg','al':"今日大牌"},{"hre":'#',"sr":'img/shangou03.jpg','al':"今日大牌"},{"hre":'#',"sr":'img/shangou04.jpg','al':"今日大牌"}],
     [{"hre":'#',"sr":'img/shangou000.jpg','al':"今日大牌"},{"hre":'#',"sr":'img/shangou001.jpg','al':"今日大牌"},{"hre":'#',"sr":'img/shangou002.jpg','al':"今日大牌"},{"hre":'#',"sr":'img/shangou003.jpg','al':"今日大牌"},{"hre":'#',"sr":'img/shangou004.jpg','al':"今日大牌"}]
];
 // 楼层定位导航内容
var floorArr = ['进口海购','活色生鲜','食品饮料','个护厨卫','母婴玩具','精品家居','流行百货','手机家电','1号团购','闪购','返回顶部'];
// 页面尾部文字
var footerArr = [
       {"hre":'#',"dt":'新手入门',"dd":['购物流程','会员制度','订单查询','发票制度','常见问题']},
       {"hre":'#',"dt":'支付方式',"dd":['货到付款','网上支付','银行转账','礼品卡支付','其他支付']},
       {"hre":'#',"dt":'配送服务',"dd":['配送范围及运费','配送进度查询','自提服务','商品验货与签收']},
       {"hre":'#',"dt":'售后保障',"dd":['退换货政策','退换货流程','退款说明','购买延保服务','联系客服']},
       {"hre":'#',"dt":'商家合作',"dd":['商家入驻','商必赢','平台规则','企业采购']}
    ];