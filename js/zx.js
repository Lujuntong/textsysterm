// 全屏轮播
window.onload = function() {
	var oScreenBanner = document.getElementsByClassName('screen-banner')[0];
	var oAllScreen = document.getElementsByClassName('all-screen')[0];
	var arrScreen = document.getElementsByClassName('screen-one');
	var screenW, screenH;
	var page = 0;
	var oA=document.querySelectorAll(".headerNav ul li a")

	function resize() {
		//获取屏幕宽高
		screenW = document.documentElement.clientWidth;
		screenH = document.documentElement.clientHeight;
		//设置宽高  总轮播图  大盒子  每一屏
		oAllScreen.style.width = oScreenBanner.style.width = screenW + 'px';
		oScreenBanner.style.height = screenH + 'px';
		oAllScreen.style.height = screenH * arrScreen.length + 'px';
		for (var i = 0; i < arrScreen.length; i++) {
			arrScreen[i].style.width = screenW + 'px';
			arrScreen[i].style.height = screenH + 'px';
		}
		oAllScreen.style.top = -page * screenH + 'px';
	}
	resize()
	window.onresize = resize;

	var inRuning = false;
	//当inRuning为true
	//当inRuning为false
	for(let i=0;i<oA.length;i++){
		oA[i].onclick=function(){
			page=i;
			oAllScreen.style.top=-(page+1)*screenH+"px";
			for(let i=0;i<oA.length;i++){
				oA[i].style.color="";
				
			}
			this.style.color="#FFFFFF";
		}
	}
	function scrollUp() {
		if (!inRuning) {
			inRuning = true;
			//设置一个定时器 当1S过后 滚轮可以继续使用
			setTimeout(function() {
				inRuning = false
			}, 1000);
			if (page > 0) {
				page--;
				oAllScreen.style.top = -page * screenH + 'px';
			}
		}
	}

	function scrollDown() {
		if (!inRuning) {
			inRuning = true;
			setTimeout(function() {
				inRuning = false;
			}, 1000);
			if (page < arrScreen.length - 1) {
				page++;
				oAllScreen.style.top = -page * screenH + 'px';
			}
		}
	}
	addEvent(window, 'mousewheel', mouseWheel);
	addEvent(window, 'DOMMouseScroll', mouseWheel)
	//滚轮事件函数
	function mouseWheel(ev) {
		var oEvent = ev || event;
		if (oEvent.detail) {
			if (oEvent.detail > 0) {
				scrollDown()
			} else {
				scrollUp();
			}
			console.log(oEvent.detail)
		} else if (oEvent.wheelDelta) {
			if (oEvent.wheelDelta > 0) {
				scrollUp();
			} else {
				scrollDown();
			}
			console.log(oEvent.wheelDelta)
		}

	}

	function addEvent(ele, ev, fn) {
		if (ele.attachEvent) {
			ele.attachEvent('on' + ev, fn)
		} else {
			ele.addEventListener(ev, fn);
		}
	}
}
// 遮罩
function zhezhao(){
	var oZhezhao=document.getElementById("zhezhao");
	oZhezhao.style.display="none";
}
var timer1=setTimeout("zhezhao()",5000)




