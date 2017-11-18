$(document).ready(function(){
	tab1();
	tab2();
});

function tab1() {
	var $tab1 = $("#tab1>li>a");
	$tab1.on("click", function () {
		if (!$(this).hasClass("on")) {
			$tab1.removeClass("on").next().hide();
			//$tab.next().hide();
		}
		$(this).addClass("on").next().show();
		//$(this).next().show();

	});

}

function tab2() {
	var $tab2 = $("#tab2>li>a");
	$tab2.on("click", function () {
		if (!$(this).hasClass("on")) {
			$tab2.removeClass("on").next().hide();
			//$tab.next().hide();
		}
		$(this).addClass("on").next().show();
		//$(this).next().show();

	});

}