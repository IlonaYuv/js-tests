/* Напиши скрипт выбора стоимости отеля по к-ству звезд.
* 1-20$, 2-30$, 3-50$, 4-70$, 5-120$ */

const stars = 12;
let price;

switch (stars) {
    case 1:
        price = 20;
        break;
     case 2:
        price = 30;
        break;
     case 3:
        price = 50;
        break;
     case 4:
        price = 70;
        break;
     case 5:
        price = 120;
        break;
    
    default:
    console.log("Такого количества звезд нет");    
        
}

console.log(price);

/* Напиши скрипт выбора опции доставки товара.
* Опция хранится в переменной  option: 1 - самовывоз, 2 - курьер, 3 - почта */
// Сделать переменные
const option = 1;
let message = " ";
//Cделать switch 1 2 3 
switch (option) {
    case 1:
        message = "Вы можете забрать товар завтра с 12:00 в нашем офисе";
        break;
    case 2:
        message = "Курьер доставит заказ завтра с 12:00 до 16:00";
        break;
    case 3:
        message = "Посылка будет отправлена сегодня";
        break;
    default:
        console.log("Вам перезвонит менеджер");
}
//Cделать лог message
console.log(message);