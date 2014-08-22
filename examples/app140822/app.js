/**
* ngbotApp Module
*
* Description
*/
angular.module('ngbotApp', ['ngRoute','carousel'])
	.config( function($routeProvider ) {
		$routeProvider
			.when('/main', {templateUrl: 'template/main.html'})
			.when('/guide', {templateUrl: 'template/exam/guideExam.html'})
			.when('/project', {templateUrl: 'template/projects.html'})
			.when('/contact', {templateUrl: 'template/exam/contactExam.html'})
			.when('/community', {templateUrl: 'template/exam/communityExam.html'})
			.otherwise({redirectTo: '/guide'})
		}
	)