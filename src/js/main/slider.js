$(document).ready(function () {

    $('.mySlider__top').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.mySlider__nav'
    });
    $('.mySlider__nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.mySlider__top',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });
});

$(document).ready(function () {
    $('.collaction__slider').slick({
        dots: false,
        infinite: true,
        arrows: false,
        autoplay:true,
        speed: 350,
        fade: true,
        cssEase: 'linear'
    });
});