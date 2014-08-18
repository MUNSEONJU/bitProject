angular.module('myapp', []).

controller('ctrl', function ($scope) {
  $scope.code = '';
  
  $scope.evt = function (event) {
  	
		var idoc = document.getElementById('ifr').contentWindow.document;
		idoc.body.innerHTML = $scope.code;
  };
});






