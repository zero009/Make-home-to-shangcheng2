
//推荐品项展示区
   var showUl = document.getElementById('show_ul');
   var showLi = showUl.children;
   var showSc = $('.show_screen')[0];
   var prevSc = $('.prevSc')[0];
   var nextSc = $('.nextSc')[0];
   var r = 0;
   var showLiW=showLi[0].offsetWidth;
   for(var i=0;i<showLi.length;i++){
      showLi[i].innerHTML = show(showArr[i]);
      var sLiA = showLi[i].getElementsByTagName('a');
      var liDiv = showLi[i].getElementsByTagName('div');
      liDiv[0].style.border = "none";
      // 放大效果
      for(var j=0;j<sLiA.length;j++){
          sLiA[j].onmouseover = function(){
              move(this,{height:180},10)
              this.style.transform = 'scale(1.1)';
          }
          sLiA[j].onmouseout = function(){
              this.style.transform = 'scale(1)';
          }
      }
   }
   function show(showArr){
      var li = '';
      for(var i=0;i<showArr.length;i++){
          li += '<a href="'+showArr[i].hre+'">'+
                            '<div class="showtext">'+
                                '<p>'+showArr[i].p+'</p>'+
                                '<strong>'+showArr[i].st1+'</strong>'+
                                '<strong>'+showArr[i].st2+'</strong>'+
                            '</div>'+
                            '<img src="'+showArr[i].sr+'" alt="'+showArr[i].p+'" title="'+showArr[i].p+'"/>';
                '</a>';
     }
     return li ;
   }
   showSc.onmouseover = function(){
       prevSc.style.display = 'block';
       nextSc.style.display = 'block';
   }
   showSc.onmouseout = function(){
       prevSc.style.display = 'none';
       nextSc.style.display = 'none';
   };
   prevSc.onclick = function(){
      r--;
      if(r<-2){r=-1;};
      moveBanner2(showUl,showLi,showLiW,r,100);
   }
   nextSc.onclick = function(){
     r++;
     if(r>=3){r=1;};
     moveBanner2(showUl,showLi,showLiW,r,100);
   }
//今日必团
  var dayCent = document.getElementById('day_buy_cent'),
      daySide = document.getElementById('day_buy_side');
  //数据加载 
  var centerUl = document.createElement('Ul'),
      centerOl = document.createElement('ol');
  dayCent.appendChild(centerUl);
  daySide.appendChild(centerOl);
  centerUl.innerHTML = dayBuyText(dayBox1);
  centerOl.innerHTML = dayBuyText(dayBox2);
  function dayBuyText(arr){
    var con = '';
    for(var i=0 ; i<arr.length;i++){
      con += '<li>'+
                  '<a href="'+arr[i].hre+'">'+
                      '<p>'+arr[i].p+'</p>'+
                      '<span>'+arr[i].span+'</span>'+
                      '<img class="cenMov" src="'+arr[i].sr+'" title="'+arr[i].al+'"alt="'+arr[i].al+'" />'+
                  '</a>'+
              '</li>';
    }
    return con ;
  }
  // 效果
   var cenMov = $('.cenMov');
   for(var i=0;i<cenMov.length;i++){
       cenMov[i].onmouseover = function(){
            move(this,{left:30},100);
       }
       cenMov[i].onmouseout = function(){
           move(this,{left:40},100);
      }
   }  
