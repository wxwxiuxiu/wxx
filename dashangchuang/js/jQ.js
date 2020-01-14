$.ajax({
	url:"json/index.json",//请求的资源地址
	type:"GET",//请求数据的方式
	dataType:"json",//返回的数据格式
	async:true,//请求为异步操作
	success:function(index)	{		
		var listindex=index.sdnav;
		console.log(listindex);
		var arr=listindex[0].nav;
		console.log(arr);
		var html="";
		for(var i=0;i<arr.length;i++){
			html+=`<li>${arr[i]}</li>`
		}
		$(".erji").eq(0).append($("<ul>").attr("class","two").append(html))
		var arr1=listindex[0].bige;
		console.log(arr1);
		var html1="";
		for(var i=0;i<arr1.length;i++){
			html1+=`<li>${arr1[i]}</li>`
		}
		$(".erji").eq(0).append($("<ul>").attr("class","one").append(html1))
		var arr2=listindex[0].livee;
		var html2="";
		for(var i=0;i<arr2.length;i++){
			html2+=`<li>${arr2[i]}</li>`
		}
		$(".erji").eq(0).append($("<ul>").attr("class","three").append(html2))
		var arr3=listindex[0].cooke;
		var html3="";
		for(var i=0;i<arr3.length;i++){
			html3+=`<li>${arr3[i]}</li>`
		}
		$(".erji").eq(0).append($("<ul>").attr("class","four").append(html3))
		var arr4=listindex[0].healthe;
		var html4="";
		for(var i=0;i<arr4.length;i++){
			html4+=`<li>${arr4[i]}</li>`
		}
		$(".erji").eq(0).append($("<ul>").attr("class","five").append(html4))
		var arr5=listindex[0].hardware;
		var html5="";
		for(var i=0;i<arr5.length;i++){
			html5+=`<li>${arr5[i]}</li>`
		}
		$(".erji").eq(0).append($("<ul>").attr("class","six").append(html5))
		var arr6=listindex[0].img;
		var html6="";
		for(var i=0;i<arr6.length;i++){
			html6+=`<img src="${arr6[0]}">`
		}
		$(".erji").eq(0).append($("<div>").attr("class","seven").append(html6))
		var listindexone=index.sdnavone
		console.log(listindexone);
		var arr7=listindexone[0].nav;
		console.log(arr7);
		var html7="";
		for(var i=0;i<arr7.length;i++){
			html7+=`<li>${arr7[i]}</li>`
		}
		$(".erji").eq(1).append($("<ul>").attr("class","two").append(html7))
		var arr8=listindexone[0].bige;
		var html8="";
		for(var i=0;i<arr8.length;i++){
			html8+=`<li>${arr8[i]}</li>`
		}
		$(".erji").eq(1).append($("<ul>").attr("class","ten").append(html8))
		var arr9=listindexone[0].livee;
		var html9="";
		for(var i=0;i<arr9.length;i++){
			html9+=`<li>${arr9[i]}</li>`
		}
		$(".erji").eq(1).append($("<ul>").attr("class","ten").append(html9))
		var arr01=listindexone[0].cooke;
		var html01="";
		for(var i=0;i<arr01.length;i++){
			html01+=`<li>${arr01[i]}</li>`
		}
		$(".erji").eq(1).append($("<ul>").attr("class","ten").append(html01))
		var arr02=listindexone[0].healthe;
		var html02="";
		for(var i=0;i<arr02.length;i++){
			html02+=`<li>${arr02[i]}</li>`
		}
		$(".erji").eq(1).append($("<ul>").attr("class","ten").append(html02))
		var arr03=listindexone[0].hardware;
		var html03="";
		for(var i=0;i<arr03.length;i++){
			html03+=`<li>${arr03[i]}</li>`
		}
		$(".erji").eq(1).append($("<ul>").attr("class","ten").append(html03))
		var arr04=listindexone[0].jinrong;
		var html04="";
		for(var i=0;i<arr04.length;i++){
			html04+=`<li>${arr04[i]}</li>`
		}
		$(".erji").eq(1).append($("<ul>").attr("class","ten").append(html04))
		var arr05=listindexone[0].livestyle;
		var html05="";
		for(var i=0;i<arr05.length;i++){
			html05+=`<li>${arr05[i]}</li>`
		}
		$(".erji").eq(1).append($("<ul>").attr("class","nine").append(html05))
		var arr06=listindexone[0].keji;
		var html06="";
		for(var i=0;i<arr06.length;i++){
			html06+=`<li>${arr06[i]}</li>`
		}
		$(".erji").eq(1).append($("<ul>").attr("class","ten").append(html06))
		var arr07=listindexone[0].elses;
		var html07="";
		for(var i=0;i<arr07.length;i++){
			html07+=`<li>${arr07[i]}</li>`
		}
		$(".erji").eq(1).append($("<ul>").attr("class","ten").append(html07))
		var arr08=listindexone[0].child;
		var html08="";
		for(var i=0;i<arr07.length;i++){
			html08+=`<li>${arr08[i]}</li>`
		}
		$(".erji").eq(1).append($("<ul>").attr("class","ten").append(html08))
		var arr09=listindexone[0].edu;
		var html09="";
		for(var i=0;i<arr09.length;i++){
			html09+=`<li>${arr07[i]}</li>`
		}
		$(".erji").eq(1).append($("<ul>").attr("class","ten").append(html09))
	},
	error:function(err){
	}
})