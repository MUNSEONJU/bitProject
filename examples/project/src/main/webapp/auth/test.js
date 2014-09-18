angular.module('sampleApp', [])
.controller('Ctrl',function($scope, $http) {
  $scope.email = '';
  
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
      console.log(result.test);
    });
 };
});
 
window.onload = function() {
  $("#pwd1").blur(blur);
  $("#pwd2").blur(blur);
  $("#add").click(add);
};

function blur() {
  event.preventDefault();

  var pwd1 = $("#pwd1").val();
  var pwd2 = $("#pwd2").val();

  $.ajax({
    type : "POST",
    url : "../check/pwd.json",
    data : {
      pwd1 : pwd1,
      pwd2 : pwd2
    },
    success : function(result) {
      $("#pwtext").html(result.test);
      
    }
  });
};

function add() {
  event.preventDefault();
  
  var email = $("#email").val();
  var pwd1 = $("#pwd1").val();
  var pwd2 = $("#pwd2").val();
  
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
          if(result.test == "아이디가 중복 됩니다.") {
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
    location.href = "app.html";
  }
};