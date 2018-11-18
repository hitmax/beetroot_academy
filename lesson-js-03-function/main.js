;(function () {
    // var name = prompt('Ur name?');

    function sayHello() {
        var name = 'Guest';
        console.log('hello, ' + name);
    }

    sayHello();
    console.log(name);

    if (true) {
        var variable1 = 1;
    }
    variable1 = 2;  //rewrite
    console.log(variable1);

    const c1 = 'constant';
    // c1='qwerty'; //cant rewrite!!!
    console.log(c1);

    function calcSum(a, b, c) {
        // c = c ? c : 0;
        c = c || 0;
        console.log(c);
        console.log(a + b + c);
    }

    calcSum(1, 3, 1);

    var calcArea = function (a, b) {
        console.log('room area ' + a + ' x ' + b + ' = ' + a * b);
    };
    calcArea(2, 3);

    var calcPerimeter = function (a, b) {
        // if (b > 10) {
        //     console.log('b > 10');
        //     return;
        // }
        return 2 * (a + b);
        console.log('after return it doesnt work');
    };
    console.log('perimeter :', calcPerimeter(2, 3));
    console.log('half of perimeter :', calcPerimeter(2, 3) / 2);
    console.log(calcPerimeter(2, 11));

    function calcPrice() {
        var pricePerOne = 10,
            l = +prompt('input lenght of room'),
            w = +prompt('input width of room'),
            perim = calcPerimeter(l, w);
        // if (perim > 20) {
        //     return perim * 0.95 * pricePerOne;
        // } else {
        //     return perim * pricePerOne;
        // }
        return perim > 20 ?
            perim * 0.95 * pricePerOne :
            perim * pricePerOne;
    }

    // console.log(calcPrice());

    function calcDegree(num, degree) {
        console.log('degree', degree);
        if (degree > 1) {
            var result = num * calcDegree(num, degree - 1);
            console.log('result', result);
            return result;
        } else {
            console.log('num', num);
            return num;
        }
    }

    // var i = 1;
    // function calcDegree(num, degree) {
    //     if (degree > 1) {
    //         console.log('step ' + i++ + ' in memory(not given)');
    //         var result = num * calcDegree(num, degree - 1);
    //         console.log('step ' + i + 'executive func in memory', result);
    //         return result;
    //     } else {
    //         console.log('step ' + i++ + ' in memory(given!)');
    //         console.log('num', num);
    //         return num;
    //     }
    // }

    console.log(calcDegree(2, 6));

    function ucFirst(str) {
        var firstChar = str.charAt(0).toUpperCase(),
            substr = str.substr(1, str.length - 1);
        return firstChar + substr;
    }

    // console.log(ucFirst('vasya'));

    function min(a, b) {
        console.log(a > b ? b : a);
    }

    // min(2, 5);
    // min(3, -1);
    // min(1, 1);

    function prompt100() {
        var num = parseInt(prompt('write int > 100', 101));
        if (num > 100) {
            console.log('congrats!');
        } else {
            prompt100();
        }
    }

    prompt100();
})();