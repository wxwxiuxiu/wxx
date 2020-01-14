var dots=document.getElementsByClassName('dots')[0];
var lis=dots.getElementsByTagName('li');
var ul=document.getElementsByClassName('aside-img')[0];
var imgs=ul.getElementsByTagName('li');
var num=0;
var right=document.getElementsByClassName('right')[0];
	for(var j=0;j<lis.length;j++){
		lis[j].index=j
		lis[j].onclick=function(){
			for(var i=0;i<imgs.length;i++){
			lis[num].className="";
			imgs[num].className="";
		 }
		imgs[this.index].className="show";
		this.className="active";
		num=this.index;
		}
	}
right.onclick=function(){
	num++;
	if(num>imgs.length-1){
		num=0;
	}
	for(var i=0;i<imgs.length;i++){
		lis[i].className="";
		imgs[i].className="";
	}
	imgs[num].className="show";
	lis[num].className="active"
}
var time=setInterval(function(){
	right.onclick();
},2000)
dots.onmouseover=function(){
	clearInterval(time);
}
dots.onmouseout=function(){
	time=setInterval(function(){
		right.onclick();
	},2000)
}


var littleTab=document.getElementsByClassName('littleTab')[0];
var span=littleTab.getElementsByTagName('span');
var sum=document.getElementsByClassName('sum')[0];
var uls=sum.getElementsByTagName('ul');
for(var i=0;i<span.length;i++){
	span[i].index=i;
	span[i].onmouseover=function(){
		for(var j=0;j<uls.length;j++){
			uls[j].style.display="none";
			span[j].className="";
		}
		uls[this.index].style.display="block";
		this.className="red";
	}
}
 