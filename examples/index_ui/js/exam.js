angular.module('carousel', ['ui.bootstrap']);

//Carousel
function CarouselDemoCtrl($scope) {
  $scope.myInterval = 2000;
  var slides = $scope.slides = [];
  var imgname = -1;
  $scope.addSlide = function() {
    slides.push({
      image: 'img/' + ++imgname + '.png',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i=0; i<3; i++) {
    $scope.addSlide();
  }
}
