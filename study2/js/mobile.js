$(document).ready(function(){
	
  selectMenu();
  bookmarkToggle();
	tab();
});








// 검색이벤트
function selectMenu() {
  $(".header h1").on("click", function () {
     $(this).next().slideToggle();
     $(".sub_lst li").on("click",function(){
         $(".header h1>.keywords").html($(this).html());
          $(".sub_lst").slideUp();
     })
      
  });
}
     
// 북마크 토글클래스
function bookmarkToggle() {
  $(".bookmark .icon_bookmark").on("click", function () {
     $(this).toggleClass("on");

  });
}


// 탭
function tab() {
	$(".sub_tab>li>a").on("click", function () {
    $(this).parent().addClass("on").siblings().removeClass("on");	
	});

}

