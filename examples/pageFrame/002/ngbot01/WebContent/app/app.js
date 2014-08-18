/**
* ngbotApp Module
*
* Description
*/
angular.module('ngbotApp', ['ngRoute','ngbot.carousel'])
	.config( function($routeProvider) {
		$routeProvider
			.when('/home', {templateUrl: 'template/homeExam.html'})
			.when('/guide', {templateUrl: 'template/tempExam.html'})
			.otherwise({redirectTo: '/home'})
		}
	);