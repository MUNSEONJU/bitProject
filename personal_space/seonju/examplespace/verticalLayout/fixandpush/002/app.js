/**
*  Module
*
* Description
*/
var app =  angular.module('myapp', ['ngNewbieTools']);

app.controller('commonController', function($component){
	console.log(document.styleSheets[0].media)
	$(".remocon").children("div").click(function(){
		var idSelector = "#" + $(this).data("remote");
		$component.toggler(idSelector,"active");
	})

})