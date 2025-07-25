// Home Page 1 

$(document).ready(function () {
    function initializeOwl() {
        var centerEnabled = $(window).width() >= 992; // Set center to true for screens 992px and above
        $('.testimonial-con .owl-carousel').owlCarousel({
            center: centerEnabled,
            margin: 30,
            nav: true,
            loop: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 4500,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }

    // Initialize Owl Carousel
    initializeOwl();

    // On resize, destroy and reinitialize the carousel
    $(window).resize(function() {
        $('.testimonial-con .owl-carousel').trigger('destroy.owl.carousel');
        initializeOwl(); // Reinitialize with updated center option
    });
});

// VPS Page

$(document).ready(function () {
    var owl = $('.server-con .owl-carousel');
    owl.owlCarousel({
        margin: 30,
        nav: true,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4500,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 4
            },
            1200: {
                items: 6
            }
        }
    })
})