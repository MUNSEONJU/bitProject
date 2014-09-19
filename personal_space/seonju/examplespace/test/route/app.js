/**
*  Module
*
* Description
*/
var app= angular.module('myapp', ['ngRoute']);
app.config( function($routeProvider) {
	$routeProvider
		.when('/main',{templateUrl:'temp.html'})
		.otherwise({redirectTo: '/main'})
})