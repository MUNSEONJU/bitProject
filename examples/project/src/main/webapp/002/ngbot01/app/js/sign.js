angular.module('sign', ['ui.bootstrap'])

.directive('signIn', function () {
  return {
  	restrict: 'E',
  	templateUrl: 'sign/signin_modal.html'  
  };
})

.directive('signUp', function () {
  return {
  	restrict: 'E',
  	templateUrl: 'sign/signup_modal.html'  
  };
})

.controller('checkpwd', ['$scope', function ($scope) {
        $scope.result = '';
        $scope.vsb = 'hidden;';
        
        $scope.pwd1 = '';
        $scope.pwd2 = '';
        
        $scope.check = function () {
          console.log('check() called');
          if($scope.pwd1 != '' && $scope.pwd2 != '') {
          	$scope.vsb = 'visible;';
            if($scope.pwd1 == $scope.pwd2) {
        			$scope.result = true;
            } else {
        			$scope.result = false;
            }
          } else {
          	$scope.vsb = 'hidden;';
          }
        };
      }]);

var ModalDemoCtrl1 = function ($scope, $modal, $log) {

  $scope.items = ['item1', 'item2', 'item3'];

  $scope.open = function (size) {

    var modalInstance = $modal.open({
      templateUrl: 'myModalContent1.html',
      controller: ModalInstanceCtrl1,
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Sign in modal closed');
    });
  };
};

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

var ModalInstanceCtrl1 = function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};


// sign up

var ModalDemoCtrl2 = function ($scope, $modal, $log) {

  $scope.items = ['item1', 'item2', 'item3'];
	
  $scope.open = function (size) {

    var modalInstance = $modal.open({
      templateUrl: 'myModalContent2.html',
      controller: ModalInstanceCtrl2,
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Sign up modal closed');
    });
  };
};

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

var ModalInstanceCtrl2 = function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};


