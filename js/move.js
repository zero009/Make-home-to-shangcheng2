
var Tween = {
	linear: function (t, b, c, d){  //匀速
		return c*t/d + b;
	},
	easeIn: function(t, b, c, d){  //加速曲线
		return c*(t/=d)*t + b;
	},
	easeOut: function(t, b, c, d){  //减速曲线
		return -c *(t/=d)*(t-2) + b;
	},
	easeBoth: function(t, b, c, d){  //加速减速曲线
		if ((t/=d/2) < 1) {
			return c/2*t*t + b;
		}
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInStrong: function(t, b, c, d){  //加加速曲线
		return c*(t/=d)*t*t*t + b;
	},
	easeOutStrong: function(t, b, c, d){  //减减速曲线
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeBothStrong: function(t, b, c, d){  //加加速减减速曲线
		if ((t/=d/2) < 1) {
			return c/2*t*t*t*t + b;
		}
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	elasticIn: function(t, b, c, d, a, p){  //正弦衰减曲线（弹动渐入）
		if (t === 0) { 
			return b; 
		}
		if ( (t /= d) == 1 ) {
			return b+c; 
		}
		if (!p) {
			p=d*0.3; 
		}
		if (!a || a < Math.abs(c)) {
			a = c; 
			var s = p/4;
		} else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	elasticOut: function(t, b, c, d, a, p){    //*正弦增强曲线（弹动渐出）
		if (t === 0) {
			return b;
		}
		if ( (t /= d) == 1 ) {
			return b+c;
		}
		if (!p) {
			p=d*0.3;
		}
		if (!a || a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		} else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},    
	elasticBoth: function(t, b, c, d, a, p){
		if (t === 0) {
			return b;
		}
		if ( (t /= d/2) == 2 ) {
			return b+c;
		}
		if (!p) {
			p = d*(0.3*1.5);
		}
		if ( !a || a < Math.abs(c) ) {
			a = c; 
			var s = p/4;
		}
		else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		if (t < 1) {
			return - 0.5*(a*Math.pow(2,10*(t-=1)) * 
					Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		}
		return a*Math.pow(2,-10*(t-=1)) * 
				Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
	},
	backIn: function(t, b, c, d, s){     //回退加速（回退渐入）
		if (typeof s == 'undefined') {
		   s = 1.70158;
		}
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	backOut: function(t, b, c, d, s){
		if (typeof s == 'undefined') {
			s = 3.70158;  //回缩的距离
		}
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	}, 
	backBoth: function(t, b, c, d, s){
		if (typeof s == 'undefined') {
			s = 1.70158; 
		}
		if ((t /= d/2 ) < 1) {
			return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		}
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	bounceIn: function(t, b, c, d){    //弹球减振（弹球渐出）
		return c - Tween['bounceOut'](d-t, 0, c, d) + b;
	},       
	bounceOut: function(t, b, c, d){//*
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
		}
		return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
	},      
	bounceBoth: function(t, b, c, d){
		if (t < d/2) {
			return Tween['bounceIn'](t*2, 0, c, d) * 0.5 + b;
		}
		return Tween['bounceOut'](t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
	}
}

// 移动函数
function move(obj,json,d,fx,callback){
		var fx= fx ? fx:'linear';//fx指调用的函数名
		var j = {};//创建一个JSON存储起始位置即begin和起始到终止的间距即conut
		for(var attr in json){
			j[attr] = {};
			if(attr == 'opacity'){
				j[attr].begin = parseFloat(getStyle(obj,attr));//起始的位置。
			}else{
				j[attr].begin = parseInt(getStyle(obj,attr));//起始的位置。
			}
			
			j[attr].conut = json[attr] - j[attr].begin;//目标位置减起始位置
		}
		var duration = d;//总时间
		var oldTime = new Date().getTime();
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			var newDate = new Date().getTime();
			var t = newDate - oldTime;//时间差
			if(t > duration){
				t = duration;
			}
			for(var attr in json){
				var v = Tween[fx](t, j[attr].begin,j[attr].conut, duration);
				if(attr == 'opacity'){
					obj.style[attr] = v;
					obj.style.filter = 'alpha(opacity='+(v*100)+')';
				}else if(attr =='zIndex'){
					obj.style[attr] = v;
				}else{
					obj.style[attr] = v + 'px';
				}
			}
			if(t == duration){
				clearInterval(obj.timer);
				callback && callback.call(obj);
			}
		},16);
}
// 样式函数
function getStyle(obj,attr){
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
}
// 类函数
function $(name,obj){
	obj = obj || document;
	var sign = name.charAt(0);
	var oTag = obj.getElementsByTagName('*');
	var arr = [];
	if(sign === '#'){
	   var Id = name.substring(1);
       return document.getElementById(Id);
	}else if(sign === '.'){
		var Aclass = name.substring(1);
        for(var i=0 ; i<oTag.length ; i++){
        	var classBox = oTag[i].className.split(' ');
        	for(var j=0 ; j< classBox.length ; j++){
        		  if(classBox[j] == Aclass){ 
        	        	arr.push(oTag[i]);
        		     	break;
        		  }
        	}
        }
        return arr;
	}else{
		return obj.getElementsByTagName(name);
	}
}
//轮播图移动函数
function moveBanner(obj,li,iW,t){
    if(n == 0){
        li[0].style.position = 'static';
    }
    if(n == li.length-1){
        li[0].style.position = 'relative';
        li[0].style.left = iW * li.length + 'px';
    }
    if(n >= li.length){
        li[0].style.position = 'static';
        obj.style.left = 0;
        n = 0;
    }
    if(n == -1){
        li[li.length-1].style.position = 'relative';
        li[li.length-1].style.left = -iW * (li.length)+'px';
    }
    if(n < -1){
        li[li.length-1].style.position = 'static';
        obj.style.left = -iW * (li.length-2)+'px';
        n = li.length-2;
    }
    // 调用移动函数库
    move(obj,{left:-n*iW},t);
}
function moveBanner2(obj,li,iW,n,t){
        if(n == 0){
            li[0].style.position = 'static';
        }
        if(n == li.length-1){
            li[0].style.position = 'relative';
            li[0].style.left = iW * li.length + 'px';
        }
        if(n >= li.length){
            li[0].style.position = 'static';
            n = 0;
        }
        if(n == -1){
            li[li.length-1].style.position = 'relative';
            li[li.length-1].style.left = -iW * (li.length)+'px';
        }
        if(n < -1){
            li[li.length-1].style.position = 'static';
            n = li.length-2;
        }
       // 调用移动函数库
       move(obj,{left:-n*iW},t);
}
//把data中的JSON数据存储到新的数组里
function creatArr(json){
	var newArr = [];
	for(var key in json){
		newArr.push(json[key]);
	}
	return newArr;
}
// 大清洗
function qx(len,obj1,obj2,attr,r){
   for(var j=0;j<len.length;j++){
       obj1[j].className = '';
       obj2[j].style[attr] = r;
    } 
}