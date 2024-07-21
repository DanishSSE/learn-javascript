// Objects are collection of key value pairs 
// or you can say collection of variables.
// So, if you have properties that are highly related,
// we want to encapsulate them inside an object.

// Object-oriented Programming (OOP)
const circle1 = { // object literal - new fancy term
    radius: 1, // can be any type of value or even objects, arrays, etc.
    location: {
        x: 5,
        y: 10
    },
    isVisible: true,
    draw: function() {
        console.log('draw'); // functions related to an object is called methods
    }
}
// circle.draw();

// Problem: If we want to create multiple circle objects and duplicate the above code
// now we'll have a lot of duplicate lines including properties and methods
// that can cause a serious problem while debugging a code or making changes, etc.

// Solution Factory and Contructor function, both do the same job
// Factory Function // Use Camel Notation: oneTwoThreeFour
// Just like a factory produces products, factory function produces objects
function createCircle(radius) { // object literal - new fancy term
    return {
        radius, // radius: radius, can be return if key value is same in spell
        draw() {
            console.log('draw');
        }
    }
}
// now we can create as many circles by using the above definition as we can
const circle3 = createCircle(3);
// console.log(circle3);
// const circle2 = createCircle(2);
// console.log(circle2);

// Constructor Function // Use Pascal Notation: OneTwoThreeFour
// this is a keyword to reference to the object
// that is executing this piece of code. 
function Circle(radius){
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
// const circle4 = new Circle(4);
// console.log(circle4);
// new keyword will do 3 things implicitly or under the hood
// 1 - it will assign an empty object {}
// 2 - it will reference this to empty object {}
// 3 - it will return this

// Every object in JavaScript have constructor property
// if you use factory function that JavaScript will use native contructor 
// function to create new objects but if you use constructor function
// this property will returnt that constructor function
// there are some builtin constructors in JavaScript
// new String(); // to create string but mostly we use string literals e.g. '', "", ``
// new Boolean(); // true, false
// new Number(); // 1, 2, 3, ...

// Dynamic nature of objects
// we can always add/remove properties or methods including existing ones
// const circle2 = {
//     radius: 1
// }
// circle2.color = 'red';
// circle2.draw = function() {
//     console.log('draw');
// }
// console.log(circle2);
// we can delete object properties or methods using delete keyword
// console.log('let try to delete color property of the above object');
// delete circle2.color;
// console.log(circle2);

// Now if you're confused that how can we add/remove properties and methods 
// of an object although we declared it as const, don't get confused
// because const means we can't redeclare or assign a new value to variable
// but we can change object key/pairs by using dot or bracket notation 
// circle2 = { // this will throw an error
//     color: 'green'
// }; 

// Every object in JavaScript has a property called constructor.
// And that references the function that was used to construct or
// create that object.

// Functions are objects in JavaScript
// So, this is how by JavaScript creates definition under the hood
// using builtin contructor function
const CircleDef = new Function('radius', `
        this.radius = radius;
        this.draw = function() {
            console.log('draw');
        }`
    );

//const anotherCircle = new CircleDef(1);
//console.log(anotherCircle);

// similarly we can new keyword works under the hood
// CircleDef.call({}, 1);
// const circle6 = CircleDef(1);
// CircleDef.call(window, 1);
// const circle6 = new CircleDef(1); // if we don't add new this will reference to window
// console.log(circle6);

// Primitive // Value Types
// number, boolean, string, null, undefined, BigInt, Symbol
// Prmitives are copied by value.
// Objects // Reference Types
// objects, arrays, functions 
// arrays and functions are also objects so, you can say objects
// Objects are copied by refrence.
let age = 10; // value type
function increase(age){
    age++;
}
increase(age);
console.log(age); // age = 10 because its a value type

let obj = { value: 10 };
function increaseAge(obj) {
    obj.value++;
}
increaseAge(obj);
console.log(obj.value); // age = 11 because its a reference type
