let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber); 
console.log(valueInNumber);


// "33 => 33"
// "33abc" => NaN
// true = 1; false = 0

let isLoggedIn = 1;
let isLoggedIn2 = 0;
let isLoggedIn3 = "sumeet";
let isLoggedIn4 = "";

let booleanisLoggedIn = Boolean(isLoggedIn);
let booleanisLoggedIn2 = Boolean(isLoggedIn2);
let booleanisLoggedIn3 = Boolean(isLoggedIn3);
let booleanisLoggedIn4 = Boolean(isLoggedIn4);

console.log(booleanisLoggedIn);
console.log(booleanisLoggedIn2);
console.log(booleanisLoggedIn3);
console.log(booleanisLoggedIn4);

// 1 => true; 0 => false;
// "" => false;
// "sumeet" => true;

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);



// ------------------Operations-----------------------

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion


