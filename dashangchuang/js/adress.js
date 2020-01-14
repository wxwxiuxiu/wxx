$(function(){
	var arrH=[]
	for(var i=0;i<$(".ardess-dl li").length;i++){
		arrH.push($(".ardess-dl li").eq(i).position().top)
	}
	$(".ardess-ul li").mouseover(function(){
		console.log($(this).index());
					var oScrollH=arrH[$(this).index()]
					$(".ardess-dl").animate({
						"scrollTop":oScrollH
					},300)
					})
})