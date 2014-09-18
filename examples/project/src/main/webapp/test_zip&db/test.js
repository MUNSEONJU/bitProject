// 주소 쳣을때 시작되는 부분
$(function(){
  var string = location.hash;
  var strArray = string.split('#');
  var str = strArray[1];
 
  console.log(strArray);
  
  if(str == null) {
    console.log("hash값 없음");
    return 'test.html';
  }
  
  $.ajax({
    type : "POST",
    url : "../edit/"+strArray[1]+".json",
    data : {
      str : str    
    },
    success : function(result) {
      if(result.status == 'success') {
        console.log("저장된 정보 없음");
        
        location.href = 'test.html';
      } else {
        console.log("저장된 정보 출력");
        
        edit.setValue(result.html);
        edit1.setValue(result.js);
      }
    }
  });
});

// 디비에 보내는 부분
angular.module('sampleApp', [])
.controller('Ctrl',function($scope, $http) {
  
  $scope.add = function() {
    // 문자열 랜덤 생성
    var ar  = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var randstr = '';       
    for(var i = 0; i < 6; i++) {
      var randTnum = Math.floor(Math.random() * ar.length);
      randstr += ar[randTnum];
    };
    
    console.log(randstr);

    var reqPromise = $http({
     method : 'POST',
     url : '../ngbot/add.json',
     params: {
       randstr : randstr,
       html: edit.getValue(),
       js: edit1.getValue()
     }
    });
    
    reqPromise.success(function(result) {
      // 중복되면 다시 불려지고 중복 안되면 등록
      if (result.status == 'success') {
        console.log(result.status + "중복됨");
        
        $scope.add();
      }
      else if(result.status == 'faild'){
        console.log("등록....");
        console.log(result.status);
        
        location.hash = result.randstr;
        edit.setValue(result.html);
        edit1.setValue(result.js);        
      };
    });
  };
});