
	$(document).ready(function () {
		//slideEvent();
		mouseHover();
    gnbClick();
		arrowUpDown();
		viewMore();
		viewMoreClose();
		viewC();
		viewC2();
		viewClose();
		viewMoreClose2();
		//editMod();
		//mod();
    //group_view();
		//arrowClick();
	  ccc();
		infoArrow();
		//contactGroup();
		//selectTarget();
		//selectTarget2();
		//selectTarget3();
		//selectBox();
		openClose();
		fancyLaunch();
		pic_view();
		replyUpDown();
		btnClose();
		//layer_open();
		//popUp();
		//layerPopUp();

	});

	//	16.08.03 yoonu
	// //gnb 메뉴 클릭시 이미지효과
	// function gnbClick() {
	// 	$("#menu1").on("click", function () {
	// 		$("#menu1").attr('src', 'images/common/menu1_on.png').css("margin-top", "-11px");
	// 	});
	// }

	//    gnb메뉴 마우스이벤트 슬라이드 업,다운

	function slideEvent() {
		$(".gnb > li").on("mouseleave", function () {
			$(this).find(".sub").stop().slideUp(300);

		});
		$(".gnb > li").on("mouseenter", function () {
			$(this).find(".sub").stop().slideDown(300);

		});

	}
	//    gnb메뉴 마우스이벤트 클릭시 sub메뉴 보이기

	function gnbClick() {
		$(".gnb > li > a").on('mouseenter focusin', function(){
				$(this).parent('li').addClass('on').siblings('li').removeClass('on');
		});

	}


	//        sub메뉴 마우스이벤트
	//서브메뉴에 마우스온상태일때 gnb 마우스온 컬러유지
	function mouseHover() {
		$(".sub").mouseenter(function () {
			$(this).prev().addClass("hover");
		});

		$(".sub").mouseleave(function () {
			$(this).prev().removeClass("hover");
		});
	}




//내정보 arrow_up 클릭시 슬라이드 업,다운
		function arrowUpDown() {
			$(".my_info_wrap ul li a").on("click", function () {
				 $(this).next().slideToggle();

			});
		}

      //캘린더 더보기
		function viewMore() {
			$(".list_wrap ul li.plus a").on("click", function () {
				 $(this).next().slideDown();

			});
		}
		//더보기 닫기
		function viewMoreClose(){

			$(".btn-r a.cbtn").on("click", function () {

				 $(".view_more_wrap").fadeOut();

			});
		}

	function viewMoreClose2(){
		$(".btn-r2 a.cbtn").on("click", function () {
		 $(".layer").fadeOut();
		});
	}

			// 메모등록 접기 펼치기
    function openClose() {
      $(".btn_arrow.on").on("click", function () {
        $(this).nextAll(".textarea_wrap2").slideToggle();
        var $btn = $(this);
        if (!$btn.hasClass("on")){
          $btn.addClass("on");
        } else {
          $btn.removeClass("on");
        }
      });
    }



		//전화번호부 그룹 열고닫기
		// function group_view(val) {
     //    if($("#bbbbb"+val).is(":visible")){
     //      $("#bbbbb"+val).hide();
     //    }else{
     //      $("#bbbbb"+val).show();
     //      }
     //  };

	function group_view(val) {
		if($("#bbbbb"+val).is(":visible")){
			$("#bbbbb"+val).slideUp(100);

		}else{
			$("#bbbbb"+val).slideDown(100);

			}
	};


	// function editMod(){
	// 	$("td .mod_text").on("click", function () {
	// 		$(this).next().slideToggle();
	// 	});
	// }

	function ccc(val){
			$("#ddddd"+val).slideToggle(100);

			}


	function infoArrow(){
		$(".info_arrow").on("click",function () {
				var $arrow = $(this);
				if ($arrow.hasClass("on")){
					$arrow.removeClass("on");
				} else {
					$arrow.addClass("on");
				}
			});
	}


// 사진보기
function fancyLaunch() {
		var fancyGallery = $("#images").find("a");
		fancyGallery.attr("rel","gallery").fancybox({
		type: "image"
		});
	$('#fancyLaunch').on('click', function() {
			fancyGallery.eq(0).click();
	});

}

function pic_view() {
	$(".pic_view").fancybox({
		padding:5,
		openEffect :'fade',
		nextEffect: 'fade',
		prevEffect: 'fade',
		closeEffect:'fade',
		afterShow: function() {
			$(".fancybox-title").wrapInner('<div />').show
			$(".fancybox-wrap").hover(function() {
						$(".fancybox-title").show();
					},
					function() {
						$(".fancybox-title").hide();
					});
		},
		helpers : {
			overlay : {
				css : {}
			},
			title: {
				type: 'over'
				// position: 'top'
			}
		}
	});
}



