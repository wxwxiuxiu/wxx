$(window).scroll(function(){
		var oScrollTop=$(window).scrollTop()
		if(oScrollTop>$("#header").height()){
			$("#head-nav").fadeIn(500)
			$("#head-nav").css({
				position: "fixed",
				left: "0px",
				top: "0px"
			})
		}else if(oScrollTop<$("#header").height()){
			$("#head-nav").fadeOut(500)
			$("#head-nav").css({
				display: "none"
			})
		}
		})
$("#moveing").click(function(){
	$("#move").css("display","none")
})
$.ajax({
	url:"json/arrdess.json",
	type:"GET",
	// dataType:"json",
	// async:true,
	success:function(data){
		console.log(data)
		var oData = data.city;
		console.log(oData)
		var str = "";
		var stro = "";
		var stra = "";
		var city = [];
		for(var i = 0; i < oData.length;i++){
			str+=`<li>${oData[i].id}</li>`;
			city=oData[i].sity
			console.log(city)
			stro="";
			for(var j = 0; j <city.length;j++){
				stro+=`<span>${city[j]}</span>`
			}
			console.log(stro)
			stra+=`<li><div>${oData[i].id}</div>
				<div>${stro}</div></li>`
		}
		console.log(str)
		$(".ardess-dl").append(stra);
		$(".ardess-ul").append(str);
		
		
		
	},
	error:function(s){
		console.log(s)
	}
})