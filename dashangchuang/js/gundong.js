// //获取元素
// var oUl = document.getElementById("content-ul");
// var page=0;
// var 
// //创建一个对象数组
// var arr = [{
//     "imgSrc":"images/0_thumb_G_1489097011644.jpg",
//     "title":"Apple/苹果 13 英寸：MacBook Pro Multi-Touch Bar 和 Touch ID 2.9GHz 处理器 512GB 存储容量",
//     "price":"￥7100",
//     "count":"￥9630"
// },{
//     "imgSrc":"images/0_thumb_G_1489097621751.jpg",
//     "title":"Apple/苹果 13 英寸：MacBook Pro Multi-Touch Bar 和 Touch ID 2.9GHz 处理器 512GB 存储容量",
//     "price":"￥7100",
//     "count":"￥9630"
// },{
//     "imgSrc":"images/0_thumb_G_1489097825348.jpg",
//     "title":"Apple/苹果 13 英寸：MacBook Pro Multi-Touch Bar 和 Touch ID 2.9GHz 处理器 512GB 存储容量",
//     "price":"￥7100",
//     "count":"￥9630"
// },{
//     "imgSrc":"images/0_thumb_G_1489099437211.jpg",
//     "title":"Apple/苹果 13 英寸：MacBook Pro Multi-Touch Bar 和 Touch ID 2.9GHz 处理器 512GB 存储容量",
//     "price":"￥7100",
//     "count":"￥9630"
// },{
//     "imgSrc":"images/0_thumb_G_1489102299856.jpg",
//     "title":"Apple/苹果 13 英寸：MacBook Pro Multi-Touch Bar 和 Touch ID 2.9GHz 处理器 512GB 存储容量",
//     "price":"￥7100",
//     "count":"￥9630"
// },{
//     "imgSrc":"images/0_thumb_G_1489102753231.jpg",
//     "title":"Apple/苹果 13 英寸：MacBook Pro Multi-Touch Bar 和 Touch ID 2.9GHz 处理器 512GB 存储容量",
//     "price":"￥7100",
//     "count":"￥9630"
// },{
//     "imgSrc":"images/0_thumb_G_1489102950633.jpg",
//     "title":"Apple/苹果 13 英寸：MacBook Pro Multi-Touch Bar 和 Touch ID 2.9GHz 处理器 512GB 存储容量",
//     "price":"￥7100",
//     "count":"￥9630"
// },{
//     "imgSrc":"images/0_thumb_G_1489106314732.jpg",
//     "title":"Apple/苹果 13 英寸：MacBook Pro Multi-Touch Bar 和 Touch ID 2.9GHz 处理器 512GB 存储容量",
//     "price":"￥7100",
//     "count":"￥9630"
// },{
//     "imgSrc":"images/0_thumb_G_1489108311901.jpg",
//     "title":"Apple/苹果 13 英寸：MacBook Pro Multi-Touch Bar 和 Touch ID 2.9GHz 处理器 512GB 存储容量",
//     "price":"￥7100",
//     "count":"￥9630"
// }]

// function fn(){
//     // 创建一个空数组
//     var oUlHtml = "";

// }





$(".next").click(function(){
    $(".content-down ul").animate({
        left:"-238px"
    },function(){
        $(".content-down ul li").eq(0).appendTo($(".content-down ul"))
        $(".content-down ul").css("left",0)
    })
})

//点击左边
$(".prev").click(function(){
    $(".content-down ul li:last").prependTo($(".content-down ul"))
    $(".content-down ul").css("left","-238px")
    $(".content-down ul").animate({
        left:"0"
    })
})

var timer=setInterval(function(e){
    $(".content-down ul").animate({
        left:"-238px"
    },function(){
        $(".content-down ul li").eq(0).appendTo($(".content-down ul"))
        $(".content-down ul").css("left",0)
    })
},2000)

$(".content-down").mouseenter(function(){
    clearInterval(timer)
    $(".prev").css("display","block")
    $(".next").css("display","block")
})
$(".content-down").mouseleave(function(){
    timer=setInterval(function(){
        $(".content-down ul").animate({
            left:"-238px"
        },function(){
            $(".content-down ul li").eq(0).appendTo($(".content-down ul"))
            $(".content-down ul").css("left",0)
        })
    },2000)
    $(".next").css("display","none")
    $(".prev").css("display","none")
})


//获取元素
    var gouwu = document.getElementById("gouwu");
    var aside = document.getElementById("aside")
    var oBody = document.body
    var oGray  = document.getElementsByClassName("aside-gray")[0];
    console.log(gouwu)
    console.log(oGray)
    console.log(aside.offsetWidth)
    gouwu.onclick = function(e){
        var e=e|| window.event;
        oGray.style.display="block"
        e.stopPropagation()//阻止冒泡
    }
    oBody.onclick = function(e){
        oGray.style.display="none"
    }

