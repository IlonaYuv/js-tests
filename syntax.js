//const add = function (a, b) {
//    return a + b;
//};

/* Синтаксис стрелочной функции 
  - с параметрами
  - с одним параметром
  - без параметров */

const add = (a, b) => {
    return a + b;
}

console.log(add(6, 9));

const logMessage = message => {
    console.log(message);
}

logMessage('Hi!');

const greet = () => {
  console.log('Hello!');  
}

greet();

/* Явный (explicit) и неявный (implicit) возврат (return) */

const addExplicit = (a, b) => {
    return a + b;
}

console.log(addExplicit(6, 96));

const addImplicit = (a, b) => a + b;

console.log(addImplicit(96, 69));

/* Псевдомассив arguments */

const addArguments = (...args) => {
    console.log(args);
};

addArguments(6, 9, 3, 7, 1, 6, 9); 