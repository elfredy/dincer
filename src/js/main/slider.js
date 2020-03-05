$(document).ready(function () {

    $('.mySlider > .mySlider__top').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.mySlider > .mySlider__nav'
    });
    $('.mySlider > .mySlider__nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.mySlider > .mySlider__top',
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
        autoplay: true,
        speed: 350,
        fade: true,
        cssEase: 'linear'
    });
});

$(document).ready(function(){
    $('.news__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
});