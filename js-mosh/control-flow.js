document.querySelector('h1').innerHTML = "Control Flows"
// if...else
// Hour
// If hour is between 6am and 12pm: Good morning!
// If hour is between 12pm and 6pm: Good afternoon!
// Otherwise, Good evening!
let hour = 1;
if(hour >= 6 && hour < 12) {
    //console.log('Good morning!')
} else if(hour >= 12 && hour < 18) {
    //console.log('Good afternoon!')
} else {
    //console.log('Good evening!')
}

// switch case
let role = 'guest';
// switch(role){
//     case 'guest':
//         console.log('Guest User');
//         break;
//     case 'moderator':
//         console.log('Moderator User');
//         break;
//     default:
//         console.log('Unknown User'); 
// }

// my personal choice/prefrence is if...else because it less ugly and less code
// if(role === 'guest') console.log('Guest User');
// else if(role === 'moderator') console.log('Moderator User');
// else console.log('Unknown User');

// for loop
// for(let i = 0; i <= 5; i++) 
//     if(i % 2 !== 0)
//         console.log('Assalam-O-Alaikum', i);

// reverse order
// for(let i = 5; i > 0; i--) 
//     console.log('Assalam-O-Alaikum', i);

// while loop // it executes 0 or more times
// let i=0;
// while(i<=5){
//     if(i % 2 !== 0) console.log(i);
//     i++;
// }

// do-while // it executes at-least one time or more
// let i = 13;
// do {
//     if(i % 2 !== 0) console.log(i);
//     i++;
// } while(i <= 5)

// infinite loops with for, while and do-while // these loops can crash browser or computer
// while(true){
     // its an infinite loop
// }
// let i=0;
// while(i<=5){
    // its an infinite loop if we don't add the i++ incrementer
// }
// let i=0;
// do {
     // its an infinite loop if we don't add the i++ incrementer
// } while(i<=5)
// for(let i=0; i<=5;){
//     console.log('infinite loop');
// }

// for-in loop to iterate properties of an object or elements of an array
// const person = {
//     name: "Danish Abdullah",
//     age: 34,
// }
// for (let key in person)
//     console.log(key, person[key])

// we can also use this to iterate an array but its not an ideal way
// const colorsArr = ['red', 'blue', 'green'];
// for (let index in colorsArr)
//     console.log(index, colorsArr[index]);

// for-of new way to iterate over array or modern way ES6 syntax
// const colorsArr = ['red', 'blue', 'green'];
// for (let color of colorsArr)
//     console.log(color);

// break...continue
// let i=0;
// while(i<=10){
//     // if(i===5) break;

//     if(i%2 === 0){
//         i++;
//         continue; 
//         // it will skip the code below and jump to the start of the loop
//         // its an old and ugly way of doing or coding
//     }
//     console.log(i);
//     i++;
// }
