$(document).ready(function(){
	gnbOpen();
	searchOpen();
	tab();
});

// gnb메뉴 마우스이벤트 
function gnbOpen() {
      $(".gnb >li>a").on("mouseenter focusin",function(){
        $(".header_wrap").stop().animate( {height:355},500);
       
      })
        $(".header_wrap").on("mouseleave",function(){
          $(this).stop().animate({height:122},500);
      })
}

// 검색이벤트
function searchOpen() {
  $(".search .search_icon").on("click focusin", function () {
         // if($(this).hasClass("change"))

              //$(this).removeClass("change");
         // else
             // $(this).addClass("change");
              //$(this).next().slideToggle();
         //$(this).next().slideToggle();
         $(this).toggleClass("change").next().slideToggle();
      });
}



// 탭
function tab() {
	$(".tab>li>a").on("click focusin", function () {
		 $(this).parent().addClass("on").siblings().removeClass("on");
	});

}

