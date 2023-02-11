$(document).ready(function () {
    $(".feeds .owl-carousel").owlCarousel({
        autoWidth: true,
        stagePadding: 0,
        dots: false,
        margin: 30,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        nav: true,
        navText: ['<i class="fas fa-3x fa-chevron-left"></i>', '<i class="fas fa-3x fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1,
                autoWidth: false,
            },
            575: {
                items: 2,
                autoWidth: false,
            },
            992: {
                items: 3,
                autoWidth: false,
            },
            1310: {
                items: 3,
                autoWidth: false,
                margin: 30,
            }
        }
    });
    $(".offers_details .owl-carousel").owlCarousel({
        slideSpeed: 300,
        paginationSpeed: 400,
        items: 1,
        itemsDesktop: false,
        itemsDesktopSmall: false,
        itemsTablet: false,
        itemsMobile: false,
        nav: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        dots: true,
        loop: true,
        navText: ['<i class="fas fa-3x fa-chevron-left"></i>', '<i class="fas fa-3x fa-chevron-right"></i>'],
    });


    $('.terms_modal').click(function (e) {
        e.preventDefault();
        $('#termsModal').modal('show')

    })
    $('.sign_in').click(function (e) {
        e.preventDefault();
        $('#login_modal').modal('show')

    });

    $('.join').click(function (e) {
        e.preventDefault();
        $('#cart_modal').modal('show')
    })
    //toggle text function
    $.fn.extend({
        toggleText: function (a, b) {
            return this.text(this.text() == b ? a : b);
        }
    });

    $('.hero_slide').click(function (e) {
        e.preventDefault();
        $('.add-read-more .text').toggleClass('show hide');
        $(this).toggleText('Read More', 'Read less');
    })

    $('.slide').click(function (e) {
        e.preventDefault();
        $('.golas li').toggleClass('show hide');
        $(this).toggleText('Read More', 'Read less');
    });

    $('.more_about').click(function (e) {
        e.preventDefault();
        $('.hide_about').toggleClass('show hide');
        $(this).toggleText('Read More', 'Read less');
    });

    $('.more_ser').on('click', function (e) {
        e.preventDefault();
        $('.hide_ser').toggleClass('show');
        $(this).toggleText('Read More', 'Read less');
    })
    $('.more_sauid').on('click', function (e) {
        e.preventDefault();
        $('.hide_sauid').toggleClass('show');
        $(this).toggleText('Read More', 'Read less');
    });

    $('.input')
        .focus(function () {
            $(this).prev('label').addClass('u-hidden');
        })
        .blur(function () {
            n = $(this).val();
            if (n.length < 1) {
                $(this).prev('label').removeClass('u-hidden');
            } else {
                $(this).prev('label').addClass('u-hidden');
            }
        });
});

jQuery(function ($) {

    var $textbox = $("#incdec input");

    $("#up").click(function () {
        var value = parseInt($textbox.val(), 10);

        $textbox.val(value + 1);
    });

    $("#down").click(function () {
        var value = parseInt($textbox.val(), 10);

        if (value > 0) {
            $textbox.val(value - 1);
        }
    });
});