$(document).ready(function(){
    menuOpen();
    airplaneGo();
    //sub_imgOn();
    bxSlider();
   
});
 
 // 페이지 사이드 롤링
function bxSlider(){
  $(".bxslider").bxSlider({
      auto:true
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
          $(".wrap").css ({"left":"-390px"})
      }
    
  });
}

function airplaneGo(){
  $(".nav .gnb>li>a").on("click",function (){

   
       // $(".nav .gnb>li").parent().children().removeClass("on");
       // $(".nav .gnb>li>a").find(".sp_img").removeClass("on");
         
 
       //   $(this).parent().addClass("on");

       //    $(this).find(".sp_img").addClass("on");


      $(".nav .gnb>li").parent().children().removeClass("on");
       $(".nav .gnb>li>a").find(".sp_img").removeClass("on");
         
 
         $(this).parent().addClass("on");

          $(this).find(".sp_img").addClass("on");

  })
}

function sub_imgOn(){
  $(".nav .gnb>li").on("click",function(){

       var index = $(this).find(".sp_img").index();
        
   if ($(this).hasClass("on")) {
       $(".sp_img").removeClass("on");
          
      }
    else{
         
        $(this).eq(index).addClass("on");
    } 
  })

}

  
     


    
  //비행기가 보일때 안보일때로 

//btn_all을 클릭했을때 사이드랩을 보여줘라
  
//해당 리스트를 클릭했을때 on클래스를 추가해주고 텍스트효과와 비행기를 보여줘라
 


 

 
