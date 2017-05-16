# Make-home-to-shangcheng2
商城网站制作
采用原生JS实现的交互效果

1、用 JS 封装了类和属性,解决各浏览器下对dom选取的兼容问题 
     
     function　$(name,obj){
          obj = obj || document;
          var oTag = name.charAt(0);//获取传入的参数第一位
          var aEle = obj.getElementsByTagName( '*' );//获取页面所有的元素标签
           var arr = [ ]; 
           if( oTag == '#' ){
                  var Id = name.substring(1);
                  return document.getElementById( Id );
            }else if( oTag == '.' ){
                  var aClass = name.substring(1);
                  for( var i=0 ; i<aEle.length ; i++){
                      var aSplit = aEle[ i ].className.split(' ');//将className用空格分隔出来
                      for(var j=0 ; j<aSplit.length ; j++){
                             if( aSplit[ j ] == aClass ){
                                   arr.push( aEle[ i ] );
                                   break ;
                              }
                       }
                     }
                     return arr;
                } else { 
                  return obj.getELementByTagName(name);
                }
       }
2、因为是模拟的1号店官网，所以在搜索框搜索数据时，采用了JSONP 跨域 。<br/>
   
   跨域：即 域名、协议、端口 有任何一个不同，都会被当做不同的域，简言之就是因为JS 同源策略 的限制，a.com域名下的JS无非操作b.com或c.com下的对象     
   同源策略： 它是浏览器最核心也是最基本的安全功能，一种约定，所谓同源 是指域名、协议、端口都相同。
   
   域名: 是IP地址的外号，让网页可以通过域名来访问指定的网页，域名必须经过 DNS 解析之后才能使用。
   
   DNS服务器： 就是把IP地址和域名关联起来的服务器。
   
	* host ：window ->system32 ->driver ->etc
	* 127.0.0.1  www.baidu.com
	* #就是host中的注释。
      
   协议：不同服务器之间用来通信的约定。
	
      * file 协议 ： 本地协议 ；
	* http（浏览网页的协议）/ https（浏览网页的协议，需要安全证书）
	* ftp 协议 ： 共享文件。
	* svn... 另一种文件共享协议
      
   解决跨域的几种方式：
      I、修改后端文件给权限
         
         * XMLHttprequest 配合服务端来解决，请求后端文件的时候涉及跨域问题，让后端设置一个权限，【Access-Control-Allow-Origin】就可以实现跨域问题，但是弊端是 XMLHttpRequest 因为浏览器版本不一样，低版本的支持程度不一样，可用 XDomainRequest 解决【IE10以下】的跨域问题。
     
     II、服务器代理方式：A  B  C
	
            * 通过ajax去访问同源下的后端资源，而后端资源又能访问需要的资源，就可以实现跨域。
            * 缺点：需要后端配合，同时如果需求复杂就会增加开发成本。
      
     III、FLASH文件跨域 【操作复杂繁琐】
            
      IV、iframe 跨域 
            
            * img.src : 这个标签专门解析图片 、link.href 专门解析css样式 、script.src 专门解析js代码
    
      V、JSONP跨域：是JSON with padding （填充式JSON或参数式JSON），由回调函数和数据组成。【只能用get方式请求】把请求的JSON数据已回调函数的方式填充到函数参数中传输数据，实现跨域。
      
          * 回调函数的名字一般在请求中指定 ， 例： http://free.net/json/?callback = fn ;
          * 数据就是传入回调函数中的JSON数据
          * JSONP 是通过 动态 <script> 元素使用，使用时可以为 src 属性指定一个跨域 URL 。      
            var script = document.creatElement（'script'）;
            script.src = "http://free.net/json/?callback = fn";
            document.body.insertBefore( script , document.body.firstChild );
