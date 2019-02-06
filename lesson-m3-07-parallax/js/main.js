;(function ($) {
    $(function () {
        var w = $(window),
            b1 = $('.child:nth-child(1)'),
            b2 = $('.child:nth-child(2)'),
            b3 = $('.child:nth-child(3)'),
            b1t = b1.position().top,
            b2t = b2.position().top,
            b3b = b3.position().top,
            b1l = b1.position().left,
            b2l = b2.position().left,
            b3l = b3.position().left;


        console.log(b1t);
        console.log(b2t);
        console.log(b3b);

        $(window).on('scroll', function () {
            var scrollTop = w.scrollTop();
            console.log(scrollTop);
            b1.css('top', b1t + scrollTop / 10 + 'px');
            b2.css('top', b2t - scrollTop / 10 + 'px');
            b3.css({top: b3b + scrollTop / 5 + 'px', bottom: 'initial'});
        });

        w.on('mousemove', function (e) {

            b1.css({top: b1t + e.clientY / 50 + 'px', left: b1l - e.clientX / 20});
            b2.css({
                top: b2t + e.clientY / 20 + 'px',
                left: b2l + e.clientX / 10,
                transform: 'rotate3d(1, 0.1, 0, ' + (e.clientY / 10 + e.clientX / 10)  + 'deg)'
            });
            b3.css({
                top: b3b + e.clientY / 5 - 'px',
                left: b3l + e.clientX / 5,
                transform: 'rotate3d(0.98, 0.14, 0, ' + -(e.clientY / 10 + e.clientX / 10)  + 'deg)'
            });
        })

    });
})(jQuery);