;(function () {
    var int = 1,
        string = 'hello, beetroot',
        bool = false,
        obj = {
            name: 'Ivan',
            age: 20,
            isDriver: false,
            family: {
                wife: 'Susanna'
            }
        },
        nullVar = null,
        undef = undefined;
    // console.log(int, bool, string, nullVar, undef, obj, obj.name);
    var name = prompt('name?', 'Guest'),
        age = confirm('age 18?');

    if (name && age) {
        console.log('Hello, ' + name + '! Welcome!');
    } else if (name && !age){
        console.log(name + ', get away if not 18');
    } else if (!name && age) {
        console.log('input your name!');
    } else {
        console.log('go away');
    }
})();