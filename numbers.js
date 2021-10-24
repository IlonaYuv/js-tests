//let elementWidth = "50px";
//const result = Number.parseInt(elementWidth);
//console.log(result);

//elementWidth = Number.parseInt(elementWidth);
//console.log("elementWidth: ", elementWidth);

//let elementHeight = "200.74px";
//elementHeight = Number.parseFloat(elementHeight);
//console.log("elementHeight: ", elementHeight);


//const salary = 1300.16472;
//console.log(salary.toFixed());

let salary = 1300.16472;
salary = salary.toFixed(2);
salary = Number(salary);
console.log(salary);

//let salary = 1300.16472;
//salary = Number(salary.toFixed(2));
//console.log(salary);
// console.log(Number(salary.toFixed(2)));


//let quantity = "30";
//let value = "Эту строку невозможно привести к числу";
//console.log(Number(value));
//console.log(Number(quantity));


//const base = 2;
//const power = 5;
//const result = Math.pow(base, power);
//console.log(base ** power);

/* Напиши скрипт, который просит пользователя ввести число и степень, 
* возводит число в эту степень и выводит результат в консоль */
// 1. попрости ввести число и сохранить в переменную
let base = prompt("Введи число");
base = Number(base);
console.log(base);
// 2. попрости ввести степень и сохранить в переменную
let power = prompt("Введи степень");
power = Number(power);
console.log(power);
// 3. возвести введенное число в степень 
const result = base ** power;
console.log(result);

/* Генерим псевдослучайные числа */
//const max = 80;
//const min = 40;

// округлить
//const result = Math.round(Math.random() * (max - min) + min);
//console.log(result);

//console.log(Math.random() * (max - min) + 30);

/* Генерим псевдослучайные colors */
const colors = ["tomato", "teal", "orange", "deeppink"];
const max = colors.length - 1;
const min = 0;

const index = Math.round(Math.random() * (max - min) + min);

const color = colors[index];

console.log(color);

document.body.style.backgroundColor = color;

