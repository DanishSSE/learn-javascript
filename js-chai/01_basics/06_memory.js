// 1. Stack Memory (Primitive)
// It will provide copy of the value
// example:

let myUserName = "danish6837"
let anotherUserName = myUserName
anotherUserName = "dani" // this will not change value of myUserName as its a copy
// console.log(anotherUserName) // dani

// 2. Heap Memory (Non-Primitive)
// It will provide reference of the value
// example:

let userOne = {
    name: "danish",
    age: 36,
    email: "danish@google.com"
}
let userTwo = userOne

userTwo.email = "dani@xyz.com"
console.log(userOne.email) // dani@xyz.com
console.log(userTwo.email) // dani@xyz.com
