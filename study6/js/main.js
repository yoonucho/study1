$(document).ready(function(){
  	
  	tab();
});




// 탭
function tab() {
	$(".tab>li>a").on("click focusin", function () {
   $(this).parent().addClass("on").siblings().removeClass("on");
   // $(this).parent().addClass("on")
   // $(this).parent().siblings().removeClass("on");
	
	});
}

