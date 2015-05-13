$(document).ready(function() {
    var fontsize = $.cookie('fontsize');
    // Set the user preference for fontsize
    if (fontsize=='small') {
        $("body").css("font-size","12px");
        $("body").css("line-height","13px");
        $("input").css("font-size","12px");
        $(".multselect").css("font-size","12px");
        $(".excl").css("font-size","12px");
        $("#imagefl").css("font-size","12px");
        $(".fle").css("font-size","12px");
        $(".fle").css("height","20px");
        $("#drop div").css("height","30px");
        $(".dhx_combo_input").css("height","16px");
        $("#name").css("height","16px");
        $(".resizable").css("font-size","12px");
        $(".dhx_combo_box").css("height","18px");
        $(".smallinp").css("height","16px");
        $(".uploadifyQueueItem").css("font-size","12px");
        $(".kwd").css("height","16px");
        $('<style media="print"> td {font-size: 12pt;line-height:13pt;} </style>').appendTo('head');
		$('<style media="print"> .box {width:18cm} </style>').appendTo('head');
	};
    if (fontsize=='med') {
        $("body").css("font-size","14px");
        $("body").css("line-height","15px");
        $("input").css("font-size","14px");
        $(".multselect").css("font-size","14px");
        $(".excl").css("font-size","14px");
        $("#imagefl").css("font-size","14px");
        $(".fle").css("font-size","14px");
        $(".fle").css("height","22px");
        $("#drop div").css("height","34px");
        $(".dhx_combo_input").css("height","18px");
        $("#name").css("height","18px");
        $(".resizable").css("font-size","14px");
        $(".dhx_combo_box").css("height","20px");
        $(".smallinp").css("height","18px");
        $(".uploadifyQueueItem").css("font-size","14px");
        $(".kwd").css("height","18px");
        $('<style media="print"> td {font-size: 14pt;line-height:15pt;} </style>').appendTo('head');
		$('<style media="print"> .box {width:17.5cm} </style>').appendTo('head');
	};
    if (fontsize=='large') {
        $("body").css("font-size","16px");
        $("body").css("line-height","17px");
        $("input").css("font-size","16px");
        $(".multselect").css("font-size","16px");
        $(".excl").css("font-size","16px");
        $("#imagefl").css("font-size","16px");
        $(".fle").css("font-size","16px");
        $(".fle").css("height","24px");
        $("#drop div").css("height","38px");
        $(".dhx_combo_input").css("height","20px");
        $("#name").css("height","20px");
        $(".resizable").css("font-size","16px");
        $(".dhx_combo_box").css("height","22px");
        $(".smallinp").css("height","20px");
        $(".uploadifyQueueItem").css("font-size","16px");
        $(".kwd").css("height","20px");
        $('<style media="print"> td {font-size: 16pt;line-height:17pt;} </style>').appendTo('head');
		$('<style media="print"> .box {width:17cm} </style>').appendTo('head');		
	};
    $("#small").click(function() {
        $("body").css("font-size","12px");
        $("body").css("line-height","13px");
        $("input").css("font-size","12px");
        $(".multselect").css("font-size","12px");
        $(".excl").css("font-size","12px");
        $("#imagefl").css("font-size","12px");
        $(".fle").css("font-size","12px");
        $(".fle").css("height","20px");
        $("#drop div").css("height","30px");
        $(".dhx_combo_input").css("height","16px");
        $("#name").css("height","16px");
        $(".resizable").css("font-size","12px");
        $(".dhx_combo_box").css("height","18px");
        $(".smallinp").css("height","16px");
        $(".uploadifyQueueItem").css("font-size","12px");
        $(".kwd").css("height","16px");
        $('<style media="print"> td {font-size: 12pt;line-height:13pt;} </style>').appendTo('head');
		$('<style media="print"> .box {width:18cm} </style>').appendTo('head');
        $.cookie('fontsize', 'small');
        $('#font').val('small');
    });
    $("#med").click(function() {
        $("body").css("font-size","14px");
        $("body").css("line-height","15px");
        $("input").css("font-size","14px");
        $(".multselect").css("font-size","14px");
        $(".excl").css("font-size","14px");
        $("#imagefl").css("font-size","14px");
        $(".fle").css("font-size","14px");
        $(".fle").css("height","22px");
        $("#drop div").css("height","34px");
        $(".dhx_combo_input").css("height","18px");
        $("#name").css("height","18px");
        $(".resizable").css("font-size","14px");
        $(".dhx_combo_box").css("height","20px");
        $(".smallinp").css("height","18px");
        $(".uploadifyQueueItem").css("font-size","14px");
        $(".kwd").css("height","18px");
        $('<style media="print"> td {font-size: 14pt;line-height:15pt;} </style>').appendTo('head');
		$('<style media="print"> .box {width:17.5cm} </style>').appendTo('head');
        $.cookie('fontsize', 'med');
        $('#font').val('med');
    });
    $("#large").click(function() {
        $("body").css("font-size","16px");
        $("body").css("line-height","17px");
        $("input").css("font-size","16px");
        $(".multselect").css("font-size","16px");
        $(".excl").css("font-size","16px");
        $("#imagefl").css("font-size","16px");
        $(".fle").css("font-size","16px");
        $(".fle").css("height","24px");
        $("#drop div").css("height","38px");
        $(".dhx_combo_input").css("height","20px");
        $("#name").css("height","20px");
		$(".resizable").css("font-size","16px");
        $(".dhx_combo_box").css("height","22px");
        $(".smallinp").css("height","20px");
        $(".uploadifyQueueItem").css("font-size","16px");
        $(".kwd").css("height","20px");
        $('<style media="print"> td {font-size: 16pt;line-height:17pt;} </style>').appendTo('head');
		$('<style media="print"> .box {width:17cm} </style>').appendTo('head');
        $.cookie('fontsize', 'large');
        $('#font').val('large');
    });
});
