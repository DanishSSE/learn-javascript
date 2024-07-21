// console.log("2" > 1)
// console.log("02" >  1)

// console.log(null > 0) // false
// console.log(null == 0) // false
// console.log(null >= 0) // true

/* The reason is that an equality check == and comparision > < >= <= work differently. Comparision convert null to a number, treating it as 0. That's why null >= 0 is true and other values are false*/

console.log(undefined == 0) // false
console.log(undefined > 0) // false
console.log(undefined <= 0) // false

// === compare value and data type as well
console.log("2" === 2) // false