/* array.prototype.forEach(callback(currentValue, index, array), thisArg)
- Поэлементно перебирает оригинальный массив 
- Ничего не возвращает
- Заменяет классический for, если не нужно прерывать цикл */

const numbers = [6, 9, 13, 24, 29];

numbers.forEach(function (number, index, array) {
    console.log('number', number);
    //console.log(this);

    //array[index] = 24;
},
 //{ a: 6, b: 9 },
);

console.log(numbers);