;(function () {

    function showSum() {
        var a = prompt('input first number'),
            b = prompt('input second number');
        console.log(a - -b); // простое сложение приводит к конкатинации строк, как сделать без костелей???
    }
    // showSum();

    function getTwoRandomDigits() {
        var a = Math.ceil(Math.random()*6), //ceil округляет 0.1 до 1, т.е. до верхнего целого числа
            b = Math.ceil(Math.random()*6); //round - математическое окргуление, floor 1.9 до 1
    console.log(a +' '+ b);
    }
    // getTwoRandomDigits();

    function showCoinFace() {
        if (Math.round(Math.random())){
            return 'Reshka';
        } else {
            return 'Orel';
        }
    }
    // console.log( showCoinFace())

    function showRandomByMax(range) {
        return Math.ceil(Math.random() * range);
    }
    // console.log(showRandomByMax(prompt('input max digit')));

    function showRandomInRange(min, max) {
        return Math.floor(Math.random() * (max - min)) + +min;
    }
    console.log(showRandomInRange(prompt('input min digit'), prompt('input max digit')));

})();