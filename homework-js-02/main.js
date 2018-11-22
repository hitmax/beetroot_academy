;(function () {
    function getPrimeNumbers(min, max) {
        var min = +prompt('type min number'),
            max = +prompt('type max number'),
            isPrime = false;

        for (var i = min; i <= max; i++) {
            for (var j = 2; j < i; j++) {
                if (!(i % j)) {
                    isPrime = true;
                }
                if (isPrime) {
                    console.log(i);
                }
                isPrime = false;
            }
        }
    }

    getPrimeNumbers();
})();