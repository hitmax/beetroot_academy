;(function ($) {
    $(function () {

        $('.head').on('click', function () {
            if ($('p').hasClass('show')) {
                $('p').removeClass('show');
            }
            $(this).siblings().addClass('show');
        })

    })
})(jQuery);

