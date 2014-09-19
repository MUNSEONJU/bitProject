$(function(){
  var string = location.hash;
  var strArray = string.split('#');
  var str = strArray[1];
 
  console.log(strArray);
  
  if(str == null) {
    console.log("hash값 없음");
    
    return 'index.html';
  }
  
  $.ajax({
    type : "POST",
    url : "/project/edit/"+strArray[1]+".json",
    data : {
      str : str    
    },
    success : function(result) {
      if(result.status == 'success') {
        console.log("저장된 정보 없음");
        
        location.href = 'index.html';
      } else {
        console.log("저장된 정보 출력");
        
        editor1.setValue(result.html);
        editor2.setValue(result.js);
      }
    }
  });
});