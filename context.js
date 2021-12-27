/* Контекст стрелки
- контекст внутри стрелки опеределяется местом ее обьявления, а не вызова,
и ссылается на контекст родительской функции. */

//const showThis = () => {
//    console.log('this in showThis: ', this);
//};

//showThis();

//const user = { name: 'Mango' };
//user.showContext = showThis;

//user.showContext();

//const user = {
//    fullName: 'Mango',
//    showName() {
//        console.log('this: ', this);
//        console.log('this.fullName: ', this.fullName);
        
//        const inner = () => {
//          console.log('this in inner: ', this);  
//        }

//        inner();
//    },
//};

//user.showName();

/* Стрелки как методы обьекта - НЕЛЬЗЯ (в глобальной области видимости запоминает this, как undefined)
!Cтрелки не бывают методом обьекта! */

//const user = {
//    fullName: 'Mango',
//   showName: () => {
//        console.log('this: ', this);
//        console.log('this.fullName: ', this.fullName);
//    },
//};

//user.showName();

/* Стрелка-конструктор 
!Cтрелка не может быть констурктором! */

//const User = function (name) {
//    this.name = name;
//};

//!const User = name => {
//    this.name = name;
//};

//console.log(new User('Coco'));

/* Стрелка как метод обьекта - Нельзя! */

const objA = {
    x: 6,
    showX() {
        console.log('this в objA.showThis: ', this);
        console.log(this.x);

        const objB = {
            y: 9,
            showThis() {
          //showThis: () => { /* this = x будет равен 5, y не будет доступен */
                console.log('this в objB.showThis: ', this);
            },
        };

        objB.showThis();
    },
};

objA.showX();
