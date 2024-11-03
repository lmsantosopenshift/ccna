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
							width:460,
							height:17,
							size:12,
							textAlign:"left"}];
							
	var slide_1_type = "IMAGE_POPOVER";
	
    var slide_1_texts = [{compId:"ID_s01_title",
								x:10,
								y:2,
								width:430,
								height:17,
								size:16,
								textAlign:"center"},
							{compId:"ID_sub_inst",
								x:9.3,
								y:282.85,
								width:430,
								height:17,
								size:12,
								textAlign:"left"}];
	var slide_1_images = [{name:"7_1_1_5_s1.jpg",
							x:16,
							y:25,
							width:406,
							height:253,
							type:""}];
	var slide_1_hotSpots = [{name:"images/7_1_1_5_s1_hotspot_1.png",
								x:301.3,
								y:79.25,
								textBoxId:"ID_s01_cap01",
								textBoxX:6,
								textBoxY:280.3,
								textBoxWidth:420,
								textBoxHeight:93,
								popupImage:"images/7_1_1_5_s1_popup_1.png",
								popupImageX:278.05,
								popupImageY:73.4
							},
							{name:"images/7_1_1_5_s1_hotspot_2.png",
								x:301.3,
								y:92.95,
								textBoxId:"ID_s01_cap02",
								textBoxX:6,
								textBoxY:280.3,
								textBoxWidth:420,
								textBoxHeight:93,
								popupImage:"images/7_1_1_5_s1_popup_2.png",
								popupImageX:276.25,
								popupImageY:71.55
							},
							{name:"images/7_1_1_5_s1_hotspot_3.png",
								x:185.8,
								y:196.45,
								textBoxId:"ID_s01_cap03",
								textBoxX:6,
								textBoxY:280.3,
								textBoxWidth:420,
								textBoxHeight:93,
								popupImage:"images/7_1_1_5_s1_popup_3.png",
								popupImageX:143.3,
								popupImageY:185.1
							}];
    var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							hotSpots:slide_1_hotSpots,
        					texts:slide_1_texts};
	
	var slide_2_type = "IMAGE_POPOVER";
	
    var slide_2_texts = [{compId:"ID_s02_title",
								x:10,
								y:2,
								width:430,
								height:17,
								size:16,
								textAlign:"center"},
							{compId:"ID_sub_inst",
								x:9.3,
								y:282.85,
								width:430,
								height:17,
								size:12,
								textAlign:"left"}];
	var slide_2_images = [{name:"7_1_1_5_s2.jpg",
							x:16,
							y:25,
							width:406,
							height:253,
							type:""}];
	var slide_2_hotSpots = [{name:"images/7_1_1_5_s2_hotspot_1.png",
								x:29.5,
								y:147,
								textBoxId:"ID_s02_cap01",
								textBoxX:6,
								textBoxY:280.3,
								textBoxWidth:420,
								textBoxHeight:93,
								popupImage:"images/7_1_1_5_s2_popup_1.png",
								popupImageX:21.65,
								popupImageY:120.5
							},
							{name:"images/7_1_1_5_s2_hotspot_2.png",
								x:86.8,
								y:161.05,
								textBoxId:"ID_s02_cap02",
								textBoxX:6,
								textBoxY:280.3,
								textBoxWidth:420,
								textBoxHeight:93,
								popupImage:"images/7_1_1_5_s2_popup_2.png",
								popupImageX:68.65,
								popupImageY:132
							},
							{name:"images/7_1_1_5_s2_hotspot_3.png",
								x:125.25,
								y:146.4,
								textBoxId:"ID_s02_cap03",
								textBoxX:6,
								textBoxY:280.3,
								textBoxWidth:420,
								textBoxHeight:93,
								popupImage:"images/7_1_1_5_s2_popup_3.png",
								popupImageX:89.6,
								popupImageY:129.45
							},
							{name:"images/7_1_1_5_s2_hotspot_4.png",
								x:219.15,
								y:155.9,
								textBoxId:"ID_s02_cap04",
								textBoxX:6,
								textBoxY:280.3,
								textBoxWidth:420,
								textBoxHeight:93,
								popupImage:"images/7_1_1_5_s2_popup_4.png",
								popupImageX:198.7,
								popupImageY:138.7
							},
							{name:"images/7_1_1_5_s2_hotspot_5.png",
								x:267.35,
								y:157.55,
								textBoxId:"ID_s02_cap05",
								textBoxX:6,
								textBoxY:280.3,
								textBoxWidth:420,
								textBoxHeight:93,
								popupImage:"images/7_1_1_5_s2_popup_5.png",
								popupImageX:249.45,
								popupImageY:136.2
							},
							{name:"images/7_1_1_5_s2_hotspot_6.png",
								x:321.95,
								y:148.85,
								textBoxId:"ID_s02_cap06",
								textBoxX:6,
								textBoxY:280.3,
								textBoxWidth:420,
								textBoxHeight:93,
								popupImage:"images/7_1_1_5_s2_popup_6.png",
								popupImageX:297.8,
								popupImageY:128.95
							},
							{name:"images/7_1_1_5_s2_hotspot_7.png",
								x:321.95,
								y:164.4,
								textBoxId:"ID_s02_cap07",
								textBoxX:6,
								textBoxY:280.3,
								textBoxWidth:420,
								textBoxHeight:93,
								popupImage:"images/7_1_1_5_s2_popup_7.png",
								popupImageX:306.6,
								popupImageY:144.45
							},
							{name:"images/7_1_1_5_s2_hotspot_8.png",
								x:339.75,
								y:150.6,
								textBoxId:"ID_s02_cap08",
								textBoxX:6,
								textBoxY:280.3,
								textBoxWidth:420,
								textBoxHeight:93,
								popupImage:"images/7_1_1_5_s2_popup_8.png",
								popupImageX:302.9,
								popupImageY:127.8
							},
							{name:"images/7_1_1_5_s2_hotspot_9.png",
								x:379.65,
								y:186.15,
								textBoxId:"ID_s02_cap09",
								textBoxX:6,
								textBoxY:280.3,
								textBoxWidth:420,
								textBoxHeight:93,
								popupImage:"images/7_1_1_5_s2_popup_9.png",
								popupImageX:370.45,
								popupImageY:179.2
							},
							{name:"images/7_1_1_5_s2_hotspot_10.png",
								x:357.3,
								y:186.15,
								textBoxId:"ID_s02_cap10",
								textBoxX:6,
								textBoxY:280.3,
								textBoxWidth:420,
								textBoxHeight:93,
								popupImage:"images/7_1_1_5_s2_popup_10.png",
								popupImageX:344.7,
								popupImageY:179.35
							},
							{name:"images/7_1_1_5_s2_hotspot_11.png",
								x:308.8,
								y:183.35,
								textBoxId:"ID_s02_cap11",
								textBoxX:6,
								textBoxY:280.3,
								textBoxWidth:420,
								textBoxHeight:93,
								popupImage:"images/7_1_1_5_s2_popup_11.png",
								popupImageX:286.05,
								popupImageY:180.6
							},
							{name:"images/7_1_1_5_s2_hotspot_12.png",
								x:234.2,
								y:182,
								textBoxId:"ID_s02_cap12",
								textBoxX:6,
								textBoxY:280.3,
								textBoxWidth:420,
								textBoxHeight:93,
								popupImage:"images/7_1_1_5_s2_popup_12.png",
								popupImageX:210.9,
								popupImageY:181.35
							},
							{name:"images/7_1_1_5_s2_hotspot_13.png",
								x:187.2,
								y:182.05,
								textBoxId:"ID_s02_cap13",
								textBoxX:6,
								textBoxY:280.3,
								textBoxWidth:420,
								textBoxHeight:93,
								popupImage:"images/7_1_1_5_s2_popup_13.png",
								popupImageX:174.7,
								popupImageY:180.95
							},
							{name:"images/7_1_1_5_s2_hotspot_14.png",
								x:156.25,
								y:174.3,
								textBoxId:"ID_s02_cap14",
								textBoxX:6,
								textBoxY:280.3,
								textBoxWidth:420,
								textBoxHeight:93,
								popupImage:"images/7_1_1_5_s2_popup_14.png",
								popupImageX:147.85,
								popupImageY:173.4
							},
							{name:"images/7_1_1_5_s2_hotspot_15.png",
								x:133.45,
								y:174.3,
								textBoxId:"ID_s02_cap15",
								textBoxX:6,
								textBoxY:280.3,
								textBoxWidth:420,
								textBoxHeight:93,
								popupImage:"images/7_1_1_5_s2_popup_15.png",
								popupImageX:114.5,
								popupImageY:173.4
							}];
    var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							hotSpots:slide_2_hotSpots,
        					texts:slide_2_texts};
	
	var slide_3_type = "IMAGE_POPOVER";
	
    var slide_3_texts = [{compId:"ID_s03_title",
								x:10,
								y:2,
								width:430,
								height:17,
								size:16,
								textAlign:"center"},
							{compId:"ID_sub_inst",
								x:9.3,
								y:282.85,
								width:430,
								height:17,
								size:12,
								textAlign:"left"}];
	var slide_3_images = [{name:"7_1_1_5_s3.jpg",
							x:16,
							y:25,
							width:406,
							height:253,
							type:""}];
	var slide_3_hotSpots = [{name:"images/7_1_1_5_s3_hotspot_1.png",
								x:257.8,
								y:159.25,
								textBoxId:"ID_s03_cap01",
								textBoxX:6,
								textBoxY:280.3,
								textBoxWidth:420,
								textBoxHeight:93,
								popupImage:"images/7_1_1_5_s3_popup_1.png",
								popupImageX:241.1,
								popupImageY:143.9
							}];
    var slide_3_object = {templateType:slide_3_type,
							x:0,
							y:0,
							images:slide_3_images,
							hotSpots:slide_3_hotSpots,
        					texts:slide_3_texts};
							
	
	
							
	var slide_object = [slide_1_object,slide_2_object,slide_3_object];

    return {templateType:template_type,
       		textObject:commonTexts,
			slideObject:slide_object};



}