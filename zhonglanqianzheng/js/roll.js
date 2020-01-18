$(window).resize(function(){
	var olist = $('#content .container .news-list').offset().left + $('#content .container .news-list').outerWidth(true);
	$('#sidebar').height($('#waves').offset().top-$(window).scrollTop()-82);
	
	if($(window).scrollTop()>$('#banner').height()){
		$('.col-sm-3').css({
		 "position":"fixed",
		 "top":"82px",
		 "left":olist,
	})
	}else{
		$('.col-sm-3').css({
		 "position":"",
		 "top":"0",
		 "left":0,
	})
	}
})

$(window).scroll(function(){
	var olist = $('#content .container .news-list').offset().left + $('#content .container .news-list').outerWidth(true);
	$('#sidebar').height($('#waves').offset().top-$(window).scrollTop()-82);
	
	if($(window).scrollTop()>$('#banner').height()){
		$('.col-sm-3').css({
		 "position":"fixed",
		 "top":"82px",
		 "left":olist,
	})
	}else{
		$('.col-sm-3').css({
		 "position":"",
		 "top":"0",
		 "left":0,
	})
	}
})