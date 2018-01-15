$(document).ready(function(){
  	//gnbOpen();
    bxSlider();
    //btnOpen();
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

    if ( windowWidth < 768 && small == false  ) {
      smallDevice = setTimeout(smallDevice_Event , 1000);
    } else if ( windowWidth >= 768 &&  large == false ){
      largeDevice = setTimeout(largeDevice_Event , 1000);
    }
  });

  function smallDevice_Event(){
    console.log('mobile');

    large = false;
    small = true;

   $("header_wrap").css({"height":"auto"})
   $(".gnb >li>a").on("mouseenter focusin",function(){
      $(".header_wrap").stop();
       // $(".gnb").css({"display":"none"});
        
   })
   // $(".gnb").css({"display":"none"})
    $(".header_wrap").on("mouseleave",function(){
    $(this).stop();
     // $(".gnb").css({"display":"none"});
   
   })
  // $(".gnb").removeClass("on");
   
     $(".btn_all>a").on("click", function () {
      $(this).addClass("on")
      $(this).parents(".nav").children(".gnb").css({"display":"block"});
     //  if($(".gnb").css('display') != 'none') {
     //      $(".btn_all>a").addClass("on");
     //  }else{
     //      $(".btn_all>a").removeClass("on");
     //  }

        // if($(this).hasClass("on")){
        //   $(this).removeClass("on").css({"border":"1px solid #f00"}).parent().next().slideUp();
        // }
        // else{ 
      //     $(this).addClass("on");
      //    if(!$(this).hasClass("on")){
      //      $(this).addClass("on").parent().next().slideDown();
      //      $(".gnb").css({"height":"216px"});
      //    }
           
      //   // }
      //    else{
      //     $(this).removeClass("on").parent().next().slideUp();
      //    }
      // return false;
    });
  }

  function largeDevice_Event (){
    console.log('pc');

    small = false;
    large = true;
      $(".gnb").css({"display":"block"})
    
    var header_wrap= $(".header_wrap");
        
        $(".gnb >li>a").on("mouseenter focusin",function(){
         
          header_wrap.stop().animate( {height:97},500); 
          $(this).parent().addClass("on").siblings("li").removeClass("on");
                     
        })

          header_wrap.on("mouseleave",function(){
          $(this).stop().animate({height:80},500);
          $(".gnb >li>a").parent().removeClass("on")
           // $(this).find(".sub_wrap").stop().slideUp(300);
        });  

  // } function largeDevice_Event (){
  //   console.log('pc');

  //   small = false;
  //   large = true;
  //   var header_wrap=$(".header_wrap"),
  //    curHeight =header_wrap.height(),
  //    autoHeight=header_wrap.css({"height":"auto"}).height();
  //   var header_wrap=$(".header_wrap"),
  //        curHeight =header_wrap.height(),
  //        autoHeight=header_wrap.css({"height":"auto"}).height();
  //     // $(".gnb").css({"display":"block"});
  //       $(".gnb >li>a").on("mouseenter focusin",function(){
         
  //         header_wrap.height(curHeight).stop().animate( {height:autoHeight},500); 
  //            $(this).parent().addClass("on").siblings("li").removeClass("on");
  //                     // $(this).find(".sub_wrap").stop().slideDown(300);
  //       })

  //       $(".header_wrap").on("mouseleave",function(){
  //         //$(".header_wrap").height(curHeight).animate({height: autoHeight}, 500)
  //         $(this).height(curHeight).stop().animate({height:80},500);
  //         $(".gnb >li>a").parent().removeClass("on")
  //          // $(this).find(".sub_wrap").stop().slideUp(300);
  //       });  

  }
  




  // $(window).on("load resize",function (){
  //   var windowWidth = $(window).width();
  //     if(windowWidth >=768) {
  //        //창 가로 크기가 767보다 클경우
  //         // 헤더
  //         // $(".header_wrap").css({"height":"80px"})
  //        gnbControl();
  //        quickMenu();


  //         // $(".gnb").css({"display":"block"})
  //         // $(".gnb > li>a").on("mouseleave", function () {
  //         //   $(".gnb > li>a").find(".sub_wrap").stop().slideUp(300);
  //         //   $(".gnb>li>a").parent().parent().children().removeClass("on");
  //         // }); 

  //         // $(".header_wrap").on("mouseleave", function () {
  //         //   $(this).find(".sub_wrap").stop().slideUp(300);
  //         // });

  //         // $(".gnb > li>a").on("mouseenter focusin", function () {
  //         //   $(this).find(".sub_wrap").stop().slideDown(300);
  //         //   // $(this).parent().addClass("on").siblings("li").removeClass("on"); 
  //         //   $(this).parent().addClass("on");
  //         // });

  //         // 탭키이동  서브메뉴 마지막이벤트 
  //         // $(".gnb li:last-child .sub_wrap li:last-child>a").on ("focusout",function(){
  //         //   $(this).parents("li").removeClass("on");
  //         // });
         

  //         // 탭키이동  퀵메뉴 마지막이벤트 
  //         // $(".quick_nav li:last-child").on ("focusout",function(){
  //         //   $(this).removeClass("on");
  //         //    $(this).find(".sp_img").removeClass("on");
  //         // });
  //         // 메세지
         
  //     }
  //     // else if (windowWidth < 767) {
  //     //   // gnbControlT();
  //     // //   // $(".header").css({"height":"90px"})
  //     // //   // // $(".gnb").css({"display":"none"})
  //     // //   //  //헤더
     
  //     // //   // //메세지
  //     // //   // $(".msg").css({"display":"block"})
  //     // //   // // $(".gnb").removeClass("on");
  //     // //   //  $(".btn_all>a").on("click keyup", function () {
  //     // //   //     $(this).toggleClass("on").parent().next().slideToggle();
  //     // //   //  });     
  //     // //   //  // 퀵메뉴
  //     // //   // $(".quick_nav li").removeClass("on");
  //     // //   // $(".quick_nav li>a").find(".sp_img").removeClass("on");
  //     // //   // $(".quick_nav li>a").on("click focusin", function () {
  //     // //   //   $(this).parent().removeClass("on");
  //     // //   //   $(".quick_nav li>a").find(".sp_img").removeClass("on");
  //     // //   // });
      
 
  //     // } 

  //     else {
  //       gnbControlM();
  //       //btnOpen();
  //       //헤더
  //       // $(".gnb").css({"display":"none"})
  //       //메세지
  //       // $(".msg").css({"display":"block"})
  //       //  // 퀵메뉴
  //       // $(".quick_nav li").removeClass("on");
  //       // $(".quick_nav li>a").find(".sp_img").removeClass("on");
  //       // $(".quick_nav li>a").on("click focusin", function () {
  //       //   $(this).parent().removeClass("on");
  //       //   $(".quick_nav li>a").find(".sp_img").removeClass("on");
  //       // });

        
  //     }
  
  // })



