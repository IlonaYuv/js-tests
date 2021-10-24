// Длинна строки
const message = "В этой строке 25 символов";
console.log(message.length);


//Конкатенация строк
const firstName = "Juventus";
const lastName = "Italy";
const fullName = firstName + " " + lastName;
console.log(fullName);

/* Напиши скрипт, который выедет строку в формате: 
* Гость х у поселяется в z номер q,
* подставив вместо x y z q значения переменных */

const room = 716;
const type = "VIP";

//const welcomeMsg = "Гость " + firstName + " " + lastName + " поселяется в " + type + " номер";
const welcomeMsg = `Гость ${firstName} ${lastName} поселяется в ${type} номер ${room}`;
console.log(welcomeMsg);

//Шаблонные строки 
const quantity = 5;
const orderMsg = `Вы заказываете ${quantity} холодильников`;
console.log(orderMsg);

//Нормализация
//let brand = prompt(`Brand`);
//const normalizedBrand = brand.toLowerCase();
//brand = brand.toLowerCase();
//console.log(brand);

let brand = `ApPle`;
console.log(brand[4]);
console.log(brand.slice(1).toLowerCase());
brand = brand[0] + "pPle".toLowerCase();
console.log(brand);

//Поиск в строке
const blacklistedWord1 = "spam";
const blacklistedWord2 = "sale";

const string1 = "Hello! My name is Ilona. It's not spam";
const string2 = "Big sale. Don't miss it";
const string3 = "Advertising campaign #saveanimals";

console.log(string1.includes(blacklistedWord1));
console.log(string1.includes(blacklistedWord2));

console.log(string2.includes(blacklistedWord1));
console.log(string2.includes(blacklistedWord2));

console.log(string3.includes(blacklistedWord1));
console.log(string3.includes(blacklistedWord2));





