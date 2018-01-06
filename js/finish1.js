/*最终购买输出*/
$(function(){
    var $product = $(".detail");
    var $pro_del =$('.pro-detail');
	$(".buy").click(function(){
        var pro_name = $product.find("h3:first").text();
		var pro_code = $pro_del.find(".code i").text();
		var pro_size = $pro_del.find(".size i").text();
		var pro_num = $pro_del.find(".num i").text();
	    var pro_price =$pro_del.find(".price i") .text();
		var dialog = " 感谢您的购买。\n您购买的\n"+
		        "产品是："+pro_name+"；\n"+
				"编号是："+pro_code+"；\n"+
				"型号是："+pro_size+"；\n"+
				"规格是："+pro_num+"；\n"+
				"总价是："+pro_price +"元。";
		if( confirm(dialog) ){
			alert("您已经下单!");
		}
		return false;//避免页面跳转
	})
})