$(function(){
	$("body").on("click",function(event){
        $("form label.error").remove();
        // event.stopPropagation();
    })
    $("input").on("click",function(event){
        $("form label.error").remove();
    })
})
//密码验证
function showPwd(obj) {
    obj.click(function() {
        //如果按钮高亮
        if ($(this).hasClass('active')) {
            //移除高亮标志
            $(this).removeClass('active');
            //将同级的表单类型设置为密码
            //$(this).prev().attr('type', 'password');
            $(this).parent('em').find('input[name]').attr('type', 'password')
        } else {
            //添加高亮标志
            $(this).addClass('active');
            //将同级的表单类型设置为输入框
            //$(this).prev().attr('type', 'text');
            $(this).parent('em').find('input[name]').attr('type', 'text')
        }
    });
}

//校验输入框
function checkFormFn(oBj, oReg) {
    if (!oReg.test(oBj.val().trim())) {
        //改变输入框和外层DIV的背景颜色
        oBj.parent().find('.check_tips').addClass('active');
    }
}

//点击页面任意位置关闭表单错误提示信息
function closeTips() {
    $(document).click(function() {
        $('.check_tips').removeClass('active');
    });
}
//重发60s
//obj:按钮
//ajax:短信接口的ajax请求，需要返回true或者false
var componentFlag = true;

function componentsNew(obj, ajaxFun) {
    var time = 60;
    if (componentFlag) {
        if (ajaxFun()) {
            obj.html('重发&nbsp;&nbsp;(60s)').css({
                'border-color': '#ccc',
                'color': '#ccc'
            });
            var t = setInterval(count, 1000);
            componentFlag = false;
        }
    }

    function count() {
        time -= 1;
        obj.html('重发&nbsp;&nbsp;(' + time + 's)').css({
            'border-color': '#ccc',
            'color': '#ccc'
        });
        if (time <= 0) {
            clearInterval(t);
            obj.html('获取动态码').css({
                'border-color': '#ff5252',
                'color': '#ff5252'
            });
            componentFlag = true;
        }
    }
}

//后台返回错误时验证样式
//清除ajax报错信息
function removeAjaxError() {
    $('.ajax-error').each(function() {
        $(this).remove();
    })
}