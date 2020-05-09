$(function () {

    // when scrool the menu disapears
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

    // when hover over the nav bar the navigation bar appearse
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

    // add delay to the carousel slider

    $('.carousel').carousel({
        interval: 8000
    });

    // js for the magnific popup

    $('.store-area').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    // js for the owl carousel
    $("#dishes-wrap").ready(function () {
        $(".owl-carousel").owlCarousel({
            items: 3,
            autoplay: true,
            smartSpeed: 700,
            loop: true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                }
            }
        });
    });

});