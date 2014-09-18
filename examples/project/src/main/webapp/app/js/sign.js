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

.controller('checkpwd', function ($scope, $http) {
        $scope.result = '';
        $scope.vsb = 'hidden;';
        
        $scope.email = '';
        
        $scope.pwd1 = '';
        $scope.pwd2 = '';
        
        $scope.up = function() {
          var reqPromise = $http({
           method : 'POST',
           url : '../check/email.json',
           params: {
             email: $scope.email
           }
          });
          reqPromise.success(function(result) {
            $("#loadtext").html(result.test);
          });
       };
        
        $scope.check = function () {
          //console.log('check() called');
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
        
      });

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
    event.preventDefault();
    
    var email = $("#exampleInputEmail1").val();
    var pwd1 = $("#exampleInputPassword1").val();
    var pwd2 = $("#exampleInputPassword2").val();
    
    if (email != "") {
      if(pwd1 == '' && pwd2 == '') {
        alert("비밀번호를 입력하세요");
      }
      else if (pwd1 == pwd2) {
        var password = pwd2;
        $.ajax({
          type : "POST",
          url : "../member/add.json",
          data : {
            email : email,
            password : password
          },
          success : function(result) {
            if(data == "아이디가 중복 됩니다.") {
              alert(result.test);
            }
            else {
              alert(result.test);
              location.href = "app.html";
            }
          }
        });
      }
      else if(pwd1 != pwd2) {
        alert("비밀번호를 확인하세요.");
      }
    }
    else {
      alert("이메일을 입력하세요");
      //location.href = "app.html";
    }
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};


