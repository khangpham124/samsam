$(function() {
    $('#home-slider').slick({
        dots: false,
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true
    });
    $('#cat1').slick({
        dots: false,
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1440,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('#cat2').slick({
        dots: false,
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1440,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('#cat3').slick({
        dots: false,
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1440,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.textIcon--search').click(function() {
        $('.formSearch').slideToggle(100);
    });
    $('#ex1').slider({
        formatter: function(value) {
            return 'Current value: ' + value;
        }
    });
});