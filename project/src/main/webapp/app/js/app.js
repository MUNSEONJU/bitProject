var app = angular.module('application', ['ngRoute','ngNewbieTools']);

app.config( function($routeProvider){
		$routeProvider
			.when('/main',{templateUrl: 'partials/main.html'})
			.when('/aa',{templateUrl: 'partials/temp/aa.html'})
			.when('/bb',{templateUrl: 'partials/temp/bb.html'})
			.when('/cc',{templateUrl: 'partials/temp/cc.html'})
			.otherwise({redirectTo: '/main'})
});

app.controller('commonController', function($scope){

		$(".remocon").children("div.toggleMenu").click(function(){

			if( $("#menu-wrap").hasClass("opened") ){
			  $("#contents").removeClass("opened");
			  $("#menu-wrap").removeClass("opened");
			  $("#transparency-cover").removeClass("opened");
			  $("#topbar").removeClass("opened");
			} else {
			  $("#contents").addClass("opened");
			  $("#menu-wrap").addClass("opened");
			  $("#transparency-cover").addClass("opened");
			  $("#topbar").addClass("opened");
			}
		})
		$(".remocon").children("div.toggleNav").click(function(){
			if( $("#header").hasClass("inactive") ){
			  $("#header").removeClass("inactive");
			} else{
			  $("#header").addClass("inactive");
			}
		})

});
