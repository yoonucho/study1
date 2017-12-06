$(document).ready(function(){
    selectMenu();
  	bookmarkToggle();
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




