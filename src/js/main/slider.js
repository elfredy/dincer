$(document).ready(function () {

    $('.topSlider').slick({
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        speed: 350,
        fade: true,
        cssEase: 'linear'
    });
    $('.navSlider').slick({
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        speed: 350
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