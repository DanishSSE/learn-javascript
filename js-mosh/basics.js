// 1. Primitive or Value Types (string, number, boolean, undefined, null)
let name = "Danish Abdullah"; // String Literal (new fancy name of a string)
let age = 34; // Number Literal
let isApproved = true; // Boolean Literal
let firstName; // Undefined
let selectedColor = null;

// console.log(firstName);
// console.log(typeof firstName);

// JavaScript is a dynamic type language.
// This means we can assign number to a string variable and its data type will be changed to number as well

// 2. Reference or Non-Primitive Types (objects, arrays and functions)
// 2.1 Objects
let person = {
    name: "Danish Abdullah",
    age: 34
}
//console.log(person);

// Dot Notation (to access values of an object)
person.name = "Umar Farooq R.A";
//console.log(person.name);

// Bracket Notation (to access values of an object)
person['name'] = "Usman Ghani R.A";
// console.log(person['name']);

// 2.2 Arrays
let cartItems = ["Danish", "Abdullah", 34];
cartItems[0] = "Umar";
cartItems[1] = "Ali";
// console.log(cartItems);
// console.log(cartItems.length);
// console.log(typeof cartItems); 

// 2.3 Functions
// Performing a task
// firtName and lastName are the parameters at the time of declaration of the functions.
function greet(firstName, lastName){
    console.log('Hi, ' + firstName + ' ' + lastName);
}
// but at the time of calling a function we called these arguments
// we can pass a simple string or number or even expression e.g x+y or call to another function
//greet('Danish', 'Abdullah');

// Calculating a value
function square(number){
    return number * number;
}
//console.log(square(3);

