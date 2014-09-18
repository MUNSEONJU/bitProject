
window.onload = function() {
  $("#pwd1").blur(keyup);
  $("#pwd2").blur(keyup);
};

function keyup() {
  event.preventDefault();

  var pwd1 = $("#pwd1").val();
  var pwd2 = $("#pwd2").val();
  $.ajax({
    type : "POST",
    url : "../check/pwd.check", // 이페이지에서 중복체크를 한다
    data : {
      pwd1 : pwd1,
      pwd2 : pwd2
    },
    success : function(data) {
      $("#pwtext").html(data); // 해당 내용을 보여준다
    }
  });
};
