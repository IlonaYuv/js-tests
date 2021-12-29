/* array.prototype.map()
- Поэлементно перебирает оригинальный массив 
- Не изменяет оригинальный массив
- Возвращает новый массив такой же длинны */

const numbers = [6, 9, 13, 24, 29];

const doubleNums = numbers.map(number => {
    //console.log(number);

    return number * 2;
});

//console.log('numbers', numbers);
//console.log('doubleNums', doubleNums);


const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 330, points: 44, online: false },
    { id: 'player-2', name: 'Coco', timePlayed: 660, points: 69, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 990, points: 99, online: false },
    { id: 'player-4', name: 'Nut', timePlayed: 440, points: 66, online: true },
    { id: 'player-5', name: 'Cherry', timePlayed: 770, points: 88, online: true },
];

/* Получаем массив имен всех игроков */

//const playerNames = players.map(player => {
//    console.log(player);

//    return player.name;
//});

const playerNames = players.map(player => player.name);
console.log('playerNames', playerNames);

const playerIds = players.map(player => player.id);
console.log('playerIds', playerIds);

//const res = players.map(player => {
//    return {
//        name: player.name,
//        online: player.online,
//    };
//});

const res = players.map(({ name, online }) => ({ name, online }));
//console.log('res', res);

/* Увеличиваем к-ство поинтов каждого игрока на 10% */

//const updatedPlayers = players.map(player => {
//    return {
//        ...player,
//        points: player.points * 1.1,
//    };
//});

const updatedPlayers = players.map(player => ({
    ...player,
    points: player.points * 1.1,
}));
//console.table(updatedPlayers);

/* Увеличиваем к-ство часов игрока по id */

const playerIdToUpdate = 'player-3';

//const updatedPlayer = players.map(player => {
//    if (playerIdToUpdate === player.id) {
//        return {
//            ...player,
//            timePlayed: player.timePlayed + 100,
//        };
//    }
//
//    return player;
//});

const updatedPlayer = players.map(player => 
    playerIdToUpdate === player.id
        ? { ...player, timePlayed: player.timePlayed + 100 }
        : player,
);
console.table(updatedPlayer);