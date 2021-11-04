/* Напиши функцию logItems(items) для перебора и логированния массива */

const logItems = function (items) {
    for (const item of items) {
        console.log(item);
    }
};

logItems(['Mango', 'Kiwi', 'Poly', 'Cherry']);
logItems([1, 2, 3, 4, 5]);
logItems(['клавиатура', 'наушники', 'часы']);