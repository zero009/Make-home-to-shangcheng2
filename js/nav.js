function num1Store(data){
      var seaDown = document.getElementById('seaDown');
      seaDown.innerHTML= data.value;
  }
function num2Store(data){
      var seaDown = document.getElementById('seaDown');
      seaDown.innerHTML= data.value;
  }
window.onload = function(){
// 登陆/注册
   var toLand = document.getElementById('toLand');
   var dlu = document.getElementById('dlu');
   var oLi = dlu.getElementsByTagName('li')[0];
   var dluoI = $('.active')[0].getElementsByTagName('i')[0];
   console.log(dluoI);
    oLi.onmouseover = function(){
        toLand.style.display = 'block';
        dluoI.style.backgroundPosition=' 20px -796px';
    }
    oLi.onmouseout = function(){
        toLand.style.display = 'none';
        dluoI.style.backgroundPosition=' 20px -858px';
    }
    // 地区选择
    var area = document.getElementById('area');
    var quyu = document.getElementById('quyu');
    var areaLi = area.children[0];
    var areaA = areaLi.children[0];
    var qyABox = quyu.getElementsByTagName('a');
    var dqTime = '';
    areaLi.onmouseover = function(){
        clearTimeout(dqTime);
        quyu.style.display = 'block';
        areaA.className = 'dqOld';
    }
    area.onmouseout = function(){
        dqTime = setTimeout(function(){
        quyu.style.display = 'none';
        areaA.className = 'dqSta';
      },500);
    }
    quyu.onmouseover = function(){
        clearTimeout(dqTime);
        this.style.display = 'block';
        areaA.className = 'dqOld';
    };
    for(var i=0;i<qyABox.length;i++){
        qyABox[i].onclick = function(){
          areaA.innerHTML = '';
          areaA.innerHTML = this.innerHTML;
        } 
    }
// 搜索框下拉栏
	var choSea = document.getElementById('choSea');
  var choTab = document.getElementById('choTab');
	var oA = choTab.getElementsByTagName('a');
	var oI = choTab.getElementsByTagName('i')[0];
  var seaInpBox = document.getElementById('seaInpBox');
  var seaInp = $('.seaInp')[0];
  var seaUl = $('.seaUl')[0];
  var seaData = $('.seaData')[0];
  var seaTime = '';
	choTab.onmouseover = function(){
        oA[1].style.display = 'block';
        choSea.style.overflow="visible";
        oI.className = 'active';
  }
  choTab.onmouseout = function(){
         oA[1].style.display = 'none';
    	   choSea.style.overflow="hidden";
    	   oI.className = '';
  }
  oA[1].onclick = function(){
		if(this.onOff){
			  oA[0].innerHTML = '商品' ;
		    oA[1].innerHTML = '店铺' ;
		    oI.className = '';
		    this.style.display = 'none';
		    choSea.style.overflow="hidden";
		}else{
			oA[0].innerHTML = '店铺' ;
			oA[1].innerHTML = '商品' ;
			this.style.display = 'none';
			choSea.style.overflow="hidden";
			oI.className = '';
		}
    this.onOff = !this.onOff;
	}
  seaInp.onclick = function(){
    this.value = '';
    seaDown.style.display='block';
    var script = document.createElement('script');
    script.src = 'http://search.yhd.com/get_new_keywords.do?keyword='+this.value+'&leaf=0&flag=v1&hotSearchFlag=new&newSmartBoxFlag=new&callback=num2Store';
    document.body.appendChild(script);
  }
  seaInpBox.onmouseover = function(){
     if(!seaInp.value){
        seaDown.style.display = 'block';
     }else{
        keyUp();//调用AJAX数据
     }
  }
  seaInpBox.onmouseout = function(){
    seaTime = setTimeout(function(){
      seaDown.style.display='none';
    },300)
  }
  seaDown.onmouseover = function(){
    clearTimeout(seaTime);
    this.style.display = 'block';
  }

  function keyUp(){//键盘抬起
     seaInp.onkeyup = function(){
       var script = document.createElement('script');
       if(this.value!=''){
          script.src = 'http://search.yhd.com/get_new_keywords.do?keyword='+this.value+'&leaf=0&flag=v1&hotSearchFlag=new&newSmartBoxFlag=new&callback=num1Store';
       }else{
          script.src = 'http://search.yhd.com/get_new_keywords.do?keyword='+this.value+'&leaf=0&flag=v1&hotSearchFlag=new&newSmartBoxFlag=new&callback=num2Store';
       }
       document.body.appendChild(script);
     }
  }
  
// 购物车下拉效果
	var shoppor = document.getElementById('shopper');
  var shopShow = document.getElementById('shop_show');
    shoppor.onmouseover = function()
    {
    	shopShow.style.display = 'block';
    }
    shoppor.onmouseout = function()
    {
    	shopShow.style.display = 'none';
    }
// banner1展开-收起
    var banner1= $('.banner')[0];
    var aS = banner1.children;
    var onOff = true;
    setTimeout(function(){
         aS[0].children[0].src = "img/banner2.jpg";
         aS[1].style.backgroundPositionX = '-136px';
         aS[1].innerHTML = '展开';
    },2000);
    aS[1].onclick = function(ev){
        if(onOff){
             aS[0].children[0].src = "img/banner1.jpg";
             this.style.backgroundPositionX = '-64px';
             this.innerHTML = '收起';
             onOff = false;
        }else{
            aS[0].children[0].src = "img/banner2.jpg";
            this.style.backgroundPositionX = '-136px';
            this.innerHTML = '展开';
            onOff = true;
        }
    }
/* 商品分类导航区*/
// 主要内容横栏
    var mainNav = document.getElementById('main_nav');
    var oLi = mainNav.getElementsByTagName('li');
    var aLi = oLi[0];//定点清洗
    for(var i=0 ; i<oLi.length ; i++){
    	oLi[i].onclick = function(){
        aLi[0].className = '';
    		this.className = 'visited'
        aLi = this ;
      }
    }
// 商品分类一级导航纵栏
    var sideUl = document.getElementById('sideNav');
    var sideLi = sideUl.children;
    var sideI = sideUl.getElementsByTagName('i');
    var sideLia = sideLi[0];//定点清洗
    var bp = [];
    for(var i=0;i<sideI.length;i++){
        // sideI[i].style.backgroundPositionY =-i*30 + 'px';不兼容火狐
        bp.push(-i*30+'px');
        sideI[i].style.backgroundPosition ='8px '+bp[i]+'';
    }
    for(var i=0;i<sideLi.length;i++){
        sideLi[i].onmouseover = function(){
            sideLia.className = '';
            sideLia.children[1].style.display = 'none';
            this.className = 'cur';
            sideLia = this;
            this.children[1].style.display = 'block';
        }
        sideLi[i].onmouseout = function(){
            this.className = '';
            this.children[1].style.display = 'none';
        } 
    }
// 商品分类悬浮层文本加载
    var listArr=creatArr(listBox);
    var rightArr=creatArr(listBox2);
   // 遍历数据
    for(var i=0;i<listArr.length;i++){
        var sideLoad = $('.side_load')[i]
        var listWrap = $('.list_wrap')[i];
        var leftSort = $('.left_sort',listWrap)[0];
        sideLoad.style.display = 'none';
        navItem(listArr[i],listWrap,leftSort);
        aColor(listWrap);
        navItem2(rightArr[i],leftSort);
    }
   function navItem(obj,obj2,obj3){
       for(var i=0 ; i<obj.length;i++){//创建div
           var oDiv = document.createElement('div');
           for(var j=0 ;j<obj[i].length;j++){//在当前的div下创建dl、dt
               var dl = document.createElement('dl');
               oDiv.appendChild(dl);
               dl.className = 'clearfix';
               dl.setAttribute('data-item',j+1);
               dl.innerHTML = '<dt class="clearfix"><a href='+obj[i][j].hre+'>'+obj[i][j].dt+'</a></dt>'
               for(var k=0;k<obj[i][j].dd.length;k++){//在当前的dl下创建dd
                  var dd = document.createElement('dd');
                  dl.appendChild(dd);
                  dd.innerHTML = '<a href='+obj[i][j].hre+'>'+obj[i][j].dd[k]+'</a>';
               }
            }//三目运算是为判断悬浮层有无左侧栏
           obj3?obj2.insertBefore(oDiv,obj3):obj2.appendChild(oDiv);
           oDiv.className = 'list';
           oDiv.setAttribute('data-list',i+1);
        }
   }
   //二级菜单最右侧
   function navItem2(obj,obj3){
        if(obj3){
          var ol = document.createElement('ol');
          obj3.appendChild(ol);
          var li = '';
          for(var i=0;i<obj.length;i++){
              li += '<li>'+
                        '<a href="'+obj[i].hre+'">'+
                            '<p>'+obj[i].p+'<br/>'+
                               '<span>'+obj[i].span+'</span>'+
                            '</p>'+
                            '<img src="'+obj[i].sr+'" alt="'+obj[i].p+'" title="'+obj[i].p+'" />'+
                        '</a>'+
                    '</li>';
          }
          ol.innerHTML = li ;
        }
   }
   // 随机创建热门字
   function aColor(obj){
     var aBox = obj.getElementsByTagName('a');
     var aLen = aBox.length;
     var nu11 = [];
     for(var i=0;i<aLen;i++){
       nu11.push(Math.round(Math.random()*aLen));
     }
     nu11.length = 30;
     for(var attr in nu11){
       if(aBox[nu11[attr]]){
         aBox[nu11[attr]].className="color";
       }
     }
   }  
    
/* 轮播图*/
    var mainBanner = document.getElementById('main_banner'),
        mainImg = document.getElementById('main_img'),
        imgList= document.getElementById('img_list'),
        imgShow = document.getElementById('img_show'),
        imgBtn = document.getElementById('btn');
        oPrev = imgBtn.children[0],
        oNext = imgBtn.children[1],
        ol = imgShow.children[0]
        olLi = ol.children,
        n=0,timer=null;
    
    // 加载轮播图
    imgList.innerHTML = ' ';
    imgList.innerHTML=imgCon();
    function imgCon(){
      var imgli='';
      for(var i=0 ; i<banArr.length ; i++){
        imgli += '<li>'+
                        '<a href="'+banArr[i].hre+'">'+
                           '<img src="'+banArr[i].sr+'" alt="'+banArr[i].al+'" title="'+banArr[i].al+'" />'+
                        '</a>'+
                '</li>';
        var li = document.createElement('li');
        ol.appendChild(li);  
      }
      return imgli ;
    }
    var imgBox = imgList.getElementsByTagName('img'),
        imgAbox = imgList.getElementsByTagName('a'),
        imgLi = imgList.children,
        iW = imgBox[0].offsetWidth;
    //计算imgList总宽度4500
    imgList.style.width = iW * imgBox.length + 'px';
    olLi[0].style.background = '#ff3c3c';
    //初始化打开页面加载轮播图
    timer = setInterval(function(){
      n++;
      moveBanner(imgList,imgLi,iW,10);fn();
    },3000);
    oPrev.onclick = function(){
        n--;
        moveBanner(imgList,imgLi,iW,10);fn();
    }
    oNext.onclick = function(){
       n++;
       moveBanner(imgList,imgLi,iW,10);fn();
    }
    // 鼠标移入轮播区域
    mainImg.onmouseover = function(){
        imgBtn.style.display = 'block';
        clearInterval(timer);
    }
    // 鼠标移出轮播区域
    mainImg.onmouseout = function(){
        imgBtn.style.display = 'none';
        timer = setInterval(function(){
          n++;
          moveBanner(imgList,imgLi,iW,10);
          fn();
        },3000);
    }
    // 点击图片标志
    for(var i=0;i<olLi.length;i++){
        olLi[i].index = i;
        olLi[i].onclick = function(){
            n = this.index;
            moveBanner(imgList,imgLi,iW,10);fn();
        }
    }
    //背景与圆点设置 
    function fn(){
      for(var i=0;i<olLi.length;i++){
            olLi[i].style.background = '#ccc';
        }
      olLi[(imgLi.length + n) % imgLi.length].style.background = '#ff3c3c';
      if(n == -1){
           mainBanner.style.background = banArr[imgLi.length-1].bg;
      }else{
           mainBanner.style.background = banArr[n].bg;
      }
    }
// 1号专享
    var zxUl = $('.zx')[0];
    var zxLi = $('li',zxUl);
    var zxLia = $('a',zxUl);
    for(var i=0 ; i<zxLi.length;i++){ 
       zxLia[i].onmouseover = function(){
            var _this = $('.zxImg',this)[0];
            move(_this,{top:-35,opacity:0},100,'linear',function(){
                    _this.style.top = '35px';
                    move(_this,{top:0,opacity:1},100);
                }); 
        }
    }
//充值中心
   var reCh = $('.recharge')[0],
       reTit = $('.recharge_tit')[0],
       colBtn = $('.close_btn')[0],
       reCon = $('.re_con'),
       aTit = reTit.children,
       zxRe = $('.zx_re');
   for(var i=0;i<aTit.length;i++){
      aTit[i].index = i ;
      aTit[i].onmouseover = function(){
           qx(zxRe,aTit,reCon,'display','none');
           this.className = 'hover';
           reCon[this.index].style.display = 'block';
      }
   };
   // 关闭充值对话框打开专享
   colBtn.onclick = function(){
      move(reCh,{top:398,opacity:0},500);
      $('#zx').style.display = 'block';
   };
   //鼠标移动到最下方显示充值对话框
   for(var i=0 ;i<zxRe.length;i++){
        zxRe[i].index = i ;
        zxRe[i].onmouseover = function(){
            $('#zx').style.display = 'none';
            qx(zxRe,aTit,reCon,'display','none');
            aTit[this.index].className = 'hover';
            reCon[this.index].style.display = 'block';
            move(reCh,{top:206,opacity:1},500);
        }
   } 
  var bigW = document.documentElement.clientWidth;
  window.onresize = function(){ 
     var smallW = document.documentElement.clientWidth;
     if(smallW<bigW){
        document.getElementsByTagName('html')[0].style.overflow = 'auto';
     }else{
        document.getElementsByTagName('html')[0].style.overflowX = 'hidden';
     }

   }
}