/* Обьекты (делаем плейлист музыки: имя, рейтинг, треки, к-ство треков) 
- Литерал обьекта 
- Свойства, ключи(имя) и значения 
- Как отличить обьект от области видимости 
*/

// const playlist = {
//    name: 'Мой супер плейлист',
//    rating: 5,
//    tracks: ['трек-1', 'трек-2', 'трек-3'],
//    trackCount: 3,
//};

// console.log(playlist);

// const x = {};

// const fn = function (myObject) {
//    console.log(myObject);
// };

// fn({ a: 1, b: 2 });

// const rtfm = function () {
//    return { a: 5 };
// };

// console.log(rtfm());

/* Доступ к свойству
- obj.key
- obj['key']
- Отсутствующие свойства 
*/ 

const playlist = {
    name: 'Мой супер плейлист',
    rating: 5,
    tracks: ['трек-1', 'трек-2', 'трек-3'],
    trackCount: 3,
};

// console.log(playlist);
// console.log(playlist.tracks);
// console.log(playlist.name);
// console.log(playlist.trackCount);

const propertyName = 'tracks';

// console.log(playlist.rating);
// console.log(playlist['rating']);

// console.log(propertyName.propertyName);
// console.log(playlist[propertyName]);

/* Короткая запись свойства */

const username = 'Mango';
const email = 'mango@mail.com';

const signupData = {
    username,
    email,
};

// console.log(signupData);

/* Вычисляемые свойства */

const inputName = 'color';
const inputValue = 'tomato';

const colorPickerData = {
    [inputName]: inputValue,
};

// console.log(colorPickerData);

/* Ссылочный тип {} === {} */

const a = { x: 1, y: 2 };
const b = a;

// console.log(b === a);

// a.c = 100;
// b.c = 224;

// console.log(a);
// console.log(b);

/* Массивы и функции это обьекты */

const y = [1, 2, 3];

y.hi = ';)';

console.log(y);

const fn = function () {
    console.log('hello');
};

fn.hello = ';)';

console.dir(fn);
