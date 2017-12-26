$(document).ready(function(){
    menuOpen();
    airplaneGo();
    quickNav();
    bxSlider();
   
});
 
 // bxslider 롤링
function bxSlider(){
  var slider= $(".bxslider").bxSlider({
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

// 사이드랩 메인메뉴  클릭이벤트
function menuOpen() {
  $(".btn_all").on("click", function () {
      
      if($(".side_wrap").hasClass("on")){
           $(".side_wrap").removeClass("on");
           $(".wrap").css ({"left":"0"})
      }
      else{  
          $(".side_wrap").addClass("on");
          $(".wrap").css ({"left":"-250px"})
      }
    
  });
}

 //비행기 숨겼다가 보이

//btn_all을 클릭했을때 사이드랩을 보여줘라
  
//해당 리스트를 클릭했을때 on클래스를 추가해주고 텍스트효과와 비행기를 보여줘라

function airplaneGo(){
  $(".nav .gnb>li>a").on("click",function (){
//     // find()

    // $(".nav .gnb>li").parent().children().removeClass("on");
    // $(this).parent().addClass("on");
    // $(".nav .gnb>li>a").find(".sp_img").removeClass("on");
    // $(this).find(".sp_img").addClass("on");

    // find2

      // 2line
   // $(this).parent().parent().children().siblings().removeClass("on").css({"border":"1px solid #000"}).find(".sp_img").removeClass("on");
   //  $(this).parent().addClass("on").css({"border":"1px solid #f00"}).find(".sp_img").addClass("on"); 

      // 4line
    // $(this).parent().parent().children().siblings().removeClass("on").css({"border":"1px solid #000"})
    // $(this).parent().addClass("on").css({"border":"1px solid #f00"})
    // $(".nav .gnb>li>a").find(".sp_img").removeClass("on");
    // $(this).find(".sp_img").addClass("on");

    // children()

       // 2line
       // 대표님소스

 
     $(this).parent().addClass("on").siblings().removeClass("on");
     $(this).children().children().addClass('on').parent().parent().parent().siblings().children().children().children().removeClass('on');


       // 2line
        // $(this).parent().parent().children().siblings().removeClass("on").children().children().children().removeClass("on");
        // $(this).parent().addClass("on").children().children().children().addClass("on"); 
        // $(this).parent().parent().children().siblings().removeClass("on").children().children().children().removeClass("on");
        // $(this).parent().addClass("on").children().children().children().addClass("on"); 


       // 4line
         // $(".nav .gnb>li>a").parent().parent().children().removeClass("on");
//       $(".nav .gnb>li>a").children().children().removeClass("on"); 
//       $(this).parent().addClass("on");
//       $(this).children().children().addClass("on");


  })
}





function quickNav() {
  $(".quick_nav li>a").on("click focusin", function () {

    $(".quick_nav li").parent().children().removeClass("on");
    $(".quick_nav li>a").find(".sp_img2").removeClass("on");

    $(this).parent().addClass("on")
    $(this).find(".sp_img2").addClass("on");
  });
}
 


 

 
