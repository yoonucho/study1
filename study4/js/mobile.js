$(document).ready(function(){
    selectMenu();
    bookmarkToggle();
    //lstClose();
});
 
// 셀렉트박스 이벤트
function selectMenu() {
  $(".header h1").on("click", function () {
    // 만약 h1이 on클래스를 가지고 있으면  on클래스를 없애주고 슬라이드를 올려줘라
    //그렇지 않으면 on클래스를 추가해주고 슬라이드를 내려줘라.
      if($(this).hasClass("on")){
          $(this).removeClass("on").next().slideUp();
      }
      else{
          $(this).addClass("on").next().slideDown();
      } 
     $(".sub_lst li").on("click",function(){
      //.keywords에 .sub_lst li내용을 담아줘라.(ex:<a href="#">트렌드</a>)
         $(".header h1>.keywords").html($(this).html());
          $(".sub_lst").stop().slideUp();
          $("h1").removeClass("on");
     }) 
  });
}
 
// 다른 영역을 선택했을때  닫아줘라
/*
function lstClose() {
  $(document).mouseup(function (e){
    var $header = $(".header");
    if( $header.has(e.target).length === 0){
      $(".sub_lst").stop().slideUp();
     $("h1").removeClass("on");
    }
  });
}
*/
 
// 북마크 토글클래스
function bookmarkToggle() {
  $(".bookmark .icon_bookmark").on("click", function () {
     $(this).toggleClass("on");
  });
}
 
 
$(function(){
   $('.sub_nav,.container').on('click',function(){
      var test = $('.header h1.on');
      $('.sub_lst').stop().slideUp();
        $(test).removeClass('on');
   });
});


// $(function(){
//    $(".wrap:not(.header)").on('click',function(){
//       var test = $('.header h1.on');
//       $('.sub_lst').stop().slideUp();
//         $(test).removeClass('on');
//    });
// });

