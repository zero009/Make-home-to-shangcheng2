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
2、因为是模拟的1号店官网，所以在搜索框搜索数据时，采用了JSONP 跨域 
   
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



            var script = document.creatElement（'script'）;
            script.src = "http://free.net/json/?callback = fn";
            document.body.insertBefore( script , document.body.firstChild );
