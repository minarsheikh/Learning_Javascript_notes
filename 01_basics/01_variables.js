const accountId = 41156
let accountEmail="sheikhmasud827@gmail.com"
var accountPassword="112233"
accountCity = "Nagpur"
let accountState;

// accountId= 2 // Not allowed
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope.
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

