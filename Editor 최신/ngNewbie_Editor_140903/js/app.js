"use strict";
var editor1 = ace.edit("editor1");
var editor2 = ace.edit("editor2");
var rd = document.getElementById('result-div');
var successDiv = $('#success-div');
var errorDiv = $('#error-div');


var showError = function(err){
	successDiv.hide();
	errorDiv.stop(true, true);
	errorDiv.fadeIn();
	document.getElementById('error-text').innerText = err.name + " : " + err.message;
};
var showSuccess = function(){
	errorDiv.hide();
	if(editor2.getValue().length == 0) {
		successDiv.hide();
		return;
	}	
	successDiv.stop();
	successDiv.stop();
	successDiv.fadeIn();
	successDiv.fadeOut(2500);
};



$('#modal').hide();
var app = angular.module('ngEditor', ['ngEditor.Resizer', 'ngEditor.controller']);

app.directive('settings', function() {
	return {
		restrict: 'E',
		templateUrl: 'partial/settings.html'
	};
});
app.directive('myAccordion', function() {
	return {
		restrict: 'E',
		templateUrl: 'partial/accordion.html'
	};
});
