;(function () {


    var int1 = 123,
        int2 = -222,
        int3 = 12.33,
        int4 = 3,
        int5 = 3;
    // console.log(int1, int2, int3);
    // console.log(int1 - int2);
    // console.log(-int2);
    // console.log(int3 - 1);
    int2 += 10;
    console.log(int2);
    // int2++;
    // ++int2;
    console.log(int2);
    console.log(++int4);
    console.log(int5++);
    console.log(int4);
    console.log(int5);

    console.log(9 % 5); // остаток от деления
    console.log(2 / 'a'); // Not a Number
    console.log();

    var str,
        str1 = '',
        str2 = 'Hello',
        str3 = 'Beetroot';
    console.log(str1 + str2 + ', ' + str3 + '!'); // конкатинация строк
    console.log(str2 + int1);
    console.log(int2 + str2 + int1);

    console.log(typeof str1); //string
    console.log(typeof int1); //number
    console.log(str); // undefined
    console.log(typeof str); // undefined

    var nullVar = null;
    console.log(nullVar, typeof nullVar);

    console.log(2 > 2);
    console.log(1 <= 2);
    console.log(1 == 1);
    console.log(1 != 2); //true

    console.log('1 == \'1\'', 1 == '1'); //true внутри экранированные кавычки \'
    console.log(1 === '1'); // false

    console.log(str2 < str3);
    console.log('aab' < 'aac');

    console.log(true && true); //true
    console.log(true && false); //false
    console.log(true || true); //true
    console.log(true || false); //true
    console.log(false || false); //false

    console.log(true && true || 1 == 2); // по таблице приоритетов

    console.log('\'\'', !''); // явная проверка типов через ! отрицание

    if (1 >= 2 && 'строка') {
        console.log('yes');
    } else if (1 > 1) {
        console.log('yes');
    } else {
        console.log('no');
    }

    // switch learn.js.ru selfeducation

    for (var i = 0; i < 10; ++i) {
        console.log('for ', i);
    }
    console.log(i);

    var aaa = 0;
    while (aaa < 10) {
        console.log(aaa++);
    }

    do {
        console.log('do while', aaa);
    } while (aaa < 10);
})();