function gnbControl(){
 
 var header_wrap= $(".header_wrap"),
     curHeight =header_wrap.height(),
     autoHeight=header_wrap.css({"height":"auto"}).height();
  // $(".gnb").css({"display":"block"});
    $(".gnb >li>a").on("mouseenter focusin",function(){
     
      header_wrap.height(curHeight).stop().animate( {height:autoHeight},500); 
         $(this).parent().addClass("on").siblings("li").removeClass("on");
                  // $(this).find(".sub_wrap").stop().slideDown(300);
    })

    $(".header_wrap").on("mouseleave",function(){
      //$(".header_wrap").height(curHeight).animate({height: autoHeight}, 500)
      $(this).height(curHeight).stop().animate({height:88},500);
      $(".gnb >li>a").parent().removeClass("on")
       // $(this).find(".sub_wrap").stop().slideUp(300);
    })

}

function gnbControlT(){
   $(".gnb").css({"display":"block"})
}

function gnbControlM(){
   $("header_wrap").css({"height":"auto"})
   $(".gnb >li>a").on("mouseenter focusin",function(){
      $(".header_wrap").stop();
       // $(".gnb").css({"display":"none"});
        
    })
   // $(".gnb").css({"display":"none"})
    $(".header_wrap").on("mouseleave",function(){
    $(this).stop();
     // $(".gnb").css({"display":"none"});
    
   
  })
}

function quickMenu(){
// 퀵메뉴
  $(".quick_nav li>a").on("click focusin", function () {

    $(".quick_nav li").parent().children().removeClass("on");
    $(".quick_nav li>a").find(".sp_img").removeClass("on");

    $(this).parent().addClass("on")
    $(this).find(".sp_img").addClass("on");
  });
 

}

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

function btnOpen(){    
   $(".btn_all>a").on("click", function () {
     if($(this).hasClass("on")){
        $(this).removeClass("on").parent().next().slideUp();
      }
      else{ 
       $(this).addClass("on").parent().next().slideDown();
         
      }
   });        
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




