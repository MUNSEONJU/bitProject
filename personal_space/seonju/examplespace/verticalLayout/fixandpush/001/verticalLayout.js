/**
* hide Module
*
* Description
*/
angular.module('verticalLayout', [])
	.factory('$hide', function(){
    return {
      sectionArr: [],
     	currLoc: 0,
     	preLoc:0,

     	simpleToggle: function(element){
        if( $(element).css("display") == "block" ){
          $(element).css("display","none");
        } else 
          $(element).css("display","block");
      }

     	,verticalToggle:function(element){

     	}
     	,horizontalToggle:function(element){

     	},

      // element : 숨길거(선택자)
      // doNotHide : 숨기지 않을 범위(좌표 2차원배열)
      //  -> [ [min,max],[min,max],[min,max],[min,max],[min,max],[min,max],...]
      // preLoc, currLoc : 이전, 현재 
      scrollHider: function(element, doNotHideSection){
      	this.preLoc = this.currLoc;
      	this.currLoc = window.pageYOffset;
      	for(var i=0 ; i<doNotHideSection.length ; i++){
      		this.sectionArr.push(doNotHideSection[i]);
      	}

      	// 지정한 범위가 아닌경우 - 스크롤 위로 : none
      	if(this.currLoc>this.preLoc){
      		$(element).css("display","none");
      	} else 
	   			// (나머지)지정한 범위가 아닌경우 - 스크롤 아래로 : block
	   			$(element).css("display","block");

      	for(var i=0 ; i<this.sectionArr.length ; i++){
	      	// 지정 범위 안에 속할 경우 : block
	      	if(this.currLoc>this.sectionArr[i][0] && this.currLoc<this.sectionArr[i][1]){
	      		$(element).css("display","block");
	      	} 
      	}

      	// 최상단 opacity
      	if(this.currLoc==0){
      		$(element+" *").css("color","white");
      		$(element).css("background","rgba(255,255,255,0)");
      	} else {
      		$(element+" *").css("color","black");
      	}
     	}
    }
  })