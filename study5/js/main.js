$(document).ready(function(){
  	gnbOpen();
    //subClose();
  	//searchOpen();
    //searchClose();
  	//tab();
});



function gnbOpen(){

    var windowWidth = $( window ).width();
      if(windowWidth >767) {
         //창 가로 크기가 767보다 클경우
          // 헤더
          $(".gnb > li>a").on("mouseleave", function () {
            $(this).find(".sub_wrap").stop().slideUp(300);

          });

          $(".gnb > li>a").on("mouseenter focusin", function () {
            $(this).find(".sub_wrap").stop().slideDown(300);
            $(this).parent().addClass("on").siblings("li").removeClass("on");
          });

          // 탭키이동  서브메뉴 마지막이벤트 
          $(".gnb li:last-child .sub_wrap li:last-child>a").on ("mouseleave focusout",function(){
            $(this).parents("li").removeClass("on");
          })
          // 퀵메뉴
          $(".quick_nav li>a").on("click focusin", function () {

            $(".quick_nav li").parent().children().removeClass("on");
            $(".quick_nav li>a").find(".sp_img").removeClass("on");

            $(this).parent().addClass("on")
            $(this).find(".sp_img").addClass("on");
          });
          // 전국지도
          $(".location_wrap>a").on("click focusin",function(){
              
              $(".location_wrap>a").parent().next().removeClass("on");
              $(this).parent().next().addClass("on");
          });
          $(".location_popup .btn_close").on("click focusout",function(){
            $(".location_popup .btn_close").parent().removeClass("on");
            $(this).parent().fadeOut();

          })
        } else{
           //창 가로 크기가 768 미만일 경우 
          $(".btn_all>a").on("click", function () {
            $(this).toggleClass("on").parent().next().slideToggle();
             
          });
      
      }


}




// gnb메뉴 마우스이벤트 
// function gnbOpen() {     
//   $(".gnb >li>a").on("mouseenter focusin",function(){
//     $(".header_wrap").stop().animate( {height:355},500); 
//   })

//   $(".header_wrap").on("mouseleave",function(){
//     //$(".header_wrap").height(curHeight).animate({height: autoHeight}, 500)
//     $(this).stop().animate({height:122},500);
//   })
// }



// 검색이벤트
function searchOpen() {
  $(".search .icon_search").on("click keyup", function () {
     $(this).toggleClass("change").next().slideToggle();
     // if문 사용시
     // if($(this).hasClass("change")){
     //    $(this).removeClass("change").next().slideUp();
     // //    $(this).next().slideUp();
     // //    $(this).removeClass("change");
     // }
     // else{
     //    $(this).addClass("change").next().slideDown();
     // //     $(this).next().slideDown();
     // //     $(this).addClass("change");
     // }
  });
}
//탭키이동 검색창 닫기 
function searchClose(){
  $(".search .btn_search").on("click focusout",function(){
    $(".search_wrap").slideUp();
    $(".search .icon_search").removeClass("change");  
  })
}


// 탭
function tab() {
	$(".tab>li>a").on("click focusin", function () {
   $(this).parent().addClass("on").siblings().removeClass("on");
   // $(this).parent().addClass("on")
   // $(this).parent().siblings().removeClass("on");
	
	});
}

