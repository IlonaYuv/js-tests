/* Функция обратного вызова (callback)
- Функция может принимать другие функции как параметры
- Функция, которая передается другой функции, как аргумент называется 
... "функцией обратного (отложеного) вызова" (callback-Функция)
- Функция, которая принимает другую функцию, как параметр или возвращает функцию, как результат своей работы называется
... "функцией высшего порядка" */

//const fnA = function (message, callback) {
//    console.log(message);

//    console.log(callback);
//    callback(96);
//};

//const fnB = function (number) {
//    console.log('Это лог при вызове fnB', number);
//};

//fnA('ilona', fnB);

/* Функция doMath(a, b, callback) */

const doMath = function (a, b, callback) {
    const result = callback(a, b);

    console.log(result);
};

//const add = function (x, y) {
//    return x + y;
//};

//const sub = function (x, y) {
//    return x - y;
//};

//doMath(6, 9, add);
//doMath(9, 6, sub);

/* Инлайн функция */

//doMath(6, 9, function (x, y) {
//  return x + y;
//});

//doMath(9, 6, function (x, y) {
//  return x - y;
//});

/* Отложеный вызов: регистрация событий */

const buttonRef = document.querySelector('.js-button');

const handleBtnClick = function () {
    console.log('Клик по кнопке' + Date.now());
};

buttonRef.addEventListener('click', handleBtnClick);

/* Отложеный вызов: геолокация */

const onGetPositionSuccess = function (position) {
    console.log('Это вызов onGetPositionSuccess');
    console.log(position);
}

const onGetPositionError = function (error) {
    console.log('Это вызов onGetPositionError');
    console.log(error);
}

// window.navigator.geolocation.getCurrentPosition(onGetPositionSuccess, onGetPositionError);

/* Отложеный вызов: интервалы */

const callback = function () {
   console.log('Через 3 секунды после колбека в таймауте');
};

//console.log('В коде перед таймаутом');
//setTimeout(callback, 3000);
//console.log('В коде после таймаута');

/* Отложеный вызов: http-запрос
- API URL: https://pokeapi.co/api/v2/pokemon */

const onRequestSuccess = function (response) {
    console.log(
        'Вызов функции onRequestSuccess после успешного ответа бекенда',
    );
    console.log(response);
};

//fetch('https://pokeapi.co/api/v2/pokemon')
//    .then(res => res.json())
//    .then(onRequestSuccess);


/* Фильтр */

const filter = function (array, callback) {
    const filteredArray = [];

    for (const el of array) {
        console.log(el);
        //console.log(callback(el));
        const passed = callback(el);

        if (passed) {
            filteredArray.push(el);
        }
    }

    return filteredArray;
};

// 1. Надо передать функцию 
// 2. Функция получает элемент массива
// 3. Если элемент массива удовлетворяет условие, то функция вернет true
// 4. Если элемент массива не удовлетворяет условие, то функция вернет false

const callback1 = function (value) {
    return value >= 3;
};
 
const r1 = filter([1, 2, 3, 4, 5], callback1);
console.log(r1);

const callback2 = function (value) {
    return value <= 4;
};

//const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], function (value) {
//    return value <= 4;
//});

const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
console.log(r2);

const fruits = [
   { name: 'apples', quantity: 200, isFresh: true },
   { name: 'grapes', quantity: 300, isFresh: false },
   { name: 'bananas', quantity: 100, isFresh: true },
];

const getFruitsWithQuantity = function (fruit) {
    return fruit.quantity >= 120;
};

const r3 = filter(fruits, getFruitsWithQuantity);
console.log(r3);