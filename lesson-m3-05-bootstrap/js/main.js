;(function ($) {
    $(function () {

        $('#exampleModal').on('show.bs.modal', function (event) {
            var button = $(event.relatedTarget) // Button that triggered the modal
            var recipient = button.data('whatever') // Extract info from data-* attributes
            // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
            // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
            var modal = $(this)
            modal.find('.modal-title').text('New message to ' + recipient)
            modal.find('.modal-body input').val(recipient)
        })

        function showPopup(content, position) {
            var popup = $('.ba-popup-bg');
            popup
                .addClass('opened')
                .find('.ba-popup-body-content')
                .append(content);

            $('body').css({overflow: 'hidden'})         //remove scroll from page

            if (!position) {
                position = 'center';
            }
            popup.addClass(position)
        }

        $('.ba-open-popup').on('click', function () {
            var testContent = $('.ba-popup-test-content').html();
            showPopup(testContent, 'top-left');
        });

        $('.ba-popup-bg').on('click', function (event) {
            var me = $(event.target);
            if (me.is('.ba-popup-bg') || me.is('.ba-popup-close')) {
                me
                    .closest('.ba-popup-bg')
                    .removeClass('opened top-left center')
                    .find('.ba-popup-body-content')
                    .html('');

                $('body').css({overflow: 'visible'})
            }
        });

        $('.ba-open-popup-2').on('click', function () {
            var testContent = $('.ba-popup-test-content-2').html();
            showPopup(testContent);
        });

    });
})
(jQuery);