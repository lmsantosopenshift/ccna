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
    var slide_1_images = [{name:"6_4_2_3_A.jpg",
        x:61,
        y:29,
        width:338,
        height:338.05,
        type:"STD"}];
    var slide_1_texts = [{compId:"ID_s1_title",
        x:25,
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


    var slide_2_type = "TABLE";
    var slide_2_tables = [{compId:"ID_table",
        x:60.05,
        y:29,
        width:339.75,
        height:321.10}];
    var slide_2_texts = [];
    var slide_2_object = {templateType:slide_2_type,
        x:0,
        y:0,
        tables:slide_2_tables,
        texts:slide_2_texts};

    var slide_3_type = "IMAGE";
    var slide_3_images = [{name:"6_4_2_3_B.jpg",
        x:60.05,
        y:29,
        width:338.55,
        height:331.80,
        type:"STD"}];
    var slide_3_texts = [{compId:"ID_s3_title",
        x:25,
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

    var slides = [slide_1_object,slide_2_object,slide_3_object];

    return {templateType:template_type,
        textObject:commonTexts,
        slideObject:slides};

}
