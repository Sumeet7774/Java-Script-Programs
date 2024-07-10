const accountId = 10;
let accountEmail = "admin123@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

//accountId = 2; // not allowed because the variable declared is constant
accountEmail = "abc@gmail.com";
accountPassword = "120";
accountCity = "Banglore";


/*
    Prefer not to use var because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
