// 轮播图
var pic = document.querySelectorAll(".lun li");
var quan = document.querySelectorAll("ol li");
var length = quan.length;
var index = 0;
var timer = null;
for(var i=0;i<length;i++){
	quan[i].index = i;
	quan[i].onmouseover=function(){
		clearInterval(timer);
		for(var i=0;i<length;i++){
			pic[i].className = "";
		}
		index = this.index;
		pic[this.index].className = "active";
	}
	quan[i].onmouseout=function(){
		timer = setInterval(next,3000);
	}
}
function next(){
	index++;
	if(index>length-1){
		index=0;
	}
	for(var i=0;i<length;i++){
		pic[i].className = "";
	}
	pic[this.index].className = "active";
}
timer = setInterval(next,3000);