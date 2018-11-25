;(function ($) {
    var $h1 = $('h1');
    console.log($h1.html());
    $h1.html('New title from JS by .html');
    console.log($h1.html());
    $h1.text('New title from JS by .text');         //little faster then .html (?)
    console.log($h1.text());
    /*$h1
        .text('New title from JS by .text')
        // .css('color', '#777');                      //add inline styles (write in html)
        .css({                                          //chaining, property css - object
            color: '#777',
            fontStyle: 'italic',
            fontWeight: 'normal'
        })
        .addClass('red')
        .next()                                     //neighbour elem
        .addClass('red')
        .nextAll('p')                                  // all next neighbours elements <p>
        .addClass('green')
        .prev()                                     //previous elem : danger - search starts from CURRENT elem !!!
        .addClass('blue')
        .removeClass('blue')
        .nextAll('ul')
        .css('textAlign', 'center')
        .find('.active')                            // search inside from current - child elem
        .addClass('red')
        .find('a')                                  // all child elem
        .addClass('green')
        .end()                                      //previous step in DOM
        .end()
        .hide()                                     //add inline style display none
    ;*/

    $h1.closest('main').toggleClass('main-content');            //search parent elem <main>

    var span = $('<span>').text('span text').addClass('red blue');
    // $('main').append(span);                                     //insert something in end of selected elem
    span.appendTo('main');                                      //insert selected elem into end of 'place'
    $('main')
        .prepend('<span>text from prepend</span>')              //insert this span in start of main
        .append('<div>text from append</div>')                  //insert this span in ind of main
        .after('after text')                                    //insert this text after MAIN
        .before('before text');                                 //insert this text before MAIN

    $('<div>text in div from insertBefore</div>').insertBefore('ul');
    $('<div>text in div from insertAfter</div>').insertAfter('ul');

    $('ul li')
        .css('color', '#ccc')
        // .eq(0)                                                  //select first li from 4 ours
        .filter(':lt(2)')                                           //lt <, gt >
        .css('color', 'black')
        .find('a')
        .attr('href', 'http://google.com');
    console.log($('main').attr('href'));
    console.log($('main').attr('class'));               // 'main-content'
    console.log($('main')[0].hasAttribute('href'));     //false

    $('#main-link').removeAttr('href');

    console.log($('[data-qwerty]').data('qwerty', '22'));
    console.log($('[data-qwerty]').data('qwerty'));


    //             !!!!!!!!                                     homework with playlist!

    $(function () {                 //document ready

        var playList = [{
            author: "led zeppelin",
            song: "stairway to heaven",
            duration: "2:03"
        },
            {
                author: "queen",
                song: "bohemian rhapsody",
                duration: "2:30"
            },
            {
                author: "lynyrd skynyrd",
                song: "free bird",
                duration: "1:56"
            },
            {
                author: "deep purple",
                song: "smoke on the water",
                duration: "3:03"
            },
            {
                author: "jimi hendrix",
                song: "all along the watchtower",
                duration: "2:53"
            },
            {
                author: "AC/DC",
                song: "back in black",
                duration: "2:43"
            },
            {
                author: "queen",
                song: "we will rock you",
                duration: "2:13"
            },
            {
                author: "metallica",
                song: "enter sandman",
                duration: "3:03"
            }
        ];

        var $playList = $('<div />', {id: 'play-list'}).prepend('<hr>').appendTo('body');

        for (var k = 0; k < playList.length; k++) {
            $('<div />')
                .append('<span class="author">' + playList[k].author + '</span>')
                .append('<span class="duration">' + playList[k].duration + '</span>')
                .append('<h3>' + playList[k].song + '</h3>')
                .append('<span class="favorite"></span>')
                .appendTo($playList);
        }
    });

})(jQuery);

;(function($){      // anonymous function
    $(function(){   // $( document ).ready

    });
})(jQuery);