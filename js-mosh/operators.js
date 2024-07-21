x = 10;
y = 3;

// 1. Arithmetic Operators
// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y); // ES2016

// Increment (++)
// console.log(++x); // pre increment
// console.log(x++); // post increment
// console.log(x);

// Decrement (--)
// console.log(--x); // pre decrement
// console.log(x--); // post decrement
// console.log(x);

// 2. Assignment Operator
// console.log(x = 20);
// console.log(x += y); // 13
// console.log(x -= y); // 10
// console.log(x *= y); // 30
// console.log(x /= y); // 10
// console.log(x %= y); // 1
// console.log(x **= y);

// 3. Comparison Operators
// 3.1 Relational Operators
// console.log(x > y);
// console.log(x >= y);
// console.log(x < y);
// console.log(x <= y);

// 3.2 Equality Operators
// console.log(x === y);
// console.log(x !== y);

// 3.2.1 Strict Equality (Value + Type)
// console.log(1 === 1); // strict equality operator that compares value and type
// console.log('1' === 1);

// 3.2.2 Loose Equality (Value)
// console.log(x == y); // loose equality operator that compares value only
// console.log(x != y);

// 4. Ternary Operator
// If a customer has more than 100 points,
// they are a 'gold' customer, otherwise,
// they are a 'silver' customer.
let points = 90;
let customerType = (points > 100) ? 'gold' : 'silver';
// console.log(`Customer is ${customerType}`);

// 5. Logical Operators
// Logical AND (&&)
// console.log(true && true); 
let highIncome = true;
let goodCreditScore = false;
let eligibleForLoan = highIncome && goodCreditScore;
// console.log(`Eligible for Loan ${eligibleForLoan}`);

// Logical OR (||)
// Returns TRUE if one of the operands is TRUE
// console.log(false || true); 

// NOT (!)
let applicationRefused = !eligibleForLoan;
// console.log(`Application Refused ${applicationRefused}`);

// Unlike other programming languages in JavaScript
// we can use non-boolean values in Logical operators as well
// In this case it will return the first truthy value or the last falsy value

// Falsy (false)
// undefined, null, 0, false, '', NaN
// Anything that is not falsy is truthy
// Truthy (true)

// false || true // true
// false || 'Danish' // Danish
// false || 1 // 1
// false || 1 || 2 // this will return first truthy value i.e. 1 in our case and its called short-circuiting 

let userColor = undefined;
let defaultColor = 'blue';
let selectedColor = userColor || defaultColor;
// console.log(selectedColor);

// 6. Bitwise Operator
// 1 = 00000001
// 2 = 00000010
// R = 00000001 = 3 for bitwise OR |
// R = 00000000 = 0 for bitwise AND &
// Practicle usage is for permissions
// Read, Write, Execute
// 00000100
// 00000110
// 00000111
//console.log(1 | 2);
//console.log(1 & 2);

// Real world use case of Bitwize operator
const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;

// lets check if we a permission or not
let checkPermission = (myPermission & readPermission) ? 'yes' : 'no';
//console.log('Read Permission: ',checkPermission);

checkPermission = (myPermission & executePermission) ? 'yes' : 'no';
//console.log('Execute Permission: ',checkPermission);

// precedence of operators
// () - Parentheses
// ** - Exponentiation
// +, -, *, /, % - Arithmetic
// ++, -- - Increment/Decrement
// <<, >> - Left Shift, Right Shift
// <, >, <=, >=, ==, !=, ===, !== - Comparison
// && - Logical AND
// || - Logical OR
// Logical NOT !
// &, |, ^ - Bitwise AND, OR, XOR
// =, += -= *= /= %= <<= >>= &= ^= |= - Assignment

// Excercise of Swaping Variables
let a = 'red';
let b = 'green';
let c = a; // temporary var to store value of a
a = b;
b = c;

// console.log(`Value of a = ${a}`);
// console.log(`Value of b = ${b}`);