/* Функции, Функциональные выражения, Аргументы и параметры, Возврат значения */
//const add = function (a, b) {
//    console.log(a);
//    console.log(b);
//    console.log('Выполняется фукция add');

//    return a + b;
//};

//const r1 = add(6, 9);
//console.log('r1: ', r1);
//const r2 = add(69, 96);
//console.log('r2: ', r2);

//const fn = function (value) {
//    console.log(1);
//    console.log(2);

//    if (value < 50) {
//        return 'Меньше чем 50';
//    }

//    return 'Больше чем 50';;
//};

//console.log('Результат функции: ', fn(10));
//console.log('Результат функции: ', fn(100));

/* Стек вызовов, Stack trace и поиск ошибок */

const fnA = function () {
    console.log('Выполняется функция А');
    fnB();
};

const fnB = function () {
    console.log('Выполняется функция B');
    fnC();
};

const fnC = function () {
    console.log('Выполняется функция C');
};

//console.log('Лог перед вызовом функции А');
fnA();
//console.log('Лог после вызова функции А');

//console.log('Лог перед вызовом функции B');
//fnB();
//console.log('Лог после вызова функции B');

//console.log('Лог перед вызовом функции C');
//fnC();
//console.log('Лог после вызова функции C');
