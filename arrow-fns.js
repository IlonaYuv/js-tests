/* Стрелочные функции 
  - Обьявление
  - Явный и неявный возврат 
  - Аргументы
  - Неявный возврат обьекта */

//const add = function (a, b, c) {
//    console.log(arguments);
//    return a + b + c;
//};

//const addArrow = (...args) => {
//    console.log(args);
    //return a + b + c;
//};

//const addArrow1 = (a, b, c) => a + b + c;

//console.log(add(6, 9, 13));
//console.log(addArrow(6, 9, 13));

/* Как из стрелочной функции неявно вернуть обьект */

//const fnA = function () {
//    return {
//        a: 6,
//    };
//};

//console.log(fnA());

//const arrowFnA = () => ({ arrowA: 6 });

//console.log(arrowFnA());


//const onGetPositionSuccess = (position) => {
//    console.log('Это вызов onGetPositionSuccess');
//    console.log(position);
//}

//const onGetPositionError = (error) => {
//    console.log('Это вызов onGetPositionError');
//    console.log(error);
//}

//window.navigator.geolocation.getCurrentPosition(
//    onGetPositionSuccess,
//    onGetPositionError
//);



const filter = (array, callback) => {
    const filteredArray = [];

    for (const el of array) {
        console.log(el);

        const passed = callback(el);

        if (passed) {
            filteredArray.push(el);
        }
    }

    return filteredArray;
};

//const callback1 = value => value >= 3;
 
const r1 = filter([1, 2, 3, 4, 5], value => value >= 3);
console.log(r1);

//const callback2 = value => value <= 4;

const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], value => value <= 4);
console.log(r2);

const fruits = [
   { name: 'apples', quantity: 200, isFresh: true },
   { name: 'grapes', quantity: 300, isFresh: false },
   { name: 'bananas', quantity: 100, isFresh: true },
];

//const getFruitsWithQuantity = fruit => fruit.quantity >= 120;

const r3 = filter(fruits, fruit => fruit.quantity >= 120);
console.log(r3);
