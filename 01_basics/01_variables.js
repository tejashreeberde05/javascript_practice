
const accountId = 1234;
let accountEmail = "test@gmail.com";
var accountPassword = "abcd";
accountCity = "Mumbai";

//accountId = 2; // not allowed
accountEmail = "Tejashree@gmail.com";
accountPassword = "pqrs";
accountCity = "Jaipur";
let accountState;

console.log(accountId);
/*
Prefer not to use var
because of the issue of block scope and functional scope
*/
console.table([accountId, accountEmail,accountPassword,accountCity,accountState]);
