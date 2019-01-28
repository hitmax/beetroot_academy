;(function ($) {
    $(function(){

        $('.alert').on('closed.bs.alert', function () {
            console.log(321);
        })

    });
})(jQuery);