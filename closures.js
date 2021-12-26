/* Функция результатом своей работы может возвращать другую функцию
- Возращаемая функция во время вызова будет иметь доступ:
  - ко всем локальным переменным (области видимости)
  - родительской функции (той из которой ее вернули)
... это называется "замыкание" */

const fnA = function (parameter) {
    const innerVariable = 'Значение внутренней переменной функции fnA';

    const innerFunction = function () {
        console.log(parameter);
        console.log(innerVariable);
        console.log('Это вызов innerFunction');
    };

    return innerFunction;
};

// const fnB = fnA(999);

// fnB();

// console.log(fnB);

/* Поваренок */

//const makeDish = function (sheffName, dish) {
//    console.log(`${sheffName} готовит ${dish}`);
//};

//makeDish('Mango', 'пирог');
//makeDish('Mango', 'омлет');
//makeDish('Mango', 'чай');

//makeDish('Poly', 'мясо');
//makeDish('Poly', 'суп');
//makeDish('Poly', 'кофе');

const makeSheff = function (name) {
   const makeDish = function (dish) {
    console.log(`${name} готовит ${dish}`);
    };
    
    return makeDish;
};

//const mango = makeSheff('Mango');

//console.dir(mango);

//mango('пирог');
//mango('чай');

//const poly = makeSheff('Poly');

//poly('кофе');
//poly('мясо');

/* Округлятор */

//const floatingPoint = 3.456789;
//const someInt = Math.round(floatingPoint);
//const withDecimals = Number(floatingPoint.toFixed(2));

//const rounder = function (number, places) {
//   return = Number(number.toFixed(places));
//};

//console.log(rounder(3.456789, 2));
//console.log(rounder(9.123456, 4));
//console.log(rounder(6.14235, 3));

const rounder = function (places) {
    return function (number) {
        return Number(number.toFixed(places));
    };
}

//const rounder2 = rounder(2);
//const rounder3 = rounder(3);

//console.dir(rounder2);
//console.dir(rounder3);

//console.log(rounder2(3.456789));
//console.log(rounder3(9.123456));
//console.log(rounder2(6.14235));

/* Приватные данные и функции - скрытые реализации, интерфейс */

const salaryManagerFactory = function (employeeName, baseSalary = 0) {
    let salary = baseSalary;

    return {
        raise(amount) {
            if (amount > 10000) {
                return 'Ты офигел?';
            }
            
            salary += amount;
        },
        lower(amount) {
            salary -= amount;
        },
        current() {
            return `Текущая зарплата ${employeeName} - ${salary}`;
        },
    };
};

const salaryManager = salaryManagerFactory('Ilona', 30000);

console.log(salaryManager.current());

console.log(salaryManager.raise(11000));

console.log(salaryManager.current());

//const myLibFactory = function () {
//    let value = 0;

//    const add = function (num) {
//        value += num;
//    };

//    return {
//        add,
//        getValue() {
//            return value;
//        },
//    };
//};

//const myLib = myLibFactory();

//console.log(myLib);
//console.log(myLib.getValue());
//myLib.add(99);
//console.log(myLib.getValue());