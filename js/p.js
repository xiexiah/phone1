$(function(){
//动态选项卡
	var $div_li=$(".tab_menu ul li");
	    $div_li.click(function(){
			$(this).addClass("active")            
				   .siblings().removeClass("active"); 
	
	var index =  $div_li.index(this);  
			$("div.tab_box > div")   	
					.eq(index).show()   
					.siblings().hide(); 
  })
	    




})
