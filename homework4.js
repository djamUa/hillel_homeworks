// Task 1
// let x = 5; let y = 5; Use the addition assignment (*=) operator that will result in x being 25 (same as x = x * y)

const x = 5;
const y = 5;
const b = `${x * y}`

console.log(b);


// const x = 5;
// const y = 5;
// x *= y;

// console.log(x);

// Task 2
// create new variable 'let1' in lower case

let varLower = 'LET1'
varLower = varLower.toLowerCase()

console.log(varLower);

// Task 3
// Update value 'let1' to upper case

let varUper = varLower.toUpperCase()

console.log(varUper);

// Task 4
//  Create another variable with few words and contain 'let1'. use method replace to word 'BANG'

let changeWord = 'Create another variable with few words and contain let1'
let changeWord2 = changeWord.replace ('let1', 'BANG')

console.log(changeWord2);


// Task 5
//create comparison operator to log true, when x is NOT equal to y

let x2 = '5'
let x3 = 5
x2 = Number (x2)
console.log (typeof x2)
let notEqual = x2 === x3

console.log(notEqual);


//  Task 6
// create variable with using addition assignment (+=) for two numbers

let x4 = 10
let x5 = 43
let sumX = x4 += x5

console.log(sumX);


// Task 7
// create variable that should be 'false' with using equality operator

let myVariable = 100 == 101;

console.log(myVariable);