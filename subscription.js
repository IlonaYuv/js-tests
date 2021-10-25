/* Напиши скрипт проверки подписки полтзователя при доступе к контенту 
* (есть три подписки: free pro vip) 
* (получить доступ могут только pro vip) */

const sub = "pro";
const canAccessContent = sub === "pro" || sub === "vip";
console.log("Есть достп к контенту?", canAccessContent);
