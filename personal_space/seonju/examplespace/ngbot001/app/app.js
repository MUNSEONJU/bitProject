/**
* ngbotApp Module
*
* Description
*/
angular.module('ngbotApp', ['ngbot.carousel', 'ngRoute'])
	.config( function($routeProvider) {
		$routeProvider
			.when('/home', {templateUrl: 'template/homeExam.html'})
			.when('/guide', {templateUrl: 'template/tempExam.html'})
			.otherwise({redirectTo: '/guide'})
		}
	)