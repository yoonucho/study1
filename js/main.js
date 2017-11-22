$(document).ready(function(){
	gnbOpen();
	//gnbHover();
	tab();
});

function gnbOpen() {
      $(".gnb >li>a").on("mouseenter focusin",function(){
        $(".header_wrap").stop().animate( {height:355},500);
//    gnb메뉴 마우스이벤트 클릭시 sub메뉴 보이기
        $(this).parent("li").addClass("hover").siblings("li").removeClass("hover");
      })
      $(".header_wrap").on("mouseleave",function(){
        $(this).stop().animate({height:122},500);
      })

}





function tab() {
	$(".tab>li>a").on("click focusin", function () {
		 $(this).parent("li").addClass("on").siblings().removeClass("on");
	});

}

