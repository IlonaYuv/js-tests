/* Работа с коллекцией (массивом обьекта) */

const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Coconut', online: true },
    { name: 'Cherry', online: false },
];

console.table(friends);

// for (const friend of friends) {
//    console.log(friend.name);

//    friend.newprop = 999;
// }

// console.table(friends);

/* Ищем друга по имени */

const findFriendByName = function (allFriends, friendName) {
    for (const friend of allFriends) {
        // console.log(friend);
        // console.log(friend.name);

        if (friend.name === friendName) {
            return 'Нашли!!!';
        }
    }

     return 'Не нашли! Сорри ;(';
};

// console.log(findFriendByName (friends, 'Coconut'));
// console.log(findFriendByName (friends, 'Banana'));

/* Получаем имена всех друзей */

const getAllNames = function (allFriends) {
    const names = [];

     for (const friend of allFriends) {
    //    console.log(friend.name);
        
    //    names.push(friend.name);
     }

     return names;
};

// console.log(getAllNames(friends));

/* Получаем имена только тех друзей, которые онлайн */

const getOnlineFriends = function (allFriends) {
    const onlineFriends = [];

    for (const friend of allFriends) {
        console.log(friend);
        console.log(friend.online);
    

        if (friend.online) {
            onlineFriends.push(friend);
        }
    }

    return onlineFriends;
};

// console.log(getOnlineFriends(friends));
 
const getOfflineFriends = function (allFriends) {
    const offlineFriends = [];

    for (const friend of allFriends) {
        console.log(friend);
        console.log(friend.online);

        if (!friend.online) {
            offlineFriends.push(friend);
        }
    }

    return offlineFriends;
};

 // console.log(getOfflineFriends(friends));

/* Создать 2 массива онлайн и офлайн: если тру - в первый, если нет - во второй */
 
const getFriendsByOnlineStatus = function (allFriends) {
    const friendsByStatus = {
        online: [],
        offline: [],
    };

    for (const friend of allFriends) {
        if (friend.online) {
            friendsByStatus.online.push(friend);
            continue;
        }
        
        friendsByStatus.offline.push(friend);
        
        // const key = friend.online ? 'online' : 'offline';
        // friendsByStatus[key].push(friend);
    }

    return friendsByStatus;
};

// console.log(getFriendsByOnlineStatus(friends));

/* Как узнать количество свойств в обьекте ? */

const x = {
    a: 1,
    b: 2,
    c: 50,
    d: 100
}

console.log(Object.keys(x).length);

