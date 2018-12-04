;(function ($) {
    $(function () {

        var tabsContent = $('.tabs-content')

        $('.tabs div').on('click', function () {
            var $this = $(this),
                tabIndex = $this.data('id');
            $this
                .addClass('active')
                .siblings()
                .removeClass('active');
            tabsContent
                .find('[data-id = ' + tabIndex + ']')
                .addClass('active')
                .siblings()
                .removeClass('active');
        })


    })
})(jQuery);

