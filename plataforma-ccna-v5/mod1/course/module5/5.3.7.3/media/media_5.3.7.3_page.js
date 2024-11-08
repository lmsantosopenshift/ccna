loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js"); 

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "MULTI_BAR";
	var commonTexts = [{compId:"ID_inst",
							x:5,
							y:379, 
							width:460,
							height:17,
							size:12,
							textAlign:"left"}];
	
	var slide_1_type = "IMAGE";
	var slide_1_images = [{name:"5_3_7_3_A.jpg",
							x:58.45,
							y:109.95, 
							width:323,
							height:179,
							type:"STD"}];								
	var slide_1_texts = [{compId:"ID_s1_title",
							x:10,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"}];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
							
	
	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"5_3_7_3_B.jpg",
							x:4.45,
							y:90.5, 
							width:430.05,
							height:217.95,
							type:"STD"}];								
	var slide_2_texts = [{compId:"ID_s2_title",
							x:10,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"}];							
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts};
							
	var slide_3_type = "IMAGE";
	var slide_3_images = [{name:"5_3_7_3_C.jpg",
							x:6.15,
							y:42.8, 
							width:428.6,
							height:313.3,
							type:"STD"}];								
	var slide_3_texts = [{compId:"ID_s3_title",
							x:10,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"}];							
	var slide_3_object = {templateType:slide_3_type,
							x:0,
							y:0,
							images:slide_3_images,
							texts:slide_3_texts};
							
	var slide_4_type = "IMAGE";
	var slide_4_images = [{name:"5_3_7_3_D.jpg",
							x:3.9,
							y:67.9, 
							width:433.15,
							height:264.1,
							type:"STD"}];								
	var slide_4_texts = [{compId:"ID_s4_title",
							x:10,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"}];							
	var slide_4_object = {templateType:slide_4_type,
							x:0,
							y:0,
							images:slide_4_images,
							texts:slide_4_texts};
							
	var slide_5_type = "IMAGE";
	var slide_5_images = [{name:"5_3_7_3_E.jpg",
							x:5.7,
							y:56.45, 
							width:428.55,
							height:288,
							type:"STD"}];								
	var slide_5_texts = [{compId:"ID_s5_title",
							x:10,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"}];							
	var slide_5_object = {templateType:slide_5_type,
							x:0,
							y:0,
							images:slide_5_images,
							texts:slide_5_texts};
							
	var slide_6_type = "IMAGE";
	var slide_6_images = [{name:"5_3_7_3_F.jpg",
							x:5.5,
							y:93.8, 
							width:428.9,
							height:213.3,
							type:"STD"}];								
	var slide_6_texts = [{compId:"ID_s6_title",
							x:10,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"}];							
	var slide_6_object = {templateType:slide_6_type,
							x:0,
							y:0,
							images:slide_6_images,
							texts:slide_6_texts};
							
	var slide_7_type = "IMAGE";
	var slide_7_images = [{name:"5_3_7_3_G.jpg",
							x:6.45,
							y:53, 
							width:427,
							height:293.3,
							type:"STD"}];								
	var slide_7_texts = [{compId:"ID_s7_title",
							x:10,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"}];							
	var slide_7_object = {templateType:slide_7_type,
							x:0,
							y:0,
							images:slide_7_images,
							texts:slide_7_texts};
							
							
	var slide_8_type = "IMAGE";
	var slide_8_images = [{name:"5_3_7_3_H.jpg",
							x:6,
							y:53.8, 
							width:427.9,
							height:293.35,
							type:"STD"}];								
	var slide_8_texts = [{compId:"ID_s8_title",
							x:10,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"}];							
	var slide_8_object = {templateType:slide_8_type,
							x:0,
							y:0,
							images:slide_8_images,
							texts:slide_8_texts};
										
	var slides = [slide_1_object,slide_2_object,slide_3_object,slide_4_object,slide_5_object,slide_6_object,slide_7_object,slide_8_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
}



