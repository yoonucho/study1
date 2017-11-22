$(document).ready(function(){
	gnbOpen();
	gnbHover();
	tab();
});

function gnbOpen() {
<<<<<<< HEAD
      $(".gnb >li>a").on("mouseenter focus",function(){
=======
      $(".gnb > li").on("mouseenter",function(){
>>>>>>> 428ace8a16d3ebee7f4b02e0f86eae213ddcd927
        $(".header_wrap").stop().animate( {height:355},500);
      })
      $(".header_wrap").on("mouseleave",function(){
        $(this).stop().animate({height:122},500);
      })

}
//    gnb메뉴 마우스이벤트 클릭시 sub메뉴 보이기


function gnbHover() {
	$(".gnb > li > a").on('mouseenter focusin', function(){
		$(this).parent("li").addClass("hover").siblings("li").removeClass("hover");
	});
}




function tab() {
	$(".tab>li>a").on("click focusin", function () {
		 $(this).parent("li").addClass("on").siblings().removeClass("on");
	});

}

