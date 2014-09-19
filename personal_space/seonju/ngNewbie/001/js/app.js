var app = angular.module('application', ['ngNewbieTools']);


app.controller('commonController', function($scope){

		$(".remocon").children("div").click(function(){

			if( $("#menu-wrap").hasClass("opened") ){
				$("#contents-wrap").removeClass("opened");
				$("#menu-wrap").removeClass("opened");
				$("#transparency-cover").removeClass("opened");
				$("#topbar").removeClass("opened");
			} else {
				$("#contents-wrap").addClass("opened");
				$("#menu-wrap").addClass("opened");
				$("#transparency-cover").addClass("opened");
				$("#topbar").addClass("opened");
			}
		})

});
