$(document).on("scroll", function(){
    var h = $(window).scrollTop();
    var eeyi = $("#eeyi");
    var wu = $("#wu");
    var yu = $("#yu");

    var x = h / 16;

    eeyi.css("transform", "translateY(" + (x * 4) + "px)");
    eeyi.css("-webkit-transform", "translateY(" + (x * 4) + "px)");

    wu.css("transform", "translateY(" + (x * 2) + "px)");
    wu.css("-webkit-transform", "translateY(" + (x * 2) + "px)");

    yu.css("transform", "translateY(" + (x) + "px)");
    yu.css("-webkit-transform", "translateY(" + (x) + "px)");
});
