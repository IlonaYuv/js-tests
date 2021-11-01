//Массивы
const friends = ['Mango', 'Kiwi', 'Cherry'];
//console.log(friends[2]);
console.table(friends);

friends[1] = 'Coconut';

//const lastIndex = friends.length - 1;
//console.log(lastIndex);


//примитивы (передача по значению)
//let a = 10;
//let b = a;

//console.log(a);
//console.log(b);

//a = 20;

//console.log(a);
//console.log(b);

//сложные типы (передача по ссылке)
const a = [1, 2, 3];
const b = a;

console.log('a', a);

a[0] = 24;

console.log('a', a);
console.log('b', b);

console.log(a === b);

console.log([1, 2, 3] === [1, 2, 3]);

//перебор (итерация) массива

const fruits = ['Mango', 'Kiwi', 'Cherry', 'Banana'];
//console.table(fruits);
//const lastIndex = fruits.length - 1;

//for (let i = 0; i = lastIndex; i += 1) {
//    fruits[i] += '-1';
//}

for (let fruit of fruits) {
    fruit += '-1';
}

//for (const fruit of fruits) {
//    console.log(fruit);
//}

console.table(fruits);







