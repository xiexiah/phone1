/*
 * @desc     选项卡
 * @param    oBtn      Object    选项卡按钮的父级jq对象
 * @param    oBtn      Object    选项内容父级的jq对象
 * @time     2016-5-14
 * @author   GCP
 * */
//$(function() {
//  // 服务商头部
//  $('.user').click(function() {
//      $('.service-info-head ul').css('display', 'block')
//  });
//  $('.service-info-head ul li:first-child').click(function() {
//      $(this).parent('ul').css('display', 'none');
//  })
//  //setFooter();
//  // $("input").on("click",function(event){
//  //     event.stopPropagation();
//  // })
//  $("body").on("click",function(event){
//      $("form label.error").remove();
//      // event.stopPropagation();
//  })
//  $("input").on("click",function(event){
//      $("form label.error").remove();
//  })
//})
//
//function tabFn(oBtn, oContent) {
//  //获取按钮
//  var oBtns = oBtn.children();
//  //获取内容
//  var oContents = oContent.children();
//
//  oBtns.each(function() {
//      //选项卡按钮绑定点击事件
//      $(this).click(function() {
//          //遍历所有的按钮
//          oBtns.each(function() {
//              //移除所有按钮的标志
//              $(this).removeClass('active');
//              //移除所有内容的标志
//              oContents.eq($(this).index()).removeClass('active');
//          });
//
//          //当前点击的按钮添加标志
//          $(this).addClass('active');
//          //当前点击按钮对应索引的内容添加标志
//          oContents.eq($(this).index()).addClass('active');
//      });
//  });
//}

/*
 * @desc     调用弹出层
 * @param    String      sPopId      弹出层ID
 * @param    String      sMask       遮罩层ID
 * @time     2016-5-17
 * @author   GCP
 * */
//function popFn(oPop, oMask) {
//  //获取弹出层的宽度
//  var left = -oPop.width() / 2;
//  //获取弹出层的高度
//  var top = -oPop.height() / 2;
//
//  //计算弹出层的位置并赋值
//  oPop.css({
//      "margin-left": left,
//      "margin-top": top
//  });
//  //显示遮罩
//  oMask.show();
//  //显示弹出层
//  oPop.show();
//
//  //查找关闭按钮
//  var oClose = oPop.find('.close');
//
//  //点击关闭按钮关闭当前弹窗
//  oClose.click(function() {
//      //关闭弹出层
//      $(this).closest('section').hide();
//      //关闭遮罩
//      oMask.hide();
//  });
//}

/*
 * @desc     显示密码切换
 * @param    obj     Object      切换的按钮jq对象
 * @tiem     2016-9-19
 * @author   GCP
 * */
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

/*
 * @desc    校验输入框
 * @param   oBj     Object     表单对象
 * @param   oReg    Object     正则对象
 * @time    2016-7-28
 * @author  GCP
 * */
function checkFormFn(oBj, oReg) {
    if (!oReg.test(oBj.val().trim())) {
        //改变输入框和外层DIV的背景颜色
        oBj.parent().find('.check_tips').addClass('active');
    }
}

/*
 * @desc    点击页面任意位置关闭表单错误提示信息
 * @time    2016-7-28
 * @author  GCP
 * */
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
//content是提示的信息
//isreload:true false
function formSub(content, isReload, url) {
    $('body').append('<div class="mask"></div>')
    var formStr = '<div id="form-tip"><div class="title"><h3>提示信息</h3><i class="close"></i></div><p>' + content + '</p><div class="btn-area clearfix"><a href="javascript:void(0)" class="sure-btn">确定</a></div></div>';
    $('body').append(formStr);
    $('.close').click(function() {
        $('#form-tip,.mask').remove();
    });
    $('#form-tip .sure-btn').click(function() {
        $('#form-tip,.mask').remove();
        if (isReload == undefined) {
            isReload = false;
        }
        if (isReload) {
            if (url) {
                window.location.replace(url)
            }else{
            	window.location.reload();
            }
        }
    })

}

//设置Footer样式
function setFooter() {
    var win_h = $(window).height();
    var footer_top = $(".footer").offset().top + $(".footer").height();
    if (win_h > footer_top) {
        $(".footer").addClass("fixed-footer");
        console.log("fixed-footer");
    }
}
//后台返回错误时验证样式
//message:报错信息
//inp：当前验证的input或select($('#input'))
function backstateValid(message, inp) {
    var messageStr = '<label class="error ajax-error">' + message + '</label>'
    $('form').find('em').has(inp).append(messageStr);
    $('form').find('em').has(inp).append(messageStr);
}
//清除ajax报错信息
function removeAjaxError() {
    $('.ajax-error').each(function() {
        $(this).remove();
    })
}

//图片的展示功能
function showImage(obj,data){
    $(".image-next").off("click");
    $(".image-prev").off("click");
    var arr=obj.data(data).split(",");
    if($.trim(arr[arr.length-1])==""){
        arr.splice(length-1,1);
    }
    var imgLiStr="";
    for(var i=0;i<arr.length;i++){
        imgLiStr=imgLiStr+'<li><img src="'+arr[i]+'"></li>'
    }
    $(".image-show ul").html(imgLiStr);
    $(".image-show ul li").eq(0).addClass("img-show");
    var imgLength=$(".image-show ul li").length;
    $(".img-length").html(imgLength);
    $(".this-index").html(1);
    var index=0;
    $(".image-next").on("click", function () {
        for(var i=0;i<imgLength;i++){
            if($(".image-show ul li").eq(i).hasClass("img-show")){
                index=i;
            }
        }
        index=index+1;
        if(index>=imgLength){
            index=0
        }
        $(".image-show ul li").removeClass("img-show");
        $(".image-show ul li").eq(index).addClass("img-show");
        $(".this-index").html(index+1);
    })
    $(".image-prev").on("click", function () {
        for(var i=0;i<imgLength;i++){
            if($(".image-show ul li").eq(i).hasClass("img-show")){
                index=i;
            }
        }
        index=index-1;
        if(index<0){
            index=imgLength-1;
        }
        $(".image-show ul li").removeClass("img-show");
        $(".image-show ul li").eq(index).addClass("img-show");
        $(".this-index").html(index+1);
    })
}
//弹出框的内容
function bompBoxfFade(str){
    $(".bomp-box").html(str);
    $(".bomp-box").fadeIn();
    setTimeout(function () {
        $(".bomp-box").fadeOut();
    },2000)
}