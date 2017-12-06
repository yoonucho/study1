$(document).ready(function(){
  selectMenu();
	
  bookmarkToggle();
	//tab();
});



// 셀렉트박스 이벤트
function selectMenu() {
  $(".header h1").on("click", function () {
    if($(this).hasClass("on")){
        $(this).removeClass("on").next().slideUp();
     }
     else{
        $(this).addClass("on").next().slideDown();
     } 
     $(".sub_lst li").on("click",function(){
         $(".header h1>.keywords").html($(this).html());
          $(".sub_lst").stop().slideUp();
          $("h1").removeClass("on");
     })
      
  });
}


// 문제점 온상태에서 아무것도 하지 않고 클릭할때 닫히면서 화살표도 바뀌어야 한다
// 다른 컨텐츠를 선택했을때 자동으로 닫혀야 한다.
// modalP.on( "click", function() {
//     gnb.removeClass('on').stop().animate({left:-260},500);
//     modalP.fadeOut(500);
     
// 북마크 토글클래스
function bookmarkToggle() {
  $(".bookmark .icon_bookmark").on("click", function () {
     $(this).toggleClass("on");

  });
}


// 탭
// function tab() {
// 	$(".sub_tab>li>a").on("click", function () {
//     $(this).parent().addClass("on").siblings().removeClass("on");
//      var activeTab = $(this).attr('href');
//     $(".lst_wrap>.sub_tab_lst:visible").hide().css({"transition": "all .75s ease"});
//     $(activeTab).show();
//     return false;	
// 	});

// }

