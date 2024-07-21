// EXERCISE 1 - Write a function that takes two numbers
// and returns the maximum of the two.

// let number = maxNum(102,59);
// console.log("The maximum number is: " + number);
function maxNum(num1, num2){
    // if (num1 > num2) {
    //     return num1;
    // } else {
    //     return num2;
    // }

    // optimized version 1.0
    // if(num1 > num2) return num1;
    // else return num2;

    // optimized version 1.1
    // if(num1 > num2) return num1;
    // return num2;

    // optimized version 1.2 // the best way to do it
    return (num1 > num2) ? num1 : num2;
}
//console.log(maxNum(5,20));

// EXERCISE 2 - function to take 2 parameters width and height,
// return true if image is landscape or false if not

// let width = 300;
// let height = 200;
//console.log(isLandscape(width, height));
function isLandscape(width, height){
    // return (width > height) ? true : false; 
    // but we don't need to tell explicitly true/false
    // because condition will return true/false implicitly :)

    return (width > height); 
}

// EXERCISE 3 - very poplar interview question called the FizzBuzz algorithm
// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// Not a number => 'Not a number'

// const result = fizzBuzz(true);
// console.log(result);

function fizzBuzz(input){
    if(typeof input !== 'number') return NaN; // instead of 'Not a number';
    else if((input % 3 === 0) && (input % 5 === 0)) return 'FizzBuzz';
    else if(input % 3 === 0) return 'Fizz';
    else if(input % 5 === 0) return 'Buzz';
    
    return input;    
}

// EXERCISE 4 - Demerit Points
// Speed Limit = 70
// for every 5 km/hr increase in speed driver will get 5 -> 1 point (of penalty)
// we can use JavaScript built-in function to assist us Math.floor()
// And if driver gets 12 points then license will be suspended

//checkSpeed(130);

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if(speed < (speedLimit + kmPerPoint)){
        console.log('ok');
        return;
    }

    // const should be default choice and 
    // if you want to reassign a value, only then use let
    const points = Math.floor((speed - speedLimit) / kmPerPoint);  

    if(points >= 12) 
        console.log('License Suspended');
    else 
        console.log('Points', points);
}

// My Typical Solution was :)
// function checkSpeed(speed){
//     let speedLimit = 70;
    
       // don't use the magic numbers
//     if(speed >= 75) {
//         let points = Math.floor((speed - speedLimit)/5);  
//         result = (points >= 12) ? 'License Suspended' : `Point: ${points}`;
//         console.log(result);
//     } else{
//         console.log('ok');
//     }
// }

// EXERCISE 5 - Even and Odd numbers for the given limit
// showNumbers(10);
function showNumbers(limit){
    if(typeof limit !== 'number') {
        console.log('NaN');
        return;
    }

    for (let i = 0; i <= limit; i++) {
        // if(i % 2 === 0)
        //     console.log(i, 'EVEN');
        // else
        //     console.log(i, 'ODD');
        // cleaner way to do it
        const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
        console.log(i, message);
    }
}

// EXERCISE 6 - Count Truthy (values other than falsy)
// Falsy Values are undefined, null, '', 0, false, NaN

// const isActive = true;
// const firstName = 'Danish'; // Truthy (true)
// if (firstName) console.log('Hi', firstName);
// const lastName = ''; // Falsy (false)
// if (lastName) console.log('Hi', lastName);

// const array = [undefined, null, '', 0, false, NaN, 1, 2];
// console.log(countTruthy(array));

function countTruthy(array){
    let count = 0;
    for (let value of array)
        if(value)
            count++;
    
    return count;
}

// EXERCISE 7 - Function to show string properties of an object
// const student = {
//     name: 'Danish Abdullah',
//     age: 34,
//     height: 5.7,
//     city: 'Lahore',
//     country: 'Pakistan'
// }
// showProperties(student);
function showProperties(obj){
    for (let key in obj) 
        if (typeof obj[key] === 'string') 
            console.log(key, obj[key]);
}

// EXERCISE 8 - Function to return sum of the multiples of 
// 3 and 5 from 0 to given limit
// for example if we place sum(10)
// Multiples of 3: 3, 6, 9
// Multiples of 5: 5, 10
// 3 + 6 + 9 + 5 + 10 = 33

// console.log(sum(5));
function sum(limit) {
    let sum = 0;
    for (let i = 0; i <= limit; i++)
        if ((i % 3 === 0) || (i % 5 === 0))
            sum += i;
    
    return sum;
}

// EXERCISE 9 - Function to calculate grade of average marks
// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A
const marks = [20, 80, 90];
// console.log(calculateGrade(marks));

function calculateGrade(marks){
    const average = calculateAverage(marks);
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';    
}
function calculateAverage(array) {
    let sum = 0;
    for (let value of array)
        sum += value;

    return sum / array.length;
}

// function calculateGrade(marks) {
//     let sum = 0;
//     let average = 0;

//     for (let value of marks)
//         sum += value;
    
//     average = sum / marks.length;

//     if (average >= 90)
//         return 'A';
//     if (average >= 80)
//         return 'B';
//     if (average >= 70)
//         return 'C';
//     if (average >= 60)
//         return 'D';
    
//     return 'F';
// }

// EXERCISE 10 - Function to show stars for each row and upto the rows
// showStars(2);
function showStars(rows){
    // let stars = '';
    // for (let i = 0; i < rows; i++){
    //     stars += '*';
    //     console.log(stars);
    // }

    for (let row = 1; row <= rows; row++) {
        let pattern = '';
        for (let i = 0; i < row; i++)
            pattern += '*';

        console.log(pattern);
    }      
}

// EXERCISE 11 - Function to show all prime numbers up to given limit
// Prime - Prime numbers are natural numbers that are divisible by only 1 
// and the number itself. In other words, prime numbers are positive integers 
// greater than 1 with exactly two factors, 1 and the number itself. 
// Some of the prime numbers include 2, 3, 5, 7, 11, 13, etc.
// 11 = 1, 11
// 13 = 1, 13
// Composite
// 12 = 1, 2, 3, 4, 6, 12 
// Can be divided evenly by its factors

showPrimes(10);

function showPrimes(limit){
    for (let number=2; number <= limit; number++)
        if(isPrime(number)) console.log(number);

    // for (let i=2; i <= limit; i++) {
    //     let count = 0;
    //     for (let j=1; j <= i; j++)
    //         if(i % j === 0)
    //             count++;
        
    //     if(count <= 2)
    //         console.log(i)
    // }
}

function isPrime(number){
    for (let factor=2; factor < number; factor++)
        if(number % factor === 0)
            return false;
    
    return true;
}