$(function(){
	//密码可见或者不可见
	showPwd($('.showpass'));
	//判断手机还是邮箱
	(function(){
		//手机正则
		var phoneReg = /^1[34578]\d{9}$/;
		//邮件正则
		var emailReg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
		//判断是手机还是邮箱
		$('.email-mobile').blur(function(){
			if(phoneReg.test($(this).val())){
				$('.get-message').addClass('active');
			}else if(emailReg.test($(this).val())){
				$('.get-message').removeClass('active');
			}
		});
		//获取动态验证码
		$('.get_mes_btn').click(function(){
			componentsNew($('.get_mes_btn'),function(){
				console.log(1);
				return true;
			});
		});
	})();
	//表单验证
	$().ready(function(){
		$('#find_form').validate({
			rules:{
				'f_account':{
					required:true,
					phoneEmail:true
				},
				'f_imageAuthCode':{
					required:true,
					maxlength:4,
					minlength:4
				},
				'f_msgCheckCode':{
					required:true,
					number:true,
					maxlength:6,
					minlength:6
				},
				'f_password':{
					required:true,
					password:true

				}
			},
			messages:{
				'f_imageAuthCode':'只能输入4位字符',
				'f_msgCheckCode':'请输入6位数字验证码',
			},

		});
	});
	$('.sub_btn').click(function(e){
		e.stopPropagation();
		if($('#find_form').valid()){
			console.log(1);
			//submit code...
		}
	});
});
