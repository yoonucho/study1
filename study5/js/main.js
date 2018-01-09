$(document).ready(function(){
  	gnbOpen();
    bxSlider();
    btnOpen();
    //subClose();
  	//searchOpen();
    //searchClose();
  	//tab();
});



function gnbOpen(){
  $(window).resize(function (){
    var windowWidth = $(window).width();
      if(windowWidth >=768) {
         //창 가로 크기가 767보다 클경우
          // 헤더
          $(".gnb").css({"display":"block"})
          $(".gnb > li>a").on("mouseleave", function () {
            $(this).find(".sub_wrap").stop().slideUp(300);

          });

          $(".gnb > li>a").on("mouseenter focusin", function () {
            $(this).find(".sub_wrap").stop().slideDown(300);
            $(this).parent().addClass("on").siblings("li").removeClass("on");
          });

          // 탭키이동  서브메뉴 마지막이벤트 
          $(".gnb li:last-child .sub_wrap li:last-child>a").on ("focusout",function(){
            $(this).parents("li").removeClass("on");
          });
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
      }else{
        $(".msg").css({"display":"block"})
         //창 가로 크기가 767 미만일 경우 
        // $(".gnb").css({"display":"none"})
        // $(".btn_all>a").on("click keyup", function () {
        //    $(this).toggleClass("on").parent().next().slideToggle();
           
            // if($(this).hasClass("on")){
            //     $(this).removeClass("on").parent().next().slideUp();
            // }
            // else{
            //     $(this).addClass("on").parent().next().slideDown();
            // } 
              // $(".gnb").css({"display":"none"})
              // $(".gnb.on").css({"display":"block"})
          // //버튼을 클릭했을때 on클래스제거 gnb도 제거 리스트 숨겨주거나 슬라이드업
          // $(".btn_all>a").removeClass("on")
          // $(".btn_all>a").parent().parent().find(".gnb").removeClass("on")
          // $(".gnb").css({"display":"none"})

          // //버튼을 클릭했을때 on클래스추가 gnb도 on 리스트보여주거나 슬라이드 다운
          // $(this).addClass("on")
          // $(this).parent().parent().find(".gnb").addClass("on")
          // $(".gnb").css({"display":"block"})

           //if문 사용시
           // if(!$(this).hasClass("on")){
           //   $(this).addClass("on")
           //    $(this).parent().next().addClass("on")
           //    $(".gnb.on").css({"display":"block"})
           // }
           // else{
              
           //    $(".btn_all>a").removeClass("on")
           //    $(".btn_all>a").parent().next().removeClass("on")
           //    $(".gnb").css({"display":"none"})
           // }

          // $(this).addClass("on");
          // $(this).removeClass("on");
          //  $(".btn_all>a").parent().next().removeClass("on");
          //  $(this).parent().next().addClass("on");
          // $(this).toggleClass("on").parent().next().slideToggle();
          // $(".btn_all>a").parent().next().slideUp();
          // $(".gnb").css({"display":"block"})

          // if문 사용시
           // if($(this).hasClass("on")){
           //    $(".btn_all>a").removeClass("on");
           //    $(".btn_all>a").parent().next().slideUp();
           //    // $(this).removeClass("on");
           //    // $(".gnb").css({"display":"none"})
           // }
           // else{
           //    $(this).addClass("on").parent();
           //     $(this).parent().next().slideDown();
           //     // $(this).addClass("on");
           // }
           
          // }); 
      }
  }).resize();  
}


function btnOpen(){
  $(".gnb").css({"display":"none"})
  // $(".gnb.on").css({"display":"block"})
   $(".gnb").removeClass("on");     
  $(".btn_all>a").on("click keyup", function () {
    $(this).toggleClass("on").parent().next().slideToggle();
   });        
}
// bxslider 롤링
function bxSlider(){
  var slider= $(".bxslider").bxSlider({
      pager: false,
      infiniteLoop:false,
      hideControlOnEnd:true,
      touchEnabled:false
  });
// "다음" 버튼 클릭시 동작 정의
   $('.bx-next').click(function () {
      slider.goToNextSlide();
   });
   // "이전" 버튼 클릭시 동작 정의
   $('.bx-prev').click(function () {
      slider.goToPrevSlide();
   });
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

