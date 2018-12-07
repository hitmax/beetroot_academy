;(function ($) {
    $(function () {
        $todoList = $('.todo-list');

        function addEvent() {
            $do = $('#input-for-todo').val();
            if ($do) {
                $todoList
                    .children()
                    .append('<li><input type="checkbox"><span>'
                        + $do
                        + '</span><input type="button" class="delete" value="del"></li>');
                $do = $('#input-for-todo').val('');
            }
        }


        $('.add-button').on('click', addEvent);

        $('#input-for-todo').on('keyup', function (event) {
            if (event.keyCode === 13) {
                addEvent();
            }
        });

        $todoList.on('click', '.delete', function () {
            $(this).parent().remove();
        });

        $('#show-completed').on('click', function () {
            $todoList.find('li').hide();
            $todoList.find('input:checked').parent().show();
        });

        $('#show-all').on('click', function () {
            $todoList.find('li').show();
        });

        $('#show-uncompleted').on('click', function () {
            $todoList.find('li').hide();
            $todoList.find('input:checkbox:not(:checked)').parent().show();
        });


    });

})(jQuery);