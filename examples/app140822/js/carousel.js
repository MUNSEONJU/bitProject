/**
*  Module
*
* Description
*/
angular.module('carousel', ['ui.bootstrap'])
.controller('CarouselCtrl', ['$scope', function($scope){
		$scope.myInterval = 2000;
  var slides = $scope.slides = [];
  var imgname = -1;
  $scope.addSlide = function() {
    slides.push({
      image: 'http://lorempixel.com/1200/400',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i=0; i<3; i++) {
    $scope.addSlide();
  }
}])


