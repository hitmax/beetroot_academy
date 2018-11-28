;(function ($) {
    $(function () {
        document.getElementsByTagName('span')[0].onclick = function () {
            console.log('you clicked on span');
        };
        document.getElementsByTagName('span')[0].onclick = function () {            //rewrite first event!
            console.log('you clicked on span second event');
        };

        function consoleLog() {
            console.log('div clicked from declarated function');
        }

        document.getElementsByTagName('div')[0].addEventListener('click', function () {
            console.log('you clicked on div! first event');
        });
        document.getElementsByTagName('div')[0].addEventListener('click', function () {         //will work with 2 and more events
            console.log('you clicked on div! second event');
        });
        document.getElementsByTagName('div')[0].addEventListener('click', consoleLog);

        document.getElementsByTagName('div')[0].removeEventListener('click', consoleLog);

        $('i').click(function (e) {
            console.log('you clicked on i tag, jquery');
            console.log($(e.target));                                           //e.target - elem
            console.log(this);
        });
        $('i').click(function () {
            console.log('you clicked on i tag second event, jquery');
            $('i').after('<i>jQuery I, click me</i>');
        });
        $('body').on('click', 'i', function () {                                         //search elem <i> in DOM after full page load
            console.log('you clicked on i tag by on-click event, jquery');
        });
        // $('i').off('click');                                                       // remove all events from target

        $('p').on('contextmenu', function () {
            console.log('right click');
        });
        $('p').on('dblclick', function () {
            console.log('double click');
        });
        $('.s1').on('mouseover', function () {
            console.log('mouseover');
        });
        $('.s1').on('mouseout', function () {
            console.log('mouseout');
        });
        $('.s2').on('mouseenter', function () {
            console.log('mouseenter');
        });
        $('.s2').on('mouseleave', function () {
            console.log('mouseleave');
        })
        // $('section').on('mousemove', function (event) {
        //     // console.log('mousemove');
        //     console.log(event.clientY);                                         //viewport coordinates
        //     console.log(event.pageY);                                           //absolute page coordinates
        //
        // })

        // $('input').on('keydown',function (e) {
        //     console.log('keydown', e.key);                             //returns symbols (char)
        // });
        // $('input').on('keyup',function (e) {
        //     console.log('keyup', e.key);
        // });
        // $('input').on('keypress',function (e) {
        //     console.log('keypress', e.key)
        // });

        $('form').on('submit', function (e) {
            e.preventDefault();                                             //delete default browser behaviour
            e.stopPropagation();                                            //delete all event listeners from elem
            console.log('submitted');
            // $(this).submit();
            // break;
        });


    });
})(jQuery);