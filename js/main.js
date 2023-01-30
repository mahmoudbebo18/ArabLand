$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        autoWidth: true,
        stagePadding: 0,
        dots:false,
        margin: 30,
        loop:true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        nav: true,
        navText: ['<img src="../imgs/arrow_left.png" />', '<img src="../imgs/arrow_right.png" />'],
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
});