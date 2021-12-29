const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 330, points: 44, online: false },
    { id: 'player-2', name: 'Coco', timePlayed: 660, points: 69, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 990, points: 99, online: false },
    { id: 'player-4', name: 'Nut', timePlayed: 440, points: 66, online: true },
    { id: 'player-5', name: 'Cherry', timePlayed: 770, points: 88, online: true },
];

/* array.prototype.every()
- Поэлементно перебирает оригинальный массив 
- Возвращает true если все элементы массива удовлетворяют условие */

const isAllOnline = players.every(player => player.online);
console.log('isAllOnline: ', isAllOnline);

/* array.prototype.some()
- Поэлементно перебирает оригинальный массив 
- Возвращает true если хотя бы один элемент массива удовлетворяет условие */

const isAnyOnline = players.some(player => player.online);
console.log('isAnyOnline: ', isAnyOnline);

const anyHardcorePlayers = players.some(player => player.timePlayed > 660);
console.log('anyHardcorePlayers: ', anyHardcorePlayers);