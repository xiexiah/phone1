$(function(){
	var element=''
	element=element+
		'<ul class="head">'+
			'<li><a class="first"  href="javascript:history.go(-1);"><i class="glyphicon glyphicon-circle-arrow-left"></i>返回</a></li>'+
			'<li><a href="mainpage.html"><i class="glyphicon glyphicon-home"></i>首页</a></li>'+
			'<li><a href="member.html"><i class="glyphicon glyphicon-user"></i>会员中心</a></li>'+
			'<li><a href="detail.html"><i class="glyphicon glyphicon-shopping-cart"></i>购物车</a></li>'+
		'</ul>'
	
	 $('header').html(element)
 
		
	})