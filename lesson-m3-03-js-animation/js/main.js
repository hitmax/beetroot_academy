;(function ($) {
    $(function () {

        $('a:first-of-type').on('click', function () {
            $(this).next().hide(2000);                     //speed in ms (500), keyword in brackets (slow, normal, fast)
        });
        $('a:nth-of-type(2)').on('click', function () {
            $(this).next().show(1000);
        });
        $('a:nth-of-type(3)').on('click', function () {
            $(this).next().toggle(500);
        });
        $('a:nth-of-type(4)').on('click', function () {
            $(this).next().slideUp(2000);
        });
        $('a:nth-of-type(5)').on('click', function () {
            $(this).next().slideDown(2000);
        });
        $('a:nth-of-type(6)').on('click', function () {
            $(this).next().slideToggle(2000);
        });
        $('a:nth-of-type(7)').on('click', function () {
            $(this).next().fadeToggle(1000, function () {           //fadeIn, fadeOut;
                console.log(1)                                      //add callback func AFTER param
            });
        });
        $('a:nth-of-type(8)').on('click', function () {
            $(this).next().fadeTo(1000, 0.5);              //first param - speed, second - opacity
        });
        $('a:nth-of-type(9)').on('click', function () {
            $(this).next().animate({
                width: '300px',
                height: '100px',
                margin: '20px 200px'
            }, 2000, function () {
                $(this).addClass('animated');
            });
        });

        var anc = $('#anchor').position().top;
        console.log(anc);
        $('a:last-of-type').on('click', function () {
            var body = $("html, body");
            body.stop().animate({
                    scrollTop: anc
                },
                500,
                'swing');
        });
    });
})(jQuery);