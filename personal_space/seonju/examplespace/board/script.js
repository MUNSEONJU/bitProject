var app = angular.module('myapp', ['wysiwyg.module']);
  app.controller('ctrl', function($scope){
  	$scope.articles = 
  		[{"no":"16", "title":"제목4", "writer":"길동", "date":"2010-10-10", "count":" 5"}
  		,{"no":"15", "title":"제목3", "writer":"홍동", "date":"2010-10-10", "count":" 4"}
  		,{"no":"14", "title":"제목2", "writer":"홍길", "date":"2010-10-10", "count":" 2"}
  		,{"no":"13", "title":"제목4", "writer":"길동", "date":"2010-10-10", "count":" 5"}
  		,{"no":"12", "title":"제목3", "writer":"홍동", "date":"2010-10-10", "count":" 4"}
  		,{"no":"11", "title":"제목2", "writer":"홍길", "date":"2010-10-10", "count":" 2"}
  		,{"no":"10", "title":"제목4", "writer":"길동", "date":"2010-10-10", "count":" 5"}
  		,{"no":"9", "title":"제목3", "writer":"홍동", "date":"2010-10-10", "count":" 4"}
  		,{"no":"8", "title":"제목2", "writer":"홍길", "date":"2010-10-10", "count":" 2"}
  		,{"no":"7", "title":"제목4", "writer":"길동", "date":"2010-10-10", "count":" 5"}
  		,{"no":"6", "title":"제목3", "writer":"홍동", "date":"2010-10-10", "count":" 4"}
  		,{"no":"5", "title":"제목2", "writer":"홍길", "date":"2010-10-10", "count":" 2"}
  		,{"no":"4", "title":"제목4", "writer":"길동", "date":"2010-10-10", "count":" 5"}
  		,{"no":"3", "title":"제목3", "writer":"홍동", "date":"2010-10-10", "count":" 4"}
  		,{"no":"2", "title":"제목2", "writer":"홍길", "date":"2010-10-10", "count":" 2"}
  		,{"no":"1", "title":"제목1", "writer":"홍길동", "date":"2010-10-10", "count":" 1"}
  		]	
  })
