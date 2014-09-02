angular.module('ngEditor.controller', []).controller('MainCtrl', function($scope, $document) {
	editor1.setTheme("ace/theme/monokai");
	editor1.getSession().setMode("ace/mode/html");
	editor1.setFontSize($scope.fontSize);
	editor1.setAnimatedScroll();
	editor2.setTheme("ace/theme/monokai");
	editor2.getSession().setMode("ace/mode/javascript");
	editor2.setFontSize($scope.fontSize);
	editor1.setAnimatedScroll();
	$scope.ng = true;
	$scope.ngani = false;
	$scope.ngrt = false;
	$scope.je = true;
	$scope.jq = false;
	$scope.jqui = false;
	$scope.bs = false;
	$scope.as = false;
	$scope.ub = false;
	$scope.fontSize = 16;
	$scope.dynamicResult = true;
	$scope.errorCheck = true;
	$scope.preContentSize = 0;

	$scope.writeExample = function(examTitle) {
		switch(examTitle) {
			case 'todo':
				$scope.bs = true;
				$scope.jq = true;
				editor1.setValue('<body ng-app>\n\t<div ng-controller="ctrl">\n\t<input class="form-control" style="width:200px; display:inline;" ng-model="val">\n\t<button class="btn btn-success" ng-click="add()">ADD</button>\n\t<hr>\n\t<table class="table table-striped">\n\t\t<tr style="">\n\t\t\t<th>No</th><th>TODO List</th><th>Delete</th>\n\t\t</tr>\n\t\t<tr ng-repeat="do in list">\n\t\t\t<td>{{$index + 1}}</td> <td><input class="form-control" ng-model="list[$index].il"></td> <td>&nbsp;&nbsp; <button class="btn btn-danger" ng-click="remove($index)">X</button> </td>\n\t\t</tr>\n\t </table>\n\t</div>\n</body>');
				editor2.setValue('var ctrl = function($scope) {\n\t$scope.val="";\n\t$scope.add=function() {\n\t\tif($scope.val!=="") {\n\t\t\t$scope.list.push({il:$scope.val});\n\t\t\t$scope.val=""\n\t\t}\n\t};\n\t$scope.list = [\n\t\t\t{il: "Angular practice"},\n\t\t\t{il: "Buy Angular book"},\n\t\t\t{il: "Angular study"}\n\t\t];\n\t$scope.remove = function(index){\n\t\t$scope.list.splice(index,1);\n\t}\n};');
				break;
		}
	};

	editor1.on("change", function() {
		if($scope.dynamicResult)
			$scope.update(true);
	});
	editor2.on("change", function() {
		if($scope.dynamicResult)
			$scope.update(true);
	});

	$scope.run = function() {
		$scope.update();
		errorDiv.fadeOut(4500);
	};
	
	$scope.save = function() {
		alert('save()');
	};
	$scope.share = function() {
		alert('share()');
	};
	$scope.download = function() {
		alert('download()');
	};
	// Ctrl + s 막기
	$document.on('keydown', function(e) {
		if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
			e.preventDefault();
			$scope.save();
		}
	});
	// Ctrl + d 막기
	$document.on('keydown', function(e) {
		if (e.keyCode == 68 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
			e.preventDefault();
			alert('ctrl + d');
		}
	});

	$scope.$watch('fontSize', function(num) {
		if ( typeof($scope.fontSize) == 'string') {
			$scope.fontSize = parseInt($scope.fontSize);
		}
		editor1.setFontSize($scope.fontSize);
		editor2.setFontSize($scope.fontSize);
	});

	$scope.jsEditor =  function() {
		if ($scope.je) { 
			document.getElementById('editor1_div').style.height = "45%";
		} else {
			var rd = document.getElementById('result-div');
			rd.removeChild(document.getElementById('result'));
			document.getElementById('editor1_div').style.height = "94%";
		}
		$scope.update();
		editor1.setTheme($scope.theme.value);
	};

	$scope.changeTheme = function() {
		editor1.setTheme($scope.theme.value);
		editor2.setTheme($scope.theme.value);
	};

	$scope.close = function() {
		var rs = document.getElementById('result');
		var rbd = document.getElementById('result_btn_div');
		rbd.style.top = '39px';

		rs.style.borderRadius = "4px";
		rs.style.opacity = 1;
		rs.style.top = '30px';
		rs.style.right = '10px';
		rs.style.width = '35%';
		rs.style.height = '56%';
		$scope.show = true;
	};

	$scope.full = function() {
		var opc = 0;
		var rs = document.getElementById('result');
		var rbd = document.getElementById('result_btn_div');
		rbd.style.top = '7px';

		rs.style.borderRadius = 0;
		rs.style.opacity = 0;
		rs.style.top = '0%';
		rs.style.right = '0%';
		rs.style.width = '100%';
		rs.style.height = '100%';

		var si = setInterval(function() {
			opc++;
			rs.style.opacity = opc / 10;
		}, 20);

		setTimeout(function() {
			clearInterval(si);
			rs.style.opacity = 1;
		}, 220);

		$scope.show = false;
	};

	$scope.update = function() {
		var iframe = document.getElementById('result');
		if(iframe == null) {
			iframe = document.createElement('iframe');
			iframe.setAttribute('id', 'result');
			iframe.setAttribute('frameborder', '0');
			rd.appendChild(iframe);
		}
		var idoc = (iframe.contentDocument) ? iframe.contentDocument : iframe.contentWindow.document;
		idoc.open();

		if ($scope.ng)
			idoc.write('<script src="https://code.angularjs.org/1.2.10/angular.min.js" defer="defer"></script>');
		if ($scope.ngrt)
			idoc.write('<script src="https://code.angularjs.org/1.2.23/angular-route.min.js"></script>');
		if ($scope.ngani)
			idoc.write('<script src="https://code.angularjs.org/1.2.23/angular-animate.min.js"></script>');
		if ($scope.jq)
			idoc.write('<script src="http://code.jquery.com/jquery-2.0.3.min.js"></script>');
		if ($scope.ub)
			idoc.write('<script src="http://angular-ui.github.io/bootstrap/ui-bootstrap-tpls-0.11.0.js"></script>');
		if ($scope.jqui)
			idoc.writeln('<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>');
		if ($scope.bs) {
			idoc.write('<link href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" rel="stylesheet">');
			idoc.write('<script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0-wip/js/bootstrap.min.js"></script>');
		}
		if ($scope.as) {
			idoc.write('<script src="//oss.maxcdn.com/angular.strap/2.0.0/angular-strap.min.js"></script>');
			idoc.write('<script src="//oss.maxcdn.com/angular.strap/2.0.0/angular-strap.tpl.min.js"></script>');
		}
		idoc.write(editor1.getValue());

		var scriptTag = null;
		if ($scope.je && editor1.getValue() != '') {
			if (editor2.getValue().length != 0) {
				var scriptCode = editor2.getValue().replace('\n', '').replace('\t', '');
				scriptTag = document.createElement('script');
				if ($scope.errorCheck)
					scriptTag.text = 'try{eval(\"' + scriptCode + '\"); window.parent[\"showSuccess\"](); }catch(err){window.parent[\"showError\"](err)}';
				else
					scriptTag.text = scriptCode;
				if (idoc.body != null) {
					idoc.body.appendChild(scriptTag);
				}
			} else {
				$('#success-div').hide();
				$('#error-div').hide();
			}
		}

		var anchors;
		if ( anchors = idoc.getElementsByTagName('a') != null) {
			for (var i = 0; i < anchors.length; i++)
				anchors[i].target = '_blank';
		}

		idoc.close();

		// HTML태그안 속성 뽑기
		// console.log((idoc.documentElement).attributes[0]);
		// body태그 속성
		// console.log((idoc.body).attributes[0]);
	};

	// Editor Theme List
	$scope.themeOptions = [{
		value : "ace/theme/ambiance",
		name : "ambiance "
	}, {
		value : "ace/theme/chaos",
		name : "chaos "
	}, {
		value : "ace/theme/chrome",
		name : "chrome "
	}, {
		value : "ace/theme/clouds",
		name : "clouds "
	}, {
		value : "ace/theme/clouds_midnight",
		name : "clouds_midnight "
	}, {
		value : "ace/theme/cobalt",
		name : "cobalt "
	}, {
		value : "ace/theme/crimson_editor",
		name : "crimson_editor "
	}, {
		value : "ace/theme/dawn",
		name : "dawn "
	}, {
		value : "ace/theme/dreamweaver",
		name : "dreamweaver "
	}, {
		value : "ace/theme/eclipse",
		name : "eclipse "
	}, {
		value : "ace/theme/github",
		name : "github "
	}, {
		value : "ace/theme/idle_fingers",
		name : "idle_fingers "
	}, {
		value : "ace/theme/katzenmilch",
		name : "katzenmilch "
	}, {
		value : "ace/theme/kr_theme",
		name : "kr_theme "
	}, {
		value : "ace/theme/kuroir",
		name : "kuroir "
	}, {
		value : "ace/theme/merbivore",
		name : "merbivore "
	}, {
		value : "ace/theme/merbivore_soft",
		name : "merbivore_soft "
	}, {
		value : "ace/theme/mono_industrial",
		name : "mono_industrial "
	}, {
		value : "ace/theme/monokai",
		name : "monokai "
	}, {
		value : "ace/theme/pastel_on_dark",
		name : "pastel_on_dark "
	}, {
		value : "ace/theme/solarized_dark",
		name : "solarized_dark "
	}, {
		value : "ace/theme/solarized_light",
		name : "solarized_light "
	}, {
		value : "ace/theme/terminal",
		name : "terminal "
	}, {
		value : "ace/theme/textmate",
		name : "textmate "
	}, {
		value : "ace/theme/tomorrow",
		name : "tomorrow "
	}, {
		value : "ace/theme/tomorrow_night",
		name : "tomorrow_night "
	}, {
		value : "ace/theme/tomorrow_night_blue",
		name : "tomorrow_night_blue "
	}, {
		value : "ace/theme/tomorrow_night_bright",
		name : "tomorrow_night_bright "
	}, {
		value : "ace/theme/tomorrow_night_eighties",
		name : "tomorrow_night_eighties "
	}, {
		value : "ace/theme/twilight",
		name : "twilight "
	}, {
		value : "ace/theme/vibrant_ink",
		name : "vibrant_ink "
	}, {
		value : "ace/theme/xcode",
		name : "xcode"
	}];
	$scope.theme = $scope.themeOptions[18];
	// default value : monokai

	// setting menu animate (show)
	$scope.goRight = function() {
		var modal = $('#modal');
		$('#box').fadeIn(100);
		setTimeout(function() {
			$('#modal').show("slide", {
				direction : "left"
			}, 250);
		}, 100);
	};
	// setting menu animate (hide)
	$scope.goBack = function() {
		var modal = $('#modal');
		$('#box').fadeOut(100);
		setTimeout(function() {
			$('#modal').hide("slide", {
				direction : "left"
			}, 200);
		}, 100);
	};

});

