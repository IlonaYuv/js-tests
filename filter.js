/* array.prototype.filter()
- Поэлементно перебирает оригинальный массив 
- Возвращает новый массив (с элементами или пустой) 
- Добавляет в возвращенный массив элементы, которые удовольтворяют условия коллбэк-функции
-- если коллбэк вернул true элемент добавляется в возвращенный массив
-- если коллбэк вернул false элемент НЕ добавляется в возвращенный массив */

const numbers = [6, 9, 13, 24, 29];

const filteredNums = numbers.filter(number => number < 16);
//console.log(filteredNums);
//console.log('numbers', numbers);

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 330, points: 44, online: false },
    { id: 'player-2', name: 'Coco', timePlayed: 660, points: 69, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 990, points: 99, online: false },
    { id: 'player-4', name: 'Nut', timePlayed: 440, points: 66, online: true },
    { id: 'player-5', name: 'Cherry', timePlayed: 770, points: 88, online: true },
];

/* Получаем массив всех онлайн игроков */

//const onlinePlayers = players.filter(player => player.online);
const onlinePlayers = players.filter(({ online }) => online);
console.table(onlinePlayers);

/* Получаем массив всех оффлайн игроков */

const offlinePlayers = players.filter(player => !player.online);
console.table(offlinePlayers);

/* Получаем список хардкордных игроков с временем больше 660 */

const hardcorePlayers = players.filter(player => player.timePlayed > 660);
console.table(hardcorePlayers);