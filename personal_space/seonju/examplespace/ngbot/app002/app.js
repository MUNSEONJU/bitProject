/**
* ngbotApp Module
*
* Description
*/
angular.module('ngbotApp', ['ngRoute'])
	.config( function($routeProvider ) {
		$routeProvider
			.when('/home', {templateUrl: 'template/homeExam.html'})
			.when('/guide', {templateUrl: 'template/guideExam.html'})
			.when('/project', {templateUrl: 'template/projectExam.html'})
			.when('/contact', {templateUrl: 'template/contactExam.html'})
			.when('/community', {templateUrl: 'template/communityExam.html'})
			.otherwise({redirectTo: '/guide'})
		}
	)