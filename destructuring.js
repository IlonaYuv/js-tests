/* Деструктуризация обьекта
- Значение по умолчанию
- Имя переменной отличное от имени свойства */

const playlist = {
    // name: 'My playlistOk',
    rating: 9,
    tracks: ['track-1', 'track-2', 'track-3'],
    trackCount: 3,
};

const {
    rating,
    tracks,
    // name,
    trackCount: numberOfTracks = 0,
    author = 'IL'
} = playlist;

// console.log(author);
// console.log(numberOfTracks);

//console.log(
//    name,
//    rating,
//    tracks,
//     trackCount,
// );

// console.log(
//    playlist.name,
//    playlist.rating,
//    playlist.tracks,
//    playlist.trackCount,
// );

/* Глубокая Деструктуризация */

// const profile = {
    // name: 'Ilona Yuvchenko',
    // tag: 'ilonayuv',
    // location: 'Kyiv, Ukraine',
    // avatar: 'https://il.com/faces/24/r_oy/hot/09.jpg',
    // stats: {
    //    followers: 609,
    //    views: 369,
    //    likes: 169,
    // },
// };

// const {
    // name,
    // tag,
    // location,
    // avatar,
    // stats: { followers, views, likes },
// } = profile;

// const { followers, views, likes } = stats;

// console.log(name, tag, location, avatar, followers, views, likes);

/* Деструктуризация массивов */

const rgb = [255, 100, 80];

const [red, green, blue] = rgb;

// console.log(red, green, blue);

const authors = {
    kiwi: 4,
    cherry: 7,
    mango: 9,
    coconut: 6,
};

const entries = Object.entries(authors);

// console.log(entries);

// for (const [name, rating] of entries) {
    // const [name, rating] = entry;

    // const name = entry[0];
    // const rating = entry[1];

    // console.log(name, rating);
// }

/* Операция rest (сбор) */

// const profile = {
//    name: 'Ilona Yuvchenko',
//    tag: 'ilonayuv',
//    location: 'Kyiv, Ukraine',
//    avatar: 'https://il.com/faces/24/r_oy/hot/09.jpg',
//    stats: {
//        followers: 609,
//        views: 369,
//        likes: 169,
//    },
// };

// const { name, tag, location, ...restProps } = profile;

// console.log(name, tag, location);
// console.log(restProps);
// console.log(profile);

/* Паттерн "Обьект настроек" 
- деструктуризация парамерта-обьекта в подписи функции
- rest при деструктуризации в подписи */

const showProfileInfo = function ({
        name,
        tag,
        location,
        avatar,
        stats: { followers, views, likes },
    }) {
    // console.log(userProfile);
    console.log(name, tag, location, avatar, followers, views, likes);
};

const profile = {
    name: 'Ilona Yuvchenko',
    tag: 'ilonayuv',
    location: 'Kyiv, Ukraine',
    avatar: 'https://il.com/faces/24/r_oy/hot/09.jpg',
    stats: {
        followers: 609,
        views: 369,
        likes: 169,
    },
};

showProfileInfo(profile);

//fn(24, 9, true, [], {}, 6);

//fn({
//    age: 24,
//    friends: 9,
//    isOnline: true,
//    hobbies: [],
//    games: {},
//    rating: 6,
// });
