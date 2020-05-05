$(function () {

    $(window).scroll(function () {
        var top = $(window).scrollTop();
        if (top >= 100) {
            $("nav .navbar-nav").addClass('onScroll');
            $(".navbar-header").addClass('addBgc');
            if ($("nav").hasClass('addBgc')) {
                if ($(".navbar-header").hasClass('addBgc')) {
                    $(".navbar-header").removeClass('addBgc');
                }
            }
        } else {
            if ($("nav .navbar-nav").hasClass('onScroll')) {
                $("nav .navbar-nav").removeClass('onScroll');
                $(".navbar-header").removeClass('addBgc');
            }
            if ($("nav").hasClass('addBgc')) {
                $("nav").removeClass('addBgc');
            }
        }
    });

    $("nav").hover(function () {
        var top = $(window).scrollTop();

        if (top >= 100) {
            $("nav").addClass('addBgc');
            if ($("nav .navbar-nav").hasClass('onScroll')) {
                $("nav .navbar-nav").removeClass('onScroll');
            }
            if ($(".navbar-header").hasClass('addBgc')) {
                $(".navbar-header").removeClass('addBgc');
            }

        }


    }, function () {
        var top = $(window).scrollTop();
        if (top >= 100) {
            $("nav").removeClass('addBgc');
            $("nav .navbar-nav").addClass('onScroll');
            $(".navbar-header").addClass('addBgc');
        }
    });

});