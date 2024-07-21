const accountId = 144553
let accountEmail = "danish@google.com"
var accountPass = "12345"
accountCity = "Lahore"
let accountState

//accountId = 144552

accountEmail = "zeerak@google.com"
accountPass = "za12345"
accountCity = "LHR"

console.log(accountId)

/*
Prefer not to use var
because of issue in block and functional scope
*/

console.table([accountId, accountEmail, accountPass, accountCity, accountState])