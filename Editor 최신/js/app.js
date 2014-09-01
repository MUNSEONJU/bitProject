$('#modal').hide();
var app = angular.module('ngNewbieEditor', ['resizer', 'ui.bootstrap']);

app.controller('MainCtrl', function($scope, $document) {
	$scope.swc = false;
	
	var editor1 = ace.edit("editor1");
  editor1.setTheme("ace/theme/monokai");
  editor1.getSession().setMode("ace/mode/html");
  editor1.setFontSize($scope.fontSize);
  editor1.setAnimatedScroll();
  
  var editor2 = ace.edit("editor2");
  editor2.setTheme("ace/theme/monokai");
  editor2.getSession().setMode("ace/mode/javascript");
  editor2.setFontSize($scope.fontSize);
  editor1.setAnimatedScroll();
	
 	editor1.on("change", function () {
		 $scope.update();
 	});
 	editor2.on("change", function () {
 		console.clear();
 		
 		if($scope.preContentSize > 0 && editor2.getValue().length == 0){
 			var rd = document.getElementById('result-div');
			rd.removeChild(document.getElementById('result'));
			$scope.update();
 		}
 		
 		if(editor2.getValue().length > 1) {
			$scope.update();
			$scope.update();
 		}
		$scope.preContentSize = editor2.getValue().length;
 	});
	 
	$scope.preContentSize = 0;
	$scope.fontSize = 14;
	
	
	$scope.save=  function () {
		alert('save()');
	};
	$scope.share=  function () {
		alert('share()');
	};
	$scope.download=  function () {
		alert('download()');
	};
	// Ctrl + s 막기
	$document.on('keydown', function(e){
		if(e.keyCode == 83 && 
			(navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
			e.preventDefault();
			$scope.save();
		}
	});
	// Ctrl + d 막기
	$document.on('keydown', function(e){
		if(e.keyCode == 68 && 
			(navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
			e.preventDefault();
			alert('ctrl + d');
		}
	});

	$scope.$watch('fontSize', function () {
		if(typeof($scope.fontSize) == 'string') {
			$scope.fontSize = parseInt($scope.fontSize);
		}
		editor1.setFontSize($scope.fontSize);
		editor2.setFontSize($scope.fontSize);
	});
	
	$scope.$watch('ub', function(){
		if($scope.bs == false && $scope.ub == true) {
			$scope.bs = true;
			if($scope.ng == false)
				$scope.ng = true;			
		}
		$scope.update();
	});
	
	$scope.$watch('ng', function(){
		var rd = document.getElementById('result-div');
		rd.removeChild(document.getElementById('result'));
		$scope.update();
	});
	$scope.$watch('bs', function(){
		if($scope.jq == false && $scope.bs == true) {
			$scope.jq = true;
		}
		$scope.update();
	});
	$scope.$watch('jqui', function(){
		if($scope.jq == false && $scope.jqui == true) 
			$scope.jq = true;
		$scope.update();
	});
	
	$scope.$watch('as', function(){
		if($scope.bs == false && $scope.as == true) {
			$scope.bs = true;
			if($scope.ng == false)
				$scope.ng = true;			
		}

		$scope.update();
	});
	
	$scope.$watch('je', function () {
		if(!($scope.je))
			document.getElementById('editor1_div').style.height = "94%";
		else
			document.getElementById('editor1_div').style.height = "45%";
		
		editor1.setTheme($scope.theme.value);
  	editor2.setTheme($scope.theme.value);
	});
	
	$scope.$watch('theme', function () {
  	editor1.setTheme($scope.theme.value);
  	editor2.setTheme($scope.theme.value);
 	});
 	
	$scope.close = function () {
		var rs = document.getElementById('result');
		var rbd = document.getElementById('result_btn_div');
		rbd.style.top = '39px';
		
		rs.style.borderRadius = "4px";
		rs.style.opacity = 1;
		rs.style.top = '30px';  
		rs.style.right = '10px';  
		rs.style.width =  '35%';  
		rs.style.height = '56%';
		$scope.show = true;
	};
	
	$scope.full = function () {
		var opc = 0;
		var rs = document.getElementById('result');
		var rbd = document.getElementById('result_btn_div');
		rbd.style.top = '7px';
		
		rs.style.borderRadius = 0;
		rs.style.opacity = 0;
		rs.style.top = '0%';  
		rs.style.right = '0%';  
		rs.style.width =  '100%';  
		rs.style.height = '100%';
		
		var si = setInterval(function () {
			opc++;
			rs.style.opacity = opc / 10;
		}, 30);
		
		setTimeout(function () {
			clearInterval(si);
			rs.style.opacity = 1;
		}, 330);
		
		$scope.show = false;
	};
	
	$scope.update = function() {
		var iframe = document.getElementById('result');
		
		if(iframe == null) {
			console.log('새 iframe 생성');
			iframe = document.createElement('iframe');
			iframe.setAttribute('id', 'result');
			iframe.setAttribute('frameborder', '0');
			
			document.getElementById('result-div').appendChild(iframe);
		}
		
		var idoc = (iframe.contentDocument) ? iframe.contentDocument : iframe.contentWindow.document;
		idoc.open();
		
		// Error Handler
		window.frames[0].onerror = function (msg, url, line) {
			$('#error-div').fadeIn();
			var em = document.getElementById('error-msg');
			em.innerText = msg;
			si = setTimeout(function() {
				$('#error-div').fadeOut(800);
			}, 2500);
		};
		
		if($scope.ng)
			idoc.writeln('<script src="https://code.angularjs.org/1.2.9/angular.min.js" defer="defer"></script>');
		if($scope.ngrt)
			idoc.writeln('<script src="https://code.angularjs.org/1.2.23/angular-route.min.js"></script>');
		if($scope.ngani)
			idoc.writeln('<script src="https://code.angularjs.org/1.2.23/angular-animate.min.js"></script>');
		if($scope.jq)
			idoc.write('<script src="http://code.jquery.com/jquery-2.0.3.min.js"></script>');
		if($scope.ub)
			idoc.write('<script src="http://angular-ui.github.io/bootstrap/ui-bootstrap-tpls-0.11.0.js"></script>');
		if($scope.jqui)
			idoc.writeln('<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>');
		if($scope.bs) {
			idoc.writeln('<link href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" rel="stylesheet">');
			idoc.writeln('<script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0-wip/js/bootstrap.min.js"></script>');
		}
		if($scope.as) {
			idoc.write('<script src="//oss.maxcdn.com/angular.strap/2.0.0/angular-strap.min.js"></script>');
			idoc.write('<script src="//oss.maxcdn.com/angular.strap/2.0.0/angular-strap.tpl.min.js"></script>');
		}
		
		idoc.writeln(editor1.getValue());
	

		if($scope.je && editor1.getValue() != '') {
			var scriptCode = document.createElement('script');
			scriptCode.text = editor2.getValue();
			if(idoc.body != null)
				idoc.body.appendChild(scriptCode);
		}
		
		var anchors;
		if(anchors = idoc.getElementsByTagName('a') != null) {
			for (var i = 0; i < anchors.length; i++)
		  	anchors[i].target = '_blank';
		}
	 	idoc.close();
		
	 	// HTML태그안 속성 뽑기
		// console.log((idoc.documentElement).attributes[0]);
		
		// body태그 속성
		// console.log((idoc.body).attributes[0]);
		
		
	};
	
	
	 
	$scope.posOptions = [
		{position : 'onLoad', value : "1"},
		{position : 'onDomReady', value : "2"},
		{position : 'in <head>', value : "3"},
		{position : 'in <body>', value : "4"}
	]; 
 $scope.scriptPosition = $scope.posOptions[0]; // default value : onLoad
	// Editor Theme Object
 	$scope.themeOptions = [
    { value : "ace/theme/ambiance" , name : "ambiance " },
    { value : "ace/theme/chaos" , name : "chaos " },
    { value : "ace/theme/chrome" , name : "chrome " },
    { value : "ace/theme/clouds" , name : "clouds " },
    { value : "ace/theme/clouds_midnight" , name : "clouds_midnight " },
    { value : "ace/theme/cobalt" , name : "cobalt " },
    { value : "ace/theme/crimson_editor" , name : "crimson_editor " },
    { value : "ace/theme/dawn" , name : "dawn " },
    { value : "ace/theme/dreamweaver" , name : "dreamweaver " },
    { value : "ace/theme/eclipse" , name : "eclipse " },
    { value : "ace/theme/github" , name : "github " },
    { value : "ace/theme/idle_fingers" , name : "idle_fingers " },
    { value : "ace/theme/katzenmilch" , name : "katzenmilch " },
    { value : "ace/theme/kr_theme" , name : "kr_theme " },
    { value : "ace/theme/kuroir" , name : "kuroir " },
    { value : "ace/theme/merbivore" , name : "merbivore " },
    { value : "ace/theme/merbivore_soft" , name : "merbivore_soft " },
    { value : "ace/theme/mono_industrial" , name : "mono_industrial " },
    { value : "ace/theme/monokai" , name : "monokai " },
    { value : "ace/theme/pastel_on_dark" , name : "pastel_on_dark " },
    { value : "ace/theme/solarized_dark" , name : "solarized_dark " },
    { value : "ace/theme/solarized_light" , name : "solarized_light " },
    { value : "ace/theme/terminal" , name : "terminal " },
    { value : "ace/theme/textmate" , name : "textmate " },
    { value : "ace/theme/tomorrow" , name : "tomorrow " },
    { value : "ace/theme/tomorrow_night" , name : "tomorrow_night " },
    { value : "ace/theme/tomorrow_night_blue" , name : "tomorrow_night_blue " },
    { value : "ace/theme/tomorrow_night_bright" , name : "tomorrow_night_bright " },
    { value : "ace/theme/tomorrow_night_eighties" , name : "tomorrow_night_eighties " },
    { value : "ace/theme/twilight" , name : "twilight " },
    { value : "ace/theme/vibrant_ink" , name : "vibrant_ink " },
    { value : "ace/theme/xcode" , name : "xcode" }
	];
  $scope.theme = $scope.themeOptions[18]; // default value : monokai
  
  $scope.goRight = function () {
  	var modal = $('#modal');
	 	$('#modal').show("slide", { direction: "left" }, 200);
  	$('#box').fadeIn();
	};
	
	$scope.goBack = function () {
		var modal = $('#modal');
		$('#modal').hide("slide", { direction: "left" }, 300);
		$('#box').fadeOut();
	}; 
	 
	 
	 
});


app.directive('settings', function(){
	return {
		restrict: 'E',
		templateUrl: 'partial/settings.html'
	};
});
app.directive('myAccordion', function(){
	return {
		restrict: 'E',
		templateUrl: 'partial/accordion.html'
	};
});