function layer_open(el,tmp1,tmp2){

	var temp = parent.$('#' + el);
	var bg = temp.prev().hasClass('bg');	//dimmed 레이어를 감지하기 위한 boolean 변수

	if(bg){
		parent.$('.layer').fadeIn();	//'bg' 클래스가 존재하면 레이어가 나타나고 배경은 dimmed 된다.
	}else{
		temp.fadeIn();
	}


	// 화면의 중앙에 레이어를 띄운다.
	if (temp.outerHeight() < $(document).height() ) temp.css('margin-top', '-'+temp.outerHeight()/2+'px');
	else temp.css('top', '10%');
	if (temp.outerWidth() < $(document).width() ) temp.css('margin-left', '-'+temp.outerWidth()/2+'px');



	if (tmp2=="print") {
		document.getElementById('sell_view').src = "/building/maemul.php?menuopen=not&bbs_data="+tmp1;
	}else if (tmp2=="reload") {
		document.getElementById('sell_view').src = "/building/building.php?menuopen=not&reload=false&bbs_data="+tmp1;
	} else {
		document.getElementById('sell_view').src = "/building/building.php?menuopen=not&bbs_data="+tmp1;
	}

	temp.find('a.cbtn').click(function(e){
		if(bg){
			parent.$('.layer').fadeOut(); //'bg' 클래스가 존재하면 레이어를 사라지게 한다.
		}else{
			temp.fadeOut();
		}
		e.preventDefault();
	});

}

function layerPopUp(e,el,tmp1,tmp2,iframe){

	var scrollTop = '';
	var newHeight = '100';

		scrollTop = $(document).scrollTop();
		newHeight = scrollTop + 50;

		e.stopPropagation();

		 $('.popup').hide();
		 var data = el;
		 var maskHeight = $(document).height();
		 var maskWidth = $(window).width();

		//마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채운다.
		$('#mask').css({'width':maskWidth,'height':maskHeight});

		if (tmp2=="print") {
			if(data=="popup1"){
				document.getElementById('buy_view_iframe').src = "/building/buy.php?menuopen=not&bbs_data="+tmp1;
			}else{
				document.getElementById('buy_view_iframe2').src = "/building/maemul.php?menuopen=not&bbs_data="+tmp1;
			}
		}else if (tmp2=="reload") {
			if(data=="popup1"){
				document.getElementById('buy_view_iframe').src = "/building/buy.php?menuopen=not&reload=false&bbs_data="+tmp1;
			}else{
				document.getElementById('buy_view_iframe2').src = "/building/building.php?menuopen=not&reload=false&bbs_data="+tmp1;
			}
		} else {
			if(data=="popup1"){
				document.getElementById('buy_view_iframe').src = "/building/buy.php?menuopen=not&bbs_data="+tmp1;
			}else{
				document.getElementById('buy_view_iframe2').src = "/building/building.php?menuopen=not&bbs_data="+tmp1;
			}
		}

		if(iframe == "Y")newHeight = 5;

		//애니메이션 효과 - 일단 1초동안 까맣게 됐다가 80% 불투명도로 간다.
		$('#mask').fadeIn(1000);
		$('#mask').fadeTo("slow",0.8);
		$('#' + data).css({
				'left': ($(document).width()/2)-($("#"+data).width()/2) + 'px',
				'top' : newHeight + 'px'
				}).show();

	//$('.popup-btn-close').click(function(e){
		//e.preventDefault();
		//$('#mask, .popup2').fadeOut();
	//});

	//$('.popup').click(function(e){
		//e.stopPropagation();
	//});

}

function layerPopUp2(e,el,tmp1,tmp2,iframe){

	var scrollTop = '';
	var newHeight = '100';

	scrollTop = $(parent.document).scrollTop();
	newHeight = scrollTop + 50;

	 //parent.$('.popup').hide();
	 var data = el;
	 var maskHeight = $(parent.document).height();
	 var maskWidth = $(parent.window).width();

	//마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채운다.
	parent.$('#mask').css({'width':maskWidth,'height':maskHeight});

	if(data=="popup1"){
		parent.document.getElementById('buy_view_iframe').src = "/building/buy.php?menuopen=not&bbs_data="+tmp1;
	}else if(data=="popup3"){
		parent.document.getElementById('buy_view_iframe3').src = "/building/building.php?menuopen=not&bbs_data="+tmp1;
	}else{
		parent.document.getElementById('buy_view_iframe2').src = "/building/building.php?menuopen=not&bbs_data="+tmp1;
	}

	//애니메이션 효과 - 일단 1초동안 까맣게 됐다가 80% 불투명도로 간다.
	parent.$('#mask').fadeIn(1000);
	parent.$('#mask').fadeTo("slow",0.8);
	parent.$('#' + data).css({
			'left': ($(parent.document).width()/2)-(parent.$("#"+data).width()/2) + 'px',
			'top' : newHeight + 'px'
			}).show();
}

