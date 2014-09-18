angular.module('sampleApp', []).
controller('Ctrl',function($scope, $http) {
  $scope.email = '';
  
  $scope.up = function() {
    var reqPromise = $http({
     method : 'POST',
     url : '../check/email.check',
     params: {
       email: $scope.email
     }
    });
    reqPromise.success(function(data) {
      $("#loadtext").html(data);
    });
 };
});

/*
window.onload = function() {
  $("#email").keyup(keyup);
  $("#email").select(mouseleave);
};

function keyup() {
  event.preventDefault();

  var email = $("#email").val();
  $.ajax({
    type : "POST",
    url : "../check/email.do", // 이페이지에서 중복체크를 한다
    data : {
      email : email
    },
    cache : false,
    success : function(data) {
      $("#loadtext").html(data); // 해당 내용을 보여준다
    }
  });
};

function mouseleave() {
  var email = $("#email").val();

  $.ajax({
    type : "POST",
    url : "../check/email.do", // 이페이지에서 중복체크를 한다
    data : {
      email : email
    },
    cache : false,
    success : function(data) {
      $("#loadtext").html(data); // 해당 내용을 보여준다
    }
  });
};
*/