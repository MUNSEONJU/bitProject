angular.module('example',[])
.factory('AppNm', [function(){
  	 return 'demo app'
  }])
    .factory('UserResource', [function(){
      var userList = [];
      return {
        addUser:function(newUser){
          userList.push(newUser);
        },
        updateUser:function(idx,updateUser){
          userList[idx] = updateUser;
        },
        deleteUser:function(idx){
          userList[idx] = undefined;
        },
        selectUser:function(){
          return userList;
        }
      }
    }])