angular.module('ngEditor.Resizer', [])
.directive('resizer', function($document) {

    return function($scope, $element, $attrs) {

        $element.on('mousedown', function(event) {
            event.preventDefault();
            $document.on('mousemove', mousemove);
            $document.on('mouseup', mouseup);
        });
        $element.on('dblclick', function(event) {
            event.preventDefault();
            
            
            if($($attrs.resizerLeft).width() > 100) {
            	$($element).css({
	              left: 0
	            });
	            $($attrs.resizerLeft).css({
	              width: 0
	            });
	            $($attrs.resizerRight).css({
	              left: 6
	            });
            } else {
        			$($element).css({
              	left: 200
	            });
          	 	$($attrs.resizerLeft).css({
	              width: 200
	            });
	            $($attrs.resizerRight).css({
	              left: 206
	            });
            }
        });

        function mousemove(event) {
            if ($attrs.resizer == 'vertical') {
              	// Handle vertical resizer
                var x = event.pageX;
                if ($attrs.resizerMax && x > $attrs.resizerMax) {
                    x = parseInt($attrs.resizerMax);
                }
          
                $element.css({
                    left: x + 'px'
                });
								
                $($attrs.resizerLeft).css({
                    width: x + 'px'
                });
                $($attrs.resizerRight).css({
                    left: (x + parseInt($attrs.resizerWidth)) + 'px'
                });
            }
             // else {
                // // Handle horizontal resizer
                // var y = window.innerHeight - event.pageY;
// 
                // $element.css({
                    // bottom: y + 'px'
                // });
// 
                // $($attrs.resizerTop).css({
                    // bottom: (y + parseInt($attrs.resizerHeight)) + 'px'
                // });
                // $($attrs.resizerBottom).css({
                    // height: y + 'px'
                // });
            // }
        }

        function mouseup() {
            $document.unbind('mousemove', mousemove);
            $document.unbind('mouseup', mouseup);
        }
    };
});




