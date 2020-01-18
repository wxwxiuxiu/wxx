$(".card-item").mouseover(function(){
	var that = $(this).index();
	$(".card-item").removeClass("card-active");
	$(".card-item").eq(that).addClass("card-active");
})
$(window).scroll(function(){
    var oScrollTop=$(window).scrollTop()
if(oScrollTop>oScrollTop/2){
	$(".goTop").fadeIn(200);
}else if(oScrollTop==0){
	$(".goTop").fadeOut(200);
}
})

$(".goTop").click(function(){
				$("body,html").animate({
					"scrollTop":0
				},500)
})
var options = {
	useEasing: true,
	useGrouping:true,
	separator:',',
	decimal:'.',
}
var arr = new Array(
	new CountUp('sum-apply', 0, 26517, 0, 3, options),
	new CountUp('sum-rate', 0, 98.6, 1, 3, options),
	new CountUp('sum-urgent', 0, 7368, 0, 3, options),
	new CountUp('urgent-rate', 0, 100, 0, 3, options)
)
var fu = function(){
	$(".run-number").each(function(){
		var index = $(this).index('.run-number')
		arr[index].start()
	})
}
fu()