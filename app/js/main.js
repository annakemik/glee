$(function () {
    $('.top-slider__inner').slick({
        dots: true,
        arrows: false,
    });

    $('.partners__slider').slick({
        dots: true,
        arrows: false,
    });

    var mixerProductWeek = mixitup('.product-week', {
        controls: {
            scope: 'local'
        }
    });

    var mixerDesign = mixitup('.design', {
        controls: {
            scope: 'local'
        }
    });


});