//注册
window.onload=function(){
	var logon = document.querySelector(".logon");
	var logonVip = document.querySelector(".logonVip");
	var logonf = document.querySelector(".logonf");
	var create = document.querySelector(".create");
	var logonFinish = document.querySelector(".logonFinish");
	var logonfin = document.querySelector(".logonfin");
	var logonLogin = document.querySelector(".logonLogin");
	var login = document.querySelector(".login");
	var loginCome = document.querySelector(".loginCome");
	var loginLand = document.querySelector(".loginLand");
	var logZu = document.querySelector(".logZu");
	logon.onclick=function(event){
		logonVip.style.display = "block";
		var oEvent = event || window.event;
		oEvent.stopPropagation();
		logonVip.onclick=function(){
			logonVip.style.display = "none";
		}
	}
	logonf.onclick=function(event){
		var oEvent = event || window.event;
		oEvent.stopPropagation();
		logonVip.onclick=function(){
			logonVip.style.display = "none";
		}
	}
	create.onclick=function(event){
		logonFinish.style.display = "block";
		logonVip.style.display = "none";
		var oEvent = event || window.event;
		oEvent.stopPropagation();
		logonFinish.onclick=function(){
			logonFinish.style.display = "none";
		}
	}
	logonfin.onclick=function(event){
		var oEvent = event || window.event;
		oEvent.stopPropagation();
		logonFinish.onclick=function(){
			logonFinish.style.display = "none";
		}
	}
	logonLogin.onclick=function(event){
		loginCome.style.display = "block";
		logonVip.style.display = "none";
		var oEvent = event || window.event;
		oEvent.stopPropagation();
		loginCome.onclick=function(){
			loginCome.style.display = "none";
		}
	}

	// 登陆
	login.onclick=function(event){
		loginCome.style.display = "block";
		var oEvent = event || window.event;
		oEvent.stopPropagation();
		loginCome.onclick=function(){
			loginCome.style.display = "none";
		}
	}
	loginLand.onclick=function(event){
		var oEvent = event || window.event;
		oEvent.stopPropagation();
		loginCome.onclick=function(){
			loginCome.style.display = "none";
		}
	}
	logZu.onclick=function(event){
		logonVip.style.display = "block";
		loginCome.style.display = "none";
		var oEvent = event || window.event;
		oEvent.stopPropagation();
		logonVip.onclick=function(){
			logonVip.style.display = "none";
		}
	}
}