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
