angular.module('ap', []).

controller('ctrl', function($scope) {
	$scope.editor_theme;	
	
	
	$scope.wideEditor = function () {
		
	};
	
	$scope.defaultEditor = function () {
		
	};
	
	$scope.change_theme = function () {
  	editor1.setTheme($scope.editor_theme);
  	editor2.setTheme($scope.editor_theme);
  	editor3.setTheme($scope.editor_theme);
  };

	$scope.updateDoc = function() {
		var idoc = document.getElementById('result').contentWindow.document;
		idoc.open();
		idoc.write('<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.22/angular.min.js"></script>');
		idoc.write('<style>' + editor3.getValue() + '</style>');
		idoc.write('<script>' + editor2.getValue() + '</script>');
		idoc.write(editor1.getValue());
		idoc.close();

	};

	// ace에디터 생성
	var editor1 = ace.edit("editor1");
	editor1.setTheme("ace/theme/monokai");
	editor1.getSession().setMode("ace/mode/html");
	editor1.setFontSize(18);
	editor1.getAnimatedScroll();
	var editor2 = ace.edit("editor2");
	editor2.setTheme("ace/theme/monokai");
	editor2.getSession().setMode("ace/mode/javascript");
	editor2.setFontSize(18);
	var editor3 = ace.edit("editor3");
	editor3.setTheme("ace/theme/monokai");
	editor3.getSession().setMode("ace/mode/css");
	editor3.setFontSize(17);
	
	editor1.setOptions({
  	fontFamily: "consolas",
	});
	editor2.setOptions({
  	fontFamily: "consolas",
	});
	editor3.setOptions({
  	fontFamily: "consolas",
	});
	
	

	// 에디터 이벤트
	editor1.on('change', function() {
		$scope.updateDoc();
	});
	editor2.on('change', function() {
		$scope.updateDoc();
	});
	editor3.on('change', function() {
		$scope.updateDoc();
	});
	
	$scope.full = function () {
		
		document.getElementById('full').style.display = '';
		$('#full')
	  // .css('display','none') 
	  .fadeTo(500 , 1);
		
		var idoc2 = document.getElementById('result_full').contentWindow.document;
		idoc2.open();
		idoc2.write('<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.22/angular.min.js"></script>');
		idoc2.write('<style>' + editor3.getValue() + '</style>');
		idoc2.write('<script>' + editor2.getValue() + '</script>');
		idoc2.write(editor1.getValue());
		idoc2.close();
	};

	$scope.back = function () {
		$('#full')
	  .fadeOut(500 , 0);
	  
	};

	$scope.reset1 = function () {
		$scope.updateDoc();
	};
	$scope.reset2 = function () {
		var idoc2 = document.getElementById('result_full').contentWindow.document;
		idoc2.open();
		idoc2.write('<style>' + editor3.getValue() + '</style>');
		idoc2.write('<script>' + editor2.getValue() + '</script>');
		idoc2.write(editor1.getValue());
		idoc2.close();
	};
	
});




