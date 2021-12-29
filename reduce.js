/* array.prototype.reduce()
- Поэлементно перебирает оригинальный массив 
- Возвращает все, что угодно
- Заменяет все на свете, но использовать нужно с умом */

const numbers = [6, 9, 13, 24, 29];

const total = numbers.reduce((acc, number) => acc + number, 0);
//console.log(total);

// accumulator = 0 -> number = 6 -> return 0 + 6
// accumulator = 6 -> number = 9 -> return 6 + 9
// accumulator = 15 -> number = 13 -> return 15 + 13
// accumulator = 28 -> number = 24 -> return 28 + 24
// accumulator = 52 -> number = 29 -> return 52 + 29

/* Cчитаем общую зарплату */

const salary = {
    mango: 100,
    coco: 150,
    banana: 50,
};

const totalSalary = Object.values(salary).reduce(
    (total, value) => total + value,
    0,
);
//console.log(totalSalary);

/* Cчитаем общее количество часов */

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 330, points: 44, online: false },
    { id: 'player-2', name: 'Coco', timePlayed: 660, points: 69, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 990, points: 99, online: false },
    { id: 'player-4', name: 'Nut', timePlayed: 440, points: 66, online: true },
    { id: 'player-5', name: 'Cherry', timePlayed: 770, points: 88, online: true },
];

const totalTimePlayed = players.reduce(
    (totalTime, player) => totalTime + player.timePlayed,
    0,
);

//console.log(totalTimePlayed);

/* Cчитаем общую сумму товаров корзины */

const cart = [
    { label: 'apples', price: 100, quantity: 2 },
    { label: 'bananas', price: 120, quantity: 3 },
    { label: 'lemons', price: 70, quantity: 4 },
];

const totalAmount = cart.reduce(
    (total, { price, quantity }) => total + price * quantity,
    0,
);
    
//console.log(totalAmount);

/* Собираем все теги из твитов */

const tweets = [
    { id: '800', likes: 5, tags: ['js', 'nodejs'] },
    { id: '801', likes: 2, tags: ['html', 'css'] },
    { id: '802', likes: 17, tags: ['html', 'js', 'nodejs'] },
    { id: '803', likes: 8, tags: ['css', 'react'] },
    { id: '804', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

const allTags = tweets.reduce((tags, tweet) => {
    //tags.push(...tweet.tags);
    //return tags;
    
    return [...tags, ...tweet.tags];
}, []);

//const allTags = tweets.reduce((tags, tweet) => [...tags, ...tweet.tags], []);
console.log(allTags);

/* Ведем статистику тегов */

//const tagsStats = allTags.reduce((acc, tag) => {
//    console.log(acc);

//    if (acc[tag]) {
//        acc[tag] += 1;

//        return acc;
//    }

//    acc[tag] = 1;

//    return acc;
//}, { });

const tagsStats = allTags.reduce(
    (acc, tag) => ({
        ...acc,
        [tag]: acc[tag] ? acc[tag] + 1 : 1,
    }),
    {},
);

console.log(tagsStats);

// если свойство с ключом есть - увеличить значение на 1
// если свойства нет с таким ключом - сделать и записать значение ( = 1)