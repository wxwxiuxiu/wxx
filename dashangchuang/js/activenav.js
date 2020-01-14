$(function(){
	$(window).scroll(function(){
	var oscrollTop=$(window).scrollTop();
	if(oscrollTop>700){
		$(".fixed").fadeIn(300);
	}else if(oscrollTop<700){
		$(".fixed").fadeOut(300);
	}
	var owindowheight=$(window).height();
	$(".floor").each(function(i){
		if(oscrollTop+owindowheight-$(this).offset().top>owindowheight/2){
			$(".fixed li").removeClass("active-nav");
			$(".fixed li").eq(i).addClass("active-nav");
		}
	})
})
$(".fixed li").click(function(){
				var oScrollH=$(".floor").eq($(this).index()).offset().top-120
				$("body,html").animate({
					"scrollTop":oScrollH
				},500)
				})
})