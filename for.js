/* Напиши скрипт, который подсчитает общую сумму зарплат. 
(к-свто работников хранится в employees, зп это случайное число от 500 до 5000) */
//сделать вары
const minSalary = 500;
const maxSalary = 5000;
const employees = 4;
let totalSalary = 0;
//перебрать работников в цикле
for (let i = 1; i < 5; i += 1) {
    //сгенерить случайную зп
    const salary = Math.round(
        Math.random() * (maxSalary - minSalary) + minSalary,
    );
    console.log(`ЗП работника номер ${i} - ${salary}`);
    //прибавить к тоталу
    totalSalary += salary;
}
//лог
console.log("totalSalary: ", totalSalary);

/* Напиши скрипт, который подсчитает сумму всех четных чисел. 
(которые входят диапазон чисел в переменных от min до max */
const min = 9;
const max = 13;
let total = 0;
// фор с шагом в 1 от мин до макс
for (let i = min; i <= max; i += 1) {
    //console.log(i);
 // проверяем остаток от деления
    if (i % 2 === 0) {
        console.log("Не четное: ", i);
        continue;
      
        console.log("четное: ", i);
        total += i;
    }
}
console.log("total: ", total);

