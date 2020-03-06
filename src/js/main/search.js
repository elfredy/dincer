$(document).ready(function () {
    $('.play').on('click', function () {
        owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function () {
        owl.trigger('stop.owl.autoplay')
    })


    $('#open1').click(function (event) {
        $("#Search").fadeIn("slow");
    });

    $('#open2').click(function (event) {
        $("#Search").fadeIn("slow");
    });

    $('#close').click(function (event) {
        $("#Search").fadeOut("slow");
    });




    $("*").click(function (event) {
        if (!$(event.target).is("#Search")) {
            console.log('içeri')

        } else {
            $("#Search").fadeOut("slow");

        }
    });
});