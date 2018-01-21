$(document).ready(function(){
  	imageSlider();
  	//tab();
});







function imageSlider(){

    var $imageSlider = $(".image-slider").imageSlider({
        startIndex: 0
    });
 
    $imageSlider.showImage(0);

    $imageSlider.on("change", function(e) {
        console.log("e.oldIndex= ", e.oldIndex, "e.newIndex= " + e.newIndex);
    })
}

       


