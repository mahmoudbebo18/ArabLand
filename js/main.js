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
    $('.slide').click(function (e) {
        e.preventDefault();
        $('.golas li').toggleClass('show hide')

    })


});

jQuery(function ($) {
    function AddReadMore() {
        //This limit you can set after how much characters you want to show Read More.
        var carLmt = 100;
        // Text to show when text is collapsed
        var readMoreTxt = " Read more";
        var sepDots = "..."
        // Text to show when text is expanded
        var readLessTxt = " Read less";


        //Traverse all selectors with this class and manipulate HTML part to show Read More
        $(".add-read-more").each(function () {
            if ($(this).find(".first-section").length)
                return;

            var allstr = $(this).text();
            if (allstr.length > carLmt) {
                var firstSet = allstr.substring(0, carLmt);
                var secdHalf = allstr.substring(carLmt, allstr.length);
                var strtoadd = firstSet + "<span class='second-section'>" + secdHalf + "</span><span class='read-more span'> " + sepDots + " </span> <a href='#' class='read-more' title='Click to Show More'>" + readMoreTxt + " </a> <a href='#' class='read-less' title='Click to Show Less'>" + readLessTxt + "</a>";
                $(this).html(strtoadd);
            }
        });

        //Read More and Read Less Click Event binding
        $(document).on("click", ".read-more,.read-less", function (e) {
            $(this).closest(".add-read-more").toggleClass("show-less-content show-more-content");
            e.preventDefault();
        });
    }

    AddReadMore();



    function increase() {
        var a = 1;
        var textBox = document.getElementById("text");
        textBox.value++;

    }

    function decrease() {
        var textBox = document.getElementById("text");
        textBox.value--;
    }

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