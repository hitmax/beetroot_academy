/*;(function(){
    console.log(document.getElementsByTagName('h1'));               //HTMLcollection
    console.log(document.getElementsByTagName('h1')[0]);            //element
    console.log(document.getElementById('main-link'));
    console.log(document.getElementsByClassName('active')[1]);
    console.log(document.querySelectorAll('.active'));                   //use CSS SELECTOR!!! - collection
    console.log(document.querySelector('.active'));

    var title = document.getElementsByTagName('h1')[0];
    title.innerText = 'New text from JS';
    title.innerHTML = '<span>' + title.innerHTML + '</span>';
    title.outerHTML = '<h2>' + title.innerHTML + '</h2>';


    // console.log(document.querySelector('ul').innerHTML);                //all inner text in string
    // console.log(document.querySelector('ul').outerHTML);                //all text with tag in string

    // var titleSpan = document.createElement(title.innerText, 'span');
    // title.insertBefore(titleSpan, title.childNodes);

    var secondLi = document.querySelectorAll('.active')[1];

    secondLi.classList.add('new-class');

    secondLi.classList.remove('second');

    secondLi.classList.toggle('cls');
    secondLi.classList.toggle('active');
    console.log(secondLi.classList.contains('active'));
})();*/

;(function($){

    // console.log($('#main-link')[0]);                                     //html elem
    console.log($('#main-link'));                                        //jquery object

})(jQuery);