//1-9F 数据加载
  var modeTi = $('.mod_title');
  var modDiv1 = $('.mod_div1');
  var modOl= $('.modOl');
  var modC = $('.mod_content');
  var modS = $('.mod_S');
  modTitle(modeTi,biTit,'ul');// 加载大标题
  modTitle(modDiv1,smTit,'ol',modOl);// 加载小标题
  mod_s(modS,msJson);//加载mod_s中的数据
  mod_div();//加载mod_div中的数据
  price();//加载1号团的price数据
  mod_Div();//加载8F下的mod_Div中的数据
  
  function modTitle(obj,json,o,obj3){
      var liCon = '';
      var tiArr = creatArr(json);//JSON转数组
      for(var i=0;i<tiArr.length;i++){//共9楼
         liCon = ''; 
         var t = document.createElement(o);
         !!obj3?obj[i].insertBefore(t,obj3[i]):obj[i].appendChild(t);
         for(var j=0;j<tiArr[i].length;j++){//每一楼下li数据
            liCon += '<li>'+
                       '<a href="'+tiArr[i][j].hre+'" title="'+tiArr[i][j].aText+'">'+tiArr[i][j].aText+'</a>'+
                    '</li>';
          }
        t.innerHTML = liCon ;
      }
  }
  function mod_div(){
      for(var i=0;i<modC.length;i++){
        var modarr = creatArr(modArr);
        var moddiv = $('.mod_div',modC[i]);
        modd(moddiv,modarr[i]);
      }
  }
  function mod_Div(){
      var mod8 = $('.mod_eight')[0];
      var modD = $('.mod_Div',mod8);
      var arr = creatArr(mdJson);
      for(var i=0;i<modD.length;i++){
         modD[i].innerHTML = '<a href="'+arr[i].hre+'" title="'+arr[i].p+'" />'+
                                '<img  _src="'+arr[i].sr+'" alt="'+arr[i].p+'" />'+
                                '<p>'+arr[i].p+'</p><b>'+arr[i].b+'</b>'+
                             '</a>';
      }
  }
  function mod_s(obj,json){
    var s=0;
    for(var key in json){
     obj[s].innerHTML = '<a href="'+msJson[key].hre+'">'+
                        '<div class="mod_s">'+
                          '<p>'+msJson[key].p+'</p>'+
                          '<span>'+msJson[key].span+'</span>'+
                          '<em>'+msJson[key].em+'</em>'+
                        '</div>'+
                        '<img _src="'+msJson[key].sr+'" title="'+msJson[key].p+'" alt="'+msJson[key].p+'" />'+  
                     '</a>';
      s++;
    }
  }
  function modd(obj,arr){//加载mod_div里的数据
      var con = '';
      for(var i=0;i<arr.length;i++){
          con= '<a href="'+arr[i].hr+'">'+
                 '<p>'+arr[i].p+'</p>'+
                 '<span>'+arr[i].span+'</span>'+
                 '<img _src="'+arr[i].sr+'" title="'+arr[i].p+'" alt="'+arr[i].p+'" />'+
              '</a>';
          obj[i].innerHTML = con ;
      }
  }
  function price(){
     var oneP = $('.price');
     var arr = creatArr(yhTuan);
     for(var i=0;i<arr.length;i++){
          var t='';
          for(var j=0;j<arr[i].length;j++){
             if(i==0){ 
                t += '<a href="'+arr[i][j].hre+'" title="'+arr[i][j].p+'">'+
                         '<img _src="'+arr[i][j].sr+'" alt="'+arr[i][j].p+'">'+
                         '<u>'+arr[i][j].u+'</u>'+
                         '<em><s>'+arr[i][j].s+'</s>人已购买</em>'+
                    '</a>';
             }else{
                t += '<a href="'+arr[i][j].hre+'">'+
                         '<img _src="'+arr[i][j].sr+'" alt="'+arr[i][j].p+'"/>'+
                         '<p>'+arr[i][j].p+'</p>'+
                         '<span>'+
                            '<em><s>'+arr[i][j].s+'</s>人已购买</em>'+
                            '<b>'+arr[i][j].b+'</b>'+
                            '<i>参考价<del>'+arr[i][j].del+'</del></i>'+
                         '</span>'+
                     '</a>';
             }
         }
        oneP[i].innerHTML = t ;
     }
  }
// 内容区图片轮播效果
  var modDiv2  = $('.mod_div2');
  for(var i=0;i<modDiv2.length-1;i++){
      var arr = creatArr(ulArr);
      element(modDiv2[i],arr[i]);
      moveBannerItem(modDiv2[i]);
  }
  function element(obj,arr){//创建轮播元素
      var t1 ='',t2 = '';
      for(var i=0;i<arr.length;i++){
          t1 += '<li class="clearfix"><a href="'+arr[i].hre+'" ><img _src="'+arr[i].sr+'" /></a></li>';
          t2 += '<li class="clearfix"><span></span></li>';
      }
     obj.innerHTML = '<ul>'+t1+'</ul><ol>'+t2+'</ol>';
  }
  function moveBannerItem($div){//轮播效果
  		var k = 0 ;
  		var modUl = $div.children[0];
	    var modOl = $div.children[1];
	    var modLi = modUl.getElementsByTagName('li');
	    var modIm = modUl.getElementsByTagName('img');
	    var modOi = modOl.getElementsByTagName('li');
      var modSp = modOl.getElementsByTagName('span');
	    var iw = modIm[0].offsetWidth;
      var timer2 =null;
      run();
      function run(){
          timer2 = setInterval(function(){
          k++;
          if(k>=modLi.length){
            k=0;
          };
          qx(modSp,modSp,modSp,'width','0');
          move(modSp[k],{width:30},1000);
          moveBanner2(modUl,modLi,iw,k,1000);
        },1500);
      };
      $div.onmouseover = function(){
         clearInterval(timer2);
      }
      $div.onmouseout = function(){
        run();
      };
      for(var i=0;i<modOi.length;i++){//下标效果
         modOi[i].index = i;
         modOi[i].onmouseover = function(){
            k = this.index;
            qx(modSp,modSp,modSp,'width','0');
            modSp[k].style.width = '30px';
            moveBanner2(modUl,modLi,iw,k,10); 
        }
      }
      
  }