function layerPopUp3(e,el,tmp1,tmp2,iframe){

	var scrollTop = '';
	var newHeight = '100';

	scrollTop = $(parent.parent.document).scrollTop();
	newHeight = scrollTop + 50;

	 //parent.parent.$('.popup').hide();
	 var data = el;
	 var maskHeight = $(parent.parent.document).height();
	 var maskWidth = $(parent.parent.window).width();

	//마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채운다.
	parent.parent.$('#mask').css({'width':maskWidth,'height':maskHeight});

	if(data=="popup1"){
		parent.parent.document.getElementById('buy_view_iframe').src = "/building/buy.php?menuopen=not&bbs_data="+tmp1;
	}else if(data=="popup3"){
		parent.parent.document.getElementById('buy_view_iframe3').src = "/building/building.php?menuopen=not&bbs_data="+tmp1;
	}else{
		parent.parent.document.getElementById('buy_view_iframe2').src = "/building/building.php?menuopen=not&bbs_data="+tmp1;
	}

	//애니메이션 효과 - 일단 1초동안 까맣게 됐다가 80% 불투명도로 간다.
	parent.parent.$('#mask').fadeIn(1000);
	parent.parent.$('#mask').fadeTo("slow",0.8);
	parent.parent.$('#' + data).css({
			'left': ($(parent.parent.document).width()/2)-(parent.parent.$("#"+data).width()/2) + 'px',
			'top' : newHeight + 'px'
			}).show();
}

function layerMPopUp(el,tmp1,tmp2,iframe){

	var scrollTop = '';
	var newHeight = '100';

	scrollTop = $(document).scrollTop();
	newHeight = scrollTop + 50;

	$('.popup').hide();
	var data = el;
	var maskHeight = $(document).height();
	var maskWidth = $(window).width();

	//마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채운다.
	$('#mask').css({'width':maskWidth,'height':maskHeight});

	if(el=="popup1"){
		document.getElementById('buy_view_iframe').src = tmp1;
	}else{
		document.getElementById('buy_view_iframe4').src = tmp1;
	}

	//애니메이션 효과 - 일단 1초동안 까맣게 됐다가 80% 불투명도로 간다.
	$('#mask').fadeIn(1000);
	$('#mask').fadeTo("slow",0.8);
	$('#' + data).css({
			'left': ($(document).width()/2)-($("#"+data).width()/2) + 'px',
			'top' : newHeight + 'px'
			}).show();
}

function layerPopUp_close(reload){
	if(reload=="Y"){
		location.reload();
	}else{
		$('#mask, .popup').fadeOut();
	}
}

function layerPopUp_close2(){
	$('#mask, .popup2').fadeOut();
}

function layerPopUp_close3(){
	$('.popup2').fadeOut();
}

//상담메모 보기
function viewC() {
	$(".list_wrap ul li.view button").on("click", function () {
		$(this).next().slideDown();
	});
	$(".btn_wrap_inline .btn_red").on("click", function () {
		$(this).next().slideDown();
	});
	$(".btn_view").on("click", function () {
		$(this).next().slideDown();
	});

}
function anotherPop() {
	$(".btn_ok2").on("click", function () {
		$(this).next().slideDown();
	});

}


//더보기 닫기
function viewClose(){

	$(".btn-r a.cbtn").on("click", function () {

		$(".view_c_wrap").fadeOut();
		$(".iframe_wrap").fadeOut();

	});
}


//메모보기
function viewC2() {
	$('.btn_memo').click(function(e) {
		var index = $(this).closest("").index();
		$('.iframe_wrap').hide();
		$('.iframe_wrap').eq(index).slideToggle("slow");
	});
}

//메모 댓글달기 열고 닫기
		function replyUpDown() {
			$(".btn_reply").on("click", function () {
				 $(this).next().slideToggle();
			});
		}

function btnClose() {
			$(" .btn_close" ).on("click", function () {
			 window.close();
		});
}

function set_frame_heigth(frame_name,f_height){
	$(frame_name).css("height",f_height+"px");
}