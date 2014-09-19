/**
*  Module
*
* Description
*/
var app =  angular.module('myapp', ['verticalLayout']);

app.controller('commonController', function($hide){


	$(".remocon").children("div").click(function(){
		var data = $(this).data("remote");

		if( $("#menu").hasClass("opened") ){
			$("#"+data).removeClass("opened");
			$("#contents-wrap").removeClass(data);
		} else {
			$("#"+data).addClass("opened");
			$("#contents-wrap").addClass(data);
		}
	})

})