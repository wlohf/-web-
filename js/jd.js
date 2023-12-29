window.onload = function(){
	var pColor = document.getElementById("siderbar").getElementsByTagName("p");
	//获取"siderbar"里的"p"标签
	for(var i=0; i<pColor.length; i++){
		pColor[i].onmouseover = function(){
			for(var j=0; j<pColor.length; j++){
				pColor[j].className = "";
			}
			this.className = "changeColor";
		}
	}
	var list = document.getElementById("button").getElementsByTagName("li");
	//获取"button"里的"li"标签
	var imgs = document.getElementById("lunbo").getElementsByTagName("img");
	//获取"lunbo"里的"img"标签
	

	var count = 0;
	var timer = setInterval(function(){    //设置一个定时器，每3秒执行此函数
		for(var i=0; i<imgs.length; i++){  //先将所有图片隐藏
			imgs[i].className = "hide";
		}
		imgs[count].className = "visi";    //再将由"count"指定的图片显示
		count++;
		if(count>=imgs.length){            //判断"count"超出时，重新赋值0
			count=0;
		}
	},3000);


	var cx = document.getElementById("sales").getElementsByTagName("li");
	var div1 = document.getElementById("cuxiao");
	var div2 = document.getElementById("gonggao");

	cx[0].onmouseover = function(){
		div1.style.display = "block";
		div2.style.display = "none";
	}
	cx[1].onmouseover = function(){
		div1.style.display = "none";
		div2.style.display = "block";
	}
}