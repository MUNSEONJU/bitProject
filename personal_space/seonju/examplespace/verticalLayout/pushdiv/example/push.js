$(function(){
	function SlideOut(element){
	    $(".opened").removeClass("opened");
	    $("#"+element).addClass("opened");
	    $("#content").removeClass().addClass(element);
	    
	}
	$("#content div").click(function(){
	    var move = $(this).data('move');

	    SlideOut(move);
	    
	});
	
})