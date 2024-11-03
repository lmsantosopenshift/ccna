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
        y:380,
        width:430,
        height:17,
        size:12,
        textAlign:"left"}];

    var slide_1_type = "IMAGE";
    var slide_1_images = [{name:"6_8_2_8_A.jpg",
        x:69,
        y:36,
        width:300.05,
        height:334.15,
        type:"STD"}];
    var slide_1_texts = [{compId:"ID_s1_title",
        x:5,
        y:2,
        width:450,
        height:17,
        size:16,
        textAlign:"center"}];
    var slide_1_object = {templateType:slide_1_type,
        x:0,
        y:0,
        images:slide_1_images,
        texts:slide_1_texts};

    var slide_2_type = "IMAGE";
    var slide_2_images = [{name:"6_8_2_8_B.jpg",
        x:69,
        y:36,
        width:300.6,
        height:334.75,
        type:"STD"}];
    var slide_2_texts = [{compId:"ID_s2_title",
        x:5,
        y:2,
        width:450,
        height:17,
        size:16,
        textAlign:"center"}];

    var slide_2_object = {templateType:slide_2_type,
        x:0,
        y:0,
        images:slide_2_images,
        texts:slide_2_texts};
	
    var slide_3_type = "IMAGE";
    var slide_3_images = [{name:"6_8_2_8_C.jpg",
        x:28,
        y:54,
        width:389.25,
        height:289.15,
        type:"STD"}];
    var slide_3_texts = [{compId:"ID_s3_title",
        x:5,
        y:2,
        width:450,
        height:17,
        size:16,
        textAlign:"center"}];

    var slide_3_object = {templateType:slide_3_type,
        x:0,
        y:0,
        images:slide_3_images,
        texts:slide_3_texts};

    var slides = [slide_1_object,slide_2_object,slide_3_object];

    return {templateType:template_type,
        textObject:commonTexts,
        slideObject:slides};

}