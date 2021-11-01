/* Напиши скрипт поиска логина
- если логина нет, то вывести 'Пользователь [логин] не найден' 
- если нашли логин, то вывести 'Пользователь [логин] найден' 
сначала через for
потом через for...of
логика break
метод includes() с тернарным оператором */

const logins = ['m4ngoDoge', 'kiwidab3st', 'polyiscute', 'aj4xth3m4n'];
const loginToFind = 'polyiscute';
//let message = `Пользователь ${loginToFind} не найден`;

//for (let i = 0; i < logins.length; i += 1) {
//    const login = logins[i];

//    console.log('Login: ', login);

//    console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//    if (login === loginToFind) {
//        message = `Пользователь ${loginToFind} найден`;
//        break;
//    }

 //   message = `Пользователь ${loginToFind} не найден`;  
//}
//console.log(message);

//for (const login of logins) {
    //console.log('Login: ', login);
    //console.log(`${login} === ${loginToFind}: `, login === loginToFind);

    //if (login === loginToFind) {
    //    console.log('Ура, равны!');
    //    message = `Пользователь ${loginToFind} найден`;
    //    break;
    //}
//}

//console.log(message);

    
const message = logins.includes(loginToFind)
    ? `Пользователь ${loginToFind} найден`
    : `Пользователь ${loginToFind} не найден`;

console.log(message);


