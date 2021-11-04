/* Напиши функцию changeCase(string) которая заменяет регистр
каждого символа в строке на противоположный */

//const string = 'qWeRTzxCv';
//const letters = string.split('');
//let invertedString = '';

//for (const letter of letters) {
//    const isEqual = letter === letter.toLowerCase();

//    invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
//}

//console.log('invertedString: ', invertedString);

const changeCase = function (string) {
    const letters = string.split('');
    let invertedString = '';

    for (const letter of letters) {
        const isInLowerCase = letter === letter.toLowerCase();

        invertedString += isInLowerCase
            ? letter.toUpperCase()
            : letter.toLowerCase();
    }
    
    return invertedString;
};

console.log(changeCase('qweRTY'));
console.log(changeCase('mANGo'));
console.log(changeCase('CoCOnuT'));
