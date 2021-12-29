/* array.prototype.find()
- Поэлементно перебирает оригинальный массив 
- Возвращает первый элемент удовлетворяющий условие или undefined */

const numbers = [6, 9, 13, 24, 29];

const number = numbers.find(number => number > 9);
//console.log(number);

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 330, points: 44, online: false },
    { id: 'player-2', name: 'Coco', timePlayed: 660, points: 69, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 990, points: 99, online: false },
    { id: 'player-4', name: 'Nut', timePlayed: 440, points: 66, online: true },
    { id: 'player-5', name: 'Cherry', timePlayed: 770, points: 88, online: true },
];

/* Ищем игрока по id */

const playerIdToFind = 'player-4';

const playerWithId = players.find(player => player.id === playerIdToFind);
//const playerWithId = players.find(({ id }) => id === playerIdToFind);
console.table(playerWithId);

const findPlayerById = (allPlayer, playerId) => {
    return allPlayer.find(player => player.id === playerId);
};

console.table(findPlayerById(players, 'player-5'));

/* Ищем игрока по имени */

const playerNameToFind = 'Coco';

const playerWithName = players.find(player => player.name === playerNameToFind);
console.table(playerWithName);
