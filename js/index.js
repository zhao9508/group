//头部
$("#button_top").click(function () {
    $(this).css("background","#fff").children(".dis_block").toggle();
    $(this).children(".dis_none").toggle();
    $(".nav_top").toggle();
    $(".brief_fuhe").css("display","none");
})
// if($(".nav_top").style.display="none"){
//     $(".fuhe").style.display="none"
// }

// 视频播放器
var v = $("#v");
var btn = $("#btn");
var state = 1; //1播 0停
btn.onclick = function(){
    if(state == 1){
        state = 0;
        v.pause();
    }else{
        state = 1;
        v.play();
    }
};

//头部下拉框
var i = $(this).index();
/*$(".dhs").mouseover(function () {
    $(this).parents(".nav").siblings(".hides").
    children(".brief_fuhe").eq($(this).index()-1).show(10).siblings().hide(10);
});
$(".hides").mouseout(function () {
    $(".brief_fuhe").hide(10);
});*/
// $(document).mouseout(function () {
//     $(this).children(".brief_fuhe").hide(500);
// });
    $(".nr").mouseover(function(){
        // $('.brief_fuhe').show(500)
        $(this).parents(".navs").siblings(".hides").
        children(".brief_fuhe").eq($(this).index()-1).show(30).siblings().hide(20);
        console.log($(this).find(".one_png").html())
        $(this).children("div").children(".one_png").hide().siblings(".two_png").show();
        $(this).siblings().children("div").children(".one_png").show().siblings(".two_png").hide();
        // var a=$(this).index();
        // console.log($(this).index());
        // console.log( $(".brief_fuhe").eq(a));
});
$(".hides").mouseleave(function(){
        $('.brief_fuhe').hide(200)
})