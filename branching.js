//оператор ветвления
if (66 > 30) {
    console.log("ilona");
}

if (50 > 30) {
    console.log("x > y");
} else {
   console.log("x < y"); 
}

const salary = 1000;
if (salary < 500) {
    console.log("level 1");
} else if (salary > 500 && salary < 1500) {
   console.log("level 2"); 
} else if (salary > 1500 && salary < 2500) {
   console.log("level 3"); 
} else {
  console.log("level 4");  
}

//тернарный оператор
const balance = 3333;
//let message;
//if (balance >= 0) {
    //console.log("positive balance");
//} else {
   //console.log("negative balance"); 
//}
const message = balance >= 0 ? "positive balance" : "negative balance";
console.log(message);

//блочная область видимости переменных
const b = 13;
if (true) {
    const a = 9;
    console.log(a);
}
console.log(b);
