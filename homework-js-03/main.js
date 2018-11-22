;(function () {

    var array = [1, 2, 3, 4];

    function square(x) {
        return x * x;
    }

    function map(fn, arr) {
        var mapedArr = [];
        for (var i = 0; i < arr.length; i++) {
            mapedArr.push(square(arr[i]));
        }
        return mapedArr;
    }

    console.log(map(square, array));
    console.log(array);
})();