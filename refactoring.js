/* Цепочки вызовов - chaining (РЕФАКТОРИНГ!) */

const numbers = [6, 9, 3, 1, 6];

//const greaterThenTwo = numbers.filter(function (num) {
//    return num > 2;
//});

const greaterThenTwo = numbers.filter(num => num > 2);

//console.log(greaterThenTwo);

//const multByTwo = greaterThenTwo.map(function (num) {
//    return num * 3;
//});

const multByTwo = greaterThenTwo.map(num => num * 3);

//console.log(multByTwo);

//const sorted = multByTwo.sort(function (a, b) {
//    return a - b;
//});

const sorted = multByTwo.sort((a, b) => a - b);

//console.log(sorted);

//const res = numbers
//    .filter(function (num) {
//        return num > 2;
//    })
//    .map(function (num) {
//        return num * 3;
//    })
//    .sort(function (a, b) {
//        return a - b;
//    });

const res = numbers
    .filter(num => num > 2)
    .map(num => num * 3)
    .sort((a, b) => a - b);

//console.log(res);

/* Сортируем тех, кто онлайн по рангу */

//const players = [
//    { id: 'id-1', tag: 'Mango', isOnline: true, rank: 900 },
//    { id: 'id-2', tag: 'Coco', isOnline: true, rank: 600 },
//    { id: 'id-3', tag: 'Kiwi', isOnline: false, rank: 100 },
//    { id: 'id-4', tag: 'Nut', isOnline: true, rank: 300 },
//];

//const onlineAndSorted = players
//    .filter(function (player) {
//        return player.isOnline;
//    })
//    .sort(function (prevPlayer, nextPlayer) {
//        return prevPlayer.rank - nextPlayer.rank;
//    });

// const onlineAndSorted = players
//    .filter(player => player.isOnline)
//    .sort((prevPlayer, nextPlayer) => prevPlayer.rank - nextPlayer.rank);
   
//console.table(onlineAndSorted);

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 330, points: 44, isOnline: false },
    { id: 'player-2', name: 'Coco', timePlayed: 660, points: 69, isOnline: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 990, points: 99, isOnline: false },
    { id: 'player-4', name: 'Nut', timePlayed: 440, points: 66, isOnline: true },
];

/* Увеличиваем к-ство поинтов каждого игрока (доп скобки, как выражение) */

//const updatedPlayers = players.map(function (player) {
//    return {
//        ...player,
//        points: player.points + player.points * 0.1,
//    };
//});

//const updatedPlayers = players.map((player) => ({
//        ...player,
//        points: player.points + player.points * 0.1,
//}));

//console.table(updatedPlayers);

/* Увеличиваем к-ство часов игрока по id (с помощью тернарника)*/

const playerIdToUpdate = 'player-3';

//const updatedPlayers = players.map(function (player) {
//    if (player.id = playerIdToUpdate) {
//      return {
//         ...player,
//         timePlayed: player.timePlayed + 60,
//      }; 
//    }
    
//    return player;
//});

//const updatedPlayers = players.map(player => {
//    return player.id = playerIdToUpdate
//        ? { ...player, timePlayed: player.timePlayed + 60 }
//        : player;
//});

const updatedPlayers = players.map(player =>
    player.id = playerIdToUpdate
        ? { ...player, timePlayed: player.timePlayed + 60 }
    : player,
);

console.table(updatedPlayers);