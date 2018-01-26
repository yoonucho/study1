$(document).ready(function(){
  	//gnbOpen();
    bxSlider();
    map();
    selectMenu();
});

  var small = false;  // 함수 실행여부 확인용 변수
  var large = false;
  var smallDevice = null; // clearTimeout 함수 선 실행하기위한 변수
  var largeDevice = null;

  var windowWidth = $(window).width();
  var $win = $(window);

  $win.on("load resize.hashTagSelector", function() {
   windowWidth = $(this).width();
    clearTimeout(smallDevice);  // resize 이벤트 발생시 각 setTimeout clear
    clearTimeout(largeDevice);

    if ( windowWidth < 750 && small == false  ) {
      smallDevice = setTimeout(smallDevice_Event , 100);
    } else if ( windowWidth >= 750 &&  large == false ){
      largeDevice = setTimeout(largeDevice_Event , 100);
    }
  });

  

  function smallDevice_Event(){
    // console.log('mobile');

    large = false;
    small = true;

     // 헤더 마우스이벤트 제거
      $(".header_wrap").off("mouseleave");
      $(".gnb").css({"display":"none"});  
      $(".header_wrap").css({"height":"97px"});
      $(".gnb >li>a").off();
      // 버튼클릭시 gnb open
      $(".btn_all").on("click keyup" , function() {
         $(".header_wrap").css({"height":"auto"});  
        $(this).children("a").toggleClass("on");
        $(this).next().slideToggle();
      return false;
      });
      // 퀵메뉴 이벤트 제거
      $(".quick_nav li").removeClass("on");
       $(".quick_nav li>a").find(".sp_img").removeClass("on");

       $(".quick_nav li>a").off("click focusin");
      
    }
  

  function largeDevice_Event (){
    // console.log('pc');

    small = false;
    large = true;
      // 헤더
      $(".gnb").css({"display":"block"});
      // 버튼 이벤트 제거
      $(".btn_all").off();  
       var header_wrap= $(".header_wrap");
      $(".gnb >li>a").on("mouseenter focusin",function(){
        header_wrap.stop().animate( {height:117},500); 
        $(this).parent().addClass("on").siblings("li").removeClass("on");
                   
      });

      header_wrap.on("mouseleave",function(){
        $(this).stop().animate({height:97},500);
         $(".gnb >li>a").parent().removeClass("on")
      }); 

      // 탭키이동  서브메뉴 마지막이벤트 
           $(".gnb li:last-child .sub_wrap li:last-child>a").on ("focusout",function(){
             $(this).parents("li").removeClass("on");
       });
         
      // 퀵메뉴 함수
      quickMenu(); 
    }

  
// function gnbControl(){
 
//  var header_wrap= $(".header_wrap"),
//      curHeight =header_wrap.height(),
//      autoHeight=header_wrap.css({"height":"auto"}).height();
//   // $(".gnb").css({"display":"block"});
//     $(".gnb >li>a").on("mouseenter focusin",function(){
     
//       header_wrap.height(curHeight).stop().animate( {height:autoHeight},500); 
//          $(this).parent().addClass("on").siblings("li").removeClass("on");
//                   // $(this).find(".sub_wrap").stop().slideDown(300);
//     });

//     $(".header_wrap").on("mouseleave",function(){
//       //$(".header_wrap").height(curHeight).animate({height: autoHeight}, 500)
//       $(this).height(curHeight).stop().animate({height:88},500);
//       $(".gnb >li>a").parent().removeClass("on")
//        // $(this).find(".sub_wrap").stop().slideUp(300);
//     })

// }



// 퀵메뉴
function quickMenu(){
  $(".quick_nav li>a").on("click focusin", function () {

    $(".quick_nav li").parent().children().removeClass("on");
    $(".quick_nav li>a").find(".sp_img").removeClass("on");

    $(this).parent().addClass("on");
    $(this).find(".sp_img").addClass("on");
  });
 

}
// 전국지도
function map(){
    // $(".msg").css({"display":"none"})
          // 전국지도
  $(".location_wrap>a").on("click focusin",function(){
      
      $(".location_wrap>a").parent().next().removeClass("on");
      $(this).parent().next().addClass("on");
  });
  $(".location_popup .btn_close").on("click focusout",function(){
    $(".location_popup .btn_close").parent().removeClass("on");
    $(this).parent().fadeOut();
  })
}


// bxslider 롤링
function bxSlider(){
  var slider= $(".bxslider").bxSlider({
      mode: 'fade',
      pager: false,
      infiniteLoop:false,
      hideControlOnEnd:true,
      touchEnabled:true
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

// 셀렉트박스 이벤트
function selectMenu() {
  $(".select_wrap h3").on("click", function () {
    // 만약 h3이  on클래스를 가지고 있으면  on클래스를 없애주고 슬라이드를 올려줘라
    //그렇지 않으면 on클래스를 추가해주고 슬라이드를 내려줘라.
      if($(this).hasClass("on")){
          $(this).removeClass("on").next().slideUp();
           $(".select_wrap").css({"height":"auto"})  
      }
      else{
          $(this).addClass("on").next().slideDown();
          $(".select_wrap").css({"height":"100%"})
      } 
     $(".site_lst li>a").on("click",function(){
  
          $(".site_lst").stop().slideUp();
          $(".select_wrap h3").removeClass("on");
           $(".select_wrap").css({"height":"auto"})
     }) 
  });
}