// 闪购
   var shangouBtn = document.getElementById('shangou_btn');
   var shangouCon = document.getElementById('shangou_con');
   var oLiBtn = shangouBtn.getElementsByTagName('li');
   var iBtn = shangouBtn.getElementsByTagName('i')[0];
   // 加载数据
   shangouCon.innerHTML = shangou() ;
   function shangou(){
      var gouCon = '';
      for(var i=0 ; i<sgArr.length;i++){
          var oDivCon = '';
          for(var j=0 ;j<sgArr[i].length;j++){
              oDivCon +='<div class="sgSame clearfix">'+ 
                          '<a href="'+sgArr[i][j].hre+'">'+
                            '<img _src="'+sgArr[i][j].sr+'" alt="'+sgArr[i][j].al+'" title="'+sgArr[i][j].al+'" />'+
                          '</a>'+
                          '<div class="sgSub sgSub'+j+'">'+
                              '<p class="oP"></p>'+
                          '</div>'+
                        '</div>';
          }
          gouCon += '<div class="item item'+i+'">'+oDivCon+'</div>';
       }
       return gouCon ;
   };
   
   // 倒计时
   var sgSame = $(".sgSame");
   var sgSub = $(".sgSub");
   var oP = $(".oP");
   var numP = oP.length; 
   for(var i=0;i<sgSub.length;i++){
       sgSame[i].index = i ;
       sgSame[i].onmouseover = function(){
           move(sgSub[this.index],{bottom:0,opacity:1},100);
       }
       sgSame[i].onmouseout = function(){
           move(sgSub[this.index],{bottom:-30,opacity:0},100);
       }
   }
   downTime();
   function downTime(){
     iNew = new Date('February 16,2016 23:02:00');
     var strT = ''; 
     for(var i=0;i<oP.length;i++){
        (function(i){
           var tim=setInterval(function(){
               iNow = new Date();
               var t = Math.floor((iNow - iNew)/1000);
               if(t>=0){//判断时间差是否已经到了零点
                     var iD = Math.floor(t/86400);//天
                     var iH = Math.floor(t%86400/3600);//时
                     var iSec = Math.floor(t%86400%3600/60);//分
                     var iM = Math.floor(t%60);//秒
                     strT = '剩余'+iD+'天'+iH+'小时'+iSec+'分'+iM+ '秒';
                     oP[i].innerHTML = strT;
                }else{
                  clearInterval(tim);
                }
           },1000);
        })(i); 
     }
   }
   // 选项卡实现效果
   var aABtn = oLiBtn[0].children[0];
   var item = $('.item');
   var atem = item[0] ;
   for(var i=0;i<oLiBtn.length;i++){
       oLiBtn[i].index = i;
       oLiBtn[i].onmouseover = function(){
          aABtn.style.color = '#666';
          this.children[0].style.color = '#c40';
          aABtn = this.children[0];
          iBtn.style.left = this.index*70 +50+'px';
          atem.style.display = 'none';
          item[this.index].style.display = 'block';
          atem = item[this.index];
       }
   }
//遮罩效果
  var modBox = $('#mod_box');
  var imgW = $('img',modBox);
  var imgL = imgW.length;
  for(var j=0;j<imgL;j++){
     imgW[j].onmouseover = function(){
         this.style.opacity = '1';
         this.style.background = '#ccc';
         move(this,{opacity:0.3},500,'bounceIn',function(){
              move(this,{opacity:1},500)
         });
     }
  };
