/* Напиши скрипт, который проверяет возможность открыть чат с пользователем 
* (должен быть: другом, онлайн и без режима не беспокоить) */
const isFriend = true;
const isOnline = true;
const isDnd = false;

const canOpenChat = isFriend && isOnline && !isDnd;
console.log("Можно открыть чат? ", canOpenChat);

