;(function () {
    var car = {
        params: {
            speed: 300,
            color: 'red',
            weight: 1000
        },
        details: ['door', 'wheel', 'engine', 'gear-box'],
        new: true
    };
    console.log(car.details);
    console.log('new wheal? ' + car.new);
    car.inUkraine = false;
    console.log(car);
    car.params.power = 300;
    console.log(car);
    var car2 = car;
    car2.params.color = 'blue';
    console.log(car); // rewrite object CAR, this is only link!
    console.log(car.details[0]);
    console.log(car.details[1]);
    car.details[2] = 'steering wheel';
    car.details[10] = 'engine';
    console.log(car.details.length);

    car.details.push('mirror'); //add elem to end of arr
    car.details.unshift('bumper'); //add elem to start of arr
    car.details.shift(); //delete first elem 'bumper' from start of arr
    car.details.shift();
    car.details.pop(); //delete last elem from end of arr
    console.log('in our car we have details: ', car.details.join(', ')); //glue arr to string with defer ', '
    console.log('in our car we have details: ', car.details.filter(
        function (item) {
            return item != undefined
        })
        .join(', ')); //this func deletes all holes from arr

    var fruits = 'apple, orange, banana, kiwi, fruit fruit, orange, banana, kiwi, orange, banana, kiwi';
    var fruitsArray = fruits.split(', ');
    console.log(fruits.split(', ')); //splits string to arr with defer ', ' -> 'fruit fruit' will be 1 elem
    delete fruitsArray[2]; //delete second elem 'banana' with creating hole
    console.log(fruitsArray);
    fruitsArray.splice(4, 1);
    console.log(fruitsArray);





})
();