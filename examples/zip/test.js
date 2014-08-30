angular.module('sampleApp', []).
controller('Ctrl',function($scope, $http) {

  $scope.add = function() {
    
    var reqPromise = $http({
     method : 'POST',
     url : '../ngbot/ad.json',
     params: {
       html: edit.getValue()
     }
    });
    
    reqPromise.success(function(data,status,headers,config) {
      location.href = "test.html";
    });
 };
 
 $scope.list = function() {
   var reqPromise = $http({
    method : 'GET',
    url : '../ngbot/li.json'
   });
   reqPromise.success(function(data) {
    
     edit.setValue(data[0].html);
   });
  };
});