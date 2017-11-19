$(document).ready(function(){
	tab();
});

function tab() {
	$(".tab>li").on("click", function () {
		 $(this).addClass("on").siblings().removeClass("on");
	});

}

