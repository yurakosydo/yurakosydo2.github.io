$(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 97) {
            $("nav").addClass('shrink');
        } else {
            $("nav").removeClass("shrink");
        }
    });
});