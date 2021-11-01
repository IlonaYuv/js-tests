/* Напиши скрипт, который обьединяет все элементы массива в одно строковое 
значение.
- Элементов может быть произвольное к-ство
- Пусть эелементы в строке массива будут разделены запятой
сначала через
потом через */

const friends = ['Mango', 'Poly', 'Kiwi', 'Cherry'];
// let string = '';

//for (const friend of friends) {
//    string += friend + ',';
//}

//string = string.slice(0, string.length - 1);
//console.log(string);

const string = friends.join(', ');
console.log(friends);
console.log(string);

// должно получиться 'Mango, Poly, Kiwi, Cherry'