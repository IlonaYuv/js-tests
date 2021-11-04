/* Напиши функцию findLogin(allLogins, login) для поиска логина
- если логина нет, то вывести 'Пользователь [логин] не найден' 
- если нашли логин, то вывести 'Пользователь [логин] найден' */

const logins = ['m4ngoDoge', 'kiwidab3st', 'polyiscute', 'aj4xth3m4n'];

//const message = logins.includes(loginToFind)
//    ? `Пользователь ${loginToFind} найден`
//    : `Пользователь ${loginToFind} не найден`;

// console.log(message);

//const findLogin = function (allLogins, loginToFind) {
//    for (const login of allLogins) {
//        if (login === loginToFind) {
//          return `Пользователь ${loginToFind} найден`;
//      }
//    }
//
//    return `Пользователь ${loginToFind} не найден`;;
//};

const findLogin = function (allLogins, loginToFind) {
    return allLogins.includes(loginToFind)
        ? `Пользователь ${loginToFind} найден`
        : `Пользователь ${loginToFind} не найден`;
};


console.log(findLogin(logins, 'avocod3r'));
console.log(findLogin(logins, 'kiwidab3st'));
console.log(findLogin(logins, 'jam4l'));
console.log(findLogin(logins, 'polyiscute'));