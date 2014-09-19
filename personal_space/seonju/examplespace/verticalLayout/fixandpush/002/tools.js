
angular.module('ngNewbieTools', [])
  .factory('$component', function(){
    return {
      sectionArr: [],
      currLoc: 0,
      preLoc:0,

      simpleToggle: function(selector){
        if( $(selector).css("display") == "block" ){
          $(selector).css("display","none");
        } else 
          $(selector).css("display","block");
      }

      /**
      * scrollHider
      *
      * + paramenters
      *   -selector : 숨길거(선택자)
      *   -doNotHide : 숨기지 않을 범위(좌표 2차원배열)
      *     -> [ [min,max],[min,max],[min,max],[min,max],[min,max],[min,max],...]
      *   -preLoc, currLoc : 이전, 현재 
      */
      ,scrollHider: function(selector, doNotHideSection){
      	this.preLoc = this.currLoc;
      	this.currLoc = window.pageYOffset;
      	for(var i=0 ; i<doNotHideSection.length ; i++){
      		this.sectionArr.push(doNotHideSection[i]);
      	}

      	// 지정한 범위가 아닌경우 - 스크롤 위로 : none
      	if(this.currLoc>this.preLoc){
      		$(selector).css("display","none");
      	} else 
	   			// (나머지)지정한 범위가 아닌경우 - 스크롤 아래로 : block
	   			$(selector).css("display","block");

      	for(var i=0 ; i<this.sectionArr.length ; i++){
	      	// 지정 범위 안에 속할 경우 : block
	      	if(this.currLoc>this.sectionArr[i][0] && this.currLoc<this.sectionArr[i][1]){
	      		$(selector).css("display","block");
	      	} 
      	}

      	// 최상단 opacity
      	if(this.currLoc==0){
      		$(selector+" *").css("color","white");
      		$(selector).css("background","rgba(255,255,255,0)");
      	} else {
      		$(selector+" *").css("color","black");
      	}
     	}
      
      /**
      * toggler
      *
      * + 선행작업(css)
      *   -before: element{ ... }
      *   -after : element.[유저가 지정한 클래스이름]{ ... }
      * + parameters
      *   -selector : toggle 대상 선택자
      *   -classname : after 지정 클래스명
      */
      ,toggler:function(selector,classname){

        var element = $(selector);
          if( element.hasClass(classname) ){
            element.removeClass(classname);
          } else {
            element.addClass(classname);
          }
      }

    }
  })