//楼层定位导航
   var floor = document.getElementById('floor');
   var modBox = document.getElementById('mod_box');
   // 创建楼层导航元素
   floorCon(floor, floorArr.length);
   function floorCon(obj,len){
      var floorH='';
      for(var i=0;i<len;i++){
        floorH+='<a href="javascript:;void" title="'+floorArr[i]+'"><i></i><em>'+floorArr[i]+'</em></a>';
      }
      obj.innerHTML = floorH;
   }

   var floorA = floor.getElementsByTagName('a');
   var floorI = floor.getElementsByTagName('i');
   var floorAE = floor.getElementsByTagName('em');
   var aLen = floorA.length;
   var tt = ['8px','-28px','-68px','-108px','-148px','-188px','-228px','-268px','-308px','-348px','-388px'] ;
   var navNow = 0;
  // 滑动滚动条显示导航
    window.onscroll = window.onresize = function(){ 
      //1-9楼图片延迟加载
      var iH = window.innerHeight || document.documentElement.clientHeight;
      var iScroll = window.pageYOffset || document.documentElement.scrollTop;
      var iB = iH + iScroll;
      for(var i=0;i<imgL;i++){
          var aImgPos = getPos(imgW[i]).t;
          if(aImgPos < iB){
            if(imgW[i].getAttribute('_src',2)){
               imgW[i].src = imgW[i].getAttribute('_src'); 
               imgW[i].removeAttribute('_src');
            }
          }
      };
      // 固定搜索导航
      var fixNav = $('#fixNav');
      var mainC = $('#main_content');
      var fixT = $('.text')[0];
      var mainT =mainC.offsetTop-140;
      var fixImg = $('.fixImg')[0];
      if(mainT<scrollT()){
        fixNav.style.display = 'block';
        move(fixT,{top:10,opacity:1},1000,'easeIn')
        move(fixImg,{top:0,opacity:1},1000,'easeIn');
      }else{
        fixNav.style.display = 'none';
        move(fixT,{top:-10,opacity:0},1000,'easeIn')
        move(fixImg,{top:30,opacity:0},1000,'easeOut');
      };
      // 侧边栏固定导航
      var modT = modBox.offsetTop-300;
      if(modT<scrollT()){
        floor.style.display = 'block';
      }else{
        floor.style.display = 'none';
      }
      for(var i=0;i<$('.modF').length;i++){
          var modF = $('.modF')[i];
          var modFt = $('.modF')[i].offsetTop-300;
          if(modFt<scrollT()){
              qx(floorA,floorA,floorAE,'display','none');
              qx(floorA,floorA,floorI,'display','block');
              floorA[i].className = 'flhover';
              floorAE[i].style.display = 'block';
              floorI[i].style.display = 'none';
              navNow = i ;
          }
      }
    }
    //点击导航定位楼层 
    for(var i=0;i<floorA.length;i++){
      floorI[i].style.backgroundPosition = '6px '+tt[i]+'';
      floorA[i].index = i;
      floorA[i].onclick = function(){ 
        if(this.index<(aLen-1)){
           var modH = $('.modF')[this.index].offsetTop;
           window.scrollTo(0,modH-100);
        }else{
          window.scrollTo(0,0);
        }
      }
      floorA[i].onmouseover = function(){
        if(this.index != navNow){
            this.className = 'flhover';
            floorAE[this.index].style.display = 'block';
            floorI[this.index].style.display = 'none';
        }
      }
      floorA[i].onmouseout = function(){
          if(this.index != navNow){
             this.className = '';
             floorAE[this.index].style.display='none';
             floorI[this.index].style.display = 'block';
          }
      }
    }
    function getPos(obj){
       var left = 0;
       var top1 = 0;
       var bL = 0,bT = 0;
       while(obj){
          bL = isNaN(bL)?0:bL;
          bT = isNaN(bT)?0:bT;
          left+=obj.offsetLeft+bL;
          top1+=obj.offsetTop+bT;
          obj = obj.offsetParent;
          if(obj){
            bL = parseInt(getStyle(obj,'borderLeftWidth'));
            bT = parseInt(getStyle(obj,'borderTopWidth'));
          } 
        }
      return {
            l:left,
            t:top1
      };
    }
    function scrollT(){
      return window.pageYOffset || document.documentElement.scrollTop;
   }
// 页面尾部文字加载
   var footer = document.getElementById('footer_text');
   for(var i=0;i<footerArr.length;i++){
      var dl = document.createElement('dl'),
          dt = document.createElement('dt');
      dt.innerHTML = footerArr[i].dt ;
      dl.appendChild(dt);
      for(var j=0;j<footerArr[i].dd.length;j++){
          var dd = document.createElement('dd'),
              a = document.createElement('a');
          a.href = footerArr[i].hre;
          a.innerHTML = footerArr[i].dd[j];
          dl.appendChild(dd).appendChild(a);
      }
      footer.appendChild(dl);
   }
   