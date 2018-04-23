// 导航置顶
var fixed = document.querySelector(".fixed");
window.onscroll = function(){
	var srollTop = document.body.scrollTop || document.documentElement.scrollTop;
	if(srollTop >= 254){
		fixed.style.position = "fixed";
		fixed.style.top = 0;
		fixed.style.zIndex = 15;
		fixed.style.paddingLeft = "436px";
		fixed.style.height = "50px";
		fixed.style.width = "864px";
		fixed.style.lineHeight = "30px";
		fixed.style.backgroundColor = "rgba(255,0,0,0.5)";
	}else if(srollTop <= 254){
		fixed.style = "none";
	}
}
