var pointer = document.querySelector(".pointer");
var small = document.querySelector(".xiao");
var big = document.querySelector(".big");
var bigImg = document.querySelector(".big img");
small.onmouseover=function () {
	pointer.style.display="block";
	big.style.display="block";
}
small.onmouseout=function () {
	pointer.style.display="none";
	big.style.display="none";
}
small.onmousemove=function (event) {
	var oEvent = event;

	var x = oEvent.clientX-small.offsetParent.offsetLeft;
	var y = oEvent.clientY-small.offsetParent.offsetTop+document.body.scrollTop;
	var l = x - pointer.offsetWidth/2;
	var t = y - pointer.offsetHeight/2;

	if(x <= pointer.offsetWidth/2){
		l=0;
	}else if(x >= small.offsetWidth-pointer.offsetWidth/2){
		l=small.offsetWidth-pointer.offsetWidth;
	}
	if(y <= pointer.offsetHeight/2){
		t=0;
	}else if(y >= small.offsetHeight-pointer.offsetHeight/2){
		t=small.offsetHeight-pointer.offsetHeight;
	}

	var newX = (bigImg.offsetWidth-big.offsetWidth)/(small.offsetWidth-pointer.offsetWidth);
	var newY = (bigImg.offsetHeight-big.offsetHeight)/(small.offsetHeight-pointer.offsetHeight);


	pointer.style.left=l + "px";
	pointer.style.top=t + "px";

	bigImg.style.left=-l*newX + "px";
	bigImg.style.top=-t*newY + "px";
}
// 选项卡
var xPic = document.querySelectorAll(".xPic li");
var bimg = document.querySelectorAll(".xiao img");
var length = xPic.length;
for(var i=0;i<length;i++){
	xPic[i].index = i;
	xPic[i].onmouseover=function(){
		for(var i=0;i<length;i++){
			bimg[i].style.display = "none";
		}
		bimg[this.index].style.display = "block";
	}
}