;(function ($) {
    $(function () {
        $todoList = $('.todo-list');

        $('button').on('click', function () {
            $do = $('#input-for-todo').val();
            if ($do) {
                $('.todo-list')
                    .children()
                    .append('<li><input type="checkbox"><span>'
                        + $do
                        + '</span><input type="button" class="delete" value="del"></li>');
                $do = $('#input-for-todo').val('');
            }
        });

        $('html').on('click', '.delete', function () {
            $(this).parent().remove();
        })

        $('#show-completed').on('click', function () {
            $todoList.find('li').hide();
            $todoList.find('input:checked').parent().show();
        });

        $('#show-all').on('click', function () {
            $todoList.find('li').show();
        })

        $('#show-uncompleted').on('click', function () {
            $todoList.find('li').hide();
            $todoList.find('input:checkbox:not(:checked)').parent().show();
        })


    });

})(jQuery);