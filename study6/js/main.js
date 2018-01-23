$(document).ready(function(){
  	imageSlider();
  	btnAdd();
});





function btnAdd(){
	var lst= $(".section4 ul");
	var input_wrap = "<li>";
			input_wrap +=("<div class='input_wrap'><input type='text' placeholder='http://'></div>");
			input_wrap +="<li>";
	$(".btn_add").on("click", function(){
		// alert("test");
		lst.append(input_wrap);
	return false;
	});
}


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

       


