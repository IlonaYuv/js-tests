/* Перебор через for...in и Object.keys|values */

const feedback = {
    good: 6,
    neutral: 9,
    bad: 1,
};

let totalFeedback = 0;

// const keys = Object.keys(feedback);

// console.log(keys);

// for (const key of keys) {
//    console.log(key);
//    console.log(feedback[key]);

//    totalFeedback += feedback[key];
// }

// console.log('totalFeedback:', totalFeedback);

const values = Object.values(feedback);

console.log(values);

for (const value of values) {
    console.log(value);

    totalFeedback += value;
}

console.log('totalFeedback:', totalFeedback);