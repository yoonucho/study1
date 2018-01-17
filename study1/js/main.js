$(document).ready(function(){
  	gnbOpen();
    subClose();
  	searchOpen();
    searchClose();
  	tab();
});

// gnb메뉴 마우스이벤트 


function gnbOpen() { 

  var header_wrap = $(".header_wrap"),
    curHeight = header_wrap.height(),
    autoHeight = header_wrap.css({"height":"auto"}).height();
  
  $(".gnb >li>a").on("mouseenter focusin",function(){
    header_wrap.height(curHeight).stop().animate( {height:autoHeight},500); 
  })

  $(".header_wrap").on("mouseleave",function(){
    //$(".header_wrap").height(curHeight).animate({height: autoHeight}, 500)
    $(this).stop().animate({height:122},500);
  })
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








// 탭키이동  서브메뉴 마지막이벤트 
function subClose(){
  $(".gnb li:last-child .sub_wrap li:last-child>a").on ("mouseleave focusout",function(){
   $(".header_wrap").stop().animate({height:122},500);
  })
}


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

