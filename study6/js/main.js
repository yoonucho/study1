$(document).ready(function(){
  	imageSlider();
  	btnAdd();
});





function btnAdd(){
	var lst= $(".section4 ul");
	var length = 1;
	var input_wrap = "<li>"+"<div class='input_wrap'><input type='text' placeholder='http://'></div>"+"<li>";
			// input_wrap +=("<div class='input_wrap'><input type='text' placeholder='http://'></div>");
			// input_wrap +="<li>";
	$(".btn_add").on("click", function(){
		// alert(lst.append(input_wrap).length)
		if(length==3){
			alert("최대 3개까지 입력가능합니다!")
			return false;
		}else{
			lst.append(input_wrap)
			length++;
		}
		// lst.append(input_wrap).length;
	return false;
	});
}

// function AddUrl(){
	
// 	var urlwrap = $('.lst_inputform');
// 	var urllength = 1;
	
// 	$('.loc_btn_add').on('click', function(){
// 		var urlnode =	'<li>';
// 		urlnode	+=	'<input type="text" placeholder="http://" id="sns_url' + (urllength+1) + '" name="sns_url' + (urllength+1) + '" style="width:824px" title="URL 입력" data-login-yn="Y" login-layer-top="3500">';
// 		urlnode	+=	'</li>';

// 		if(urllength == 3){return;}
// 		urlwrap.append(urlnode);
// 		urllength++;
// 	});
	
// }

// 대표님 소스
// function btnAdd(){
// 	var lst= $(".section4 ul");
// 	var input_wrap = "<li>";
// 			input_wrap +=("<div class='input_wrap'><input type='text' placeholder='http://'></div>");
// 			input_wrap +="<li>";
// 	$(".btn_add").on("click", function(){
// 		// alert("test");
// 		lst.append(input_wrap);
// 	return false;
// 	});
// }



// function AddUrl(){
//    var urlwrap = $('.lst_inputform');
//    var urlnode = '<li>';
//       urlnode   += '<input type="text" value="http://" style="width:824px" title="URL 입력">';
//       urlnode += '<li>';
//    $('.loc_btn_add').on('click',function(){
//       urlwrap.append(urlnode);
//    });
// }



function imageSlider(){

    var $imageSlider = $(".image-slider").imageSlider({
        startIndex: 0
    });
 
    $imageSlider.showImage(0);

    $imageSlider.on("change", function(e) {
        console.log("e.oldIndex= ", e.oldIndex, "e.newIndex= " + e.newIndex);
    })
}

       


