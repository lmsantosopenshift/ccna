//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "IMAGE";
		
	var slide_images = [{name:"3_1_3_2.jpg",
							x:70,
							y:55, 
							width:330, 
							height:330,
							type:"STD"}];
							
	var slide_texts = [{compId:"ID_title",
							 x:15,
							 y:2,
							 width:460,
							 height:17,
							 size:16,
							 textAlign:"center"}];
							
	var slide_object = {images:slide_images,
						texts:slide_texts};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);