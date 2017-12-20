$(document).ready(function(){
    //bxSlider();
    //selectMenu();
   
    //lstClose();
});
 
// 사이드랩 메인메뉴  클릭이벤트
function selectMenu() {
  $(".header h1").on("click", function () {
    // 만약 h1이 on클래스를 가지고 있으면  on클래스를 없애주고 슬라이드를 올려줘라
    //그렇지 않으면 on클래스를 추가해주고 슬라이드를 내려줘라.
      if($(this).hasClass("on")){
          $(this).removeClass("on").next().slideUp();
      }
      else{
          $(this).addClass("on").next().slideDown();
      } 
    
  });
}

//btn_all을 클릭했을때 사이드랩을 보여줘라
  //바로 하단에 있으니 .next()
//해당 리스트를 클릭했을때 on클래스를 추가해주고 텍스트효과와 비행기를 보여줘라
 
// 다른 영역을 선택했을때  닫아줘라
/*
function lstClose() {
  $(document).mouseup(function (e){
    var $header = $(".header");
    if( $header.has(e.target).length === 0){
      $(".sub_lst").stop().slideUp();
     $("h1").removeClass("on");
    }
  });
}
*/
 

 
