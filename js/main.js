/* Blog Slider */
(function () {
    $(".notice-carousel").slick({
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToScroll: 1
    });
    $(".news-carousel").slick({
        arrows: false,
        dots: true,
        /*infinite: true,*/
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 10000,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $(".our-achieved").slick({
        arrows: false,
        dots: true,
        /*infinite: true,*/
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 10000,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    // Training Program
    $('.training-program-tab').slick({
        slide: 'li',
        slidesToShow: 7,
        slidesToScroll: 1
    });
    ///// Training program tab
    $('ul.training-program-tab li a').click(function () {
        var tab_id = $(this).attr('href');
        // alert(tab_id);
        $('ul.training-program-tab li').removeClass('active');
        $('.tab-content div.active').removeClass('active');

        $(this).addClass('active');
        $(tab_id).addClass('active');
    });

    // Department slick item
    $(".faculty-member").slick({
        arrows: false,
        dots: true,
        /*infinite: true,*/
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 10000,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $(".popular-program").slick({
        arrows: false,
        dots: true,
        /*infinite: true,*/
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 10000,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    // Testimonial
    $('.dept-testimonial').slick({
        dots: true,
        slide: 'li',
        slidesToShow: 1,
        slidesToScroll: 1
    });

}());

// -------------------------------------------------------------
// Progress Bar
// -------------------------------------------------------------

(function () {

    $('.tr-rating-bar').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $.each($('div.progress-bar'), function () {
                $(this).css('width', $(this).attr('aria-valuenow') + '%');
            });
            $(this).unbind('inview');
        }
    });

}());

// -------------------------------------------------------------
//  Sticky Nav
// -------------------------------------------------------------


(function () {

    $(window).scroll(function () {
        var navbar = $('.navbar');
        var $this = $(this);

        if ($this.scrollTop() > 55) {
            navbar.addClass('navbar-fixed-top animated fadeInDown');
        } else {
            navbar.removeClass('navbar-fixed-top animated fadeInDown');
        }
    });

}());

// -------------------------------------------------------------
//  MagnificPopup
// -------------------------------------------------------------
(function () {
    //$('.video-link').magnificPopup({type:'iframe'});
    $('.video-link, .video-section-link').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
}());

/*script to scroll-to-top start*/
$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 600) {
        $('.footer-sticky').fadeIn();
    } else {
        $('.footer-sticky').fadeOut();
    }
});

$('.realtop').click(function () {
    $('html, body').animate({scrollTop: 0}, 700);
    return false;
});

/*script to scroll-to-top end*/
function turnOnPasswordStyle() {
    $('#password').attr('type', "password");
}


