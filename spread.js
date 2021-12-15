/* Опрерация spread (распыление)
- Array.prototype.concat() и аналог через spread */

// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);
const numbers = [...[1, 2, 3], ...[4, 5, 6], ...[7, 8, 9]];
// const numbers = [0, 5, 10, ...[1, 2, 3], 4, 5];

// console.log(numbers);

/* Поиск самой маленькой или большой температуры (числа) */

const temps = [18, 14, 12, 21, 17, 29, 24];

// console.log(Math.max(1, 4, 17, 5, 6));
// console.log(Math.min(...temps));
// console.log(temps);

// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
// const b = [...a];

// console.log('a: ', a);
// console.log('b: ', b);

// console.log(a[0] === b[0]); // true
// console.log(a === b); // false

// a[0].x = 1000;

// console.log('a: ', a);
// console.log('b: ', b);

/* Сшиваем несколько массивов в один через concat() и spread */

const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

//  const xx = lastWeekTemps.concat(currentTemps, nextWeekTemps);

const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// console.log(allTemps);

/* Распыление обьектов 
- Object.prototype.assign() и spread */

const a = { x: 1, y: 2, g: { hello: 'world' } };
const b = { x: 0, z: 3 };

// const c = Object.assign({}, a, b);

const c = {
    ...a,
    x: 10,
    ...b,
    y: 20,
};

console.log(c);

