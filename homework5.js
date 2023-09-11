// create array with 10 elements
// create a function that will add value to array under index 500
// create a function with for inside and conditions to create two new arrays - one with string elements only, another only with numbers
//  doesn't matter async or not function


// Task 1 
// create array with 10 elements


let tenArr = ['Vlad', 'Dziub', 'Axent', 'Screnn', 'Wipes', 'Shift', 'DeepCool', 'Apple', 'JavaScript', 'Create']

console.log(tenArr);

// Task 2 
// create a function that will add value to array under index 500


function addIndex500(index, value) {
    tenArr[index] = value;
}

addIndex500(500,1000); 

console.log(tenArr[500]);


// Task3
//  create a function with for inside and conditions to create two new arrays - one with string elements only, another only with numbers
//  doesn't matter async or not function
function newArray(strNum) {
    let strArray = [];
    let numArray = [];

    for (let i = 0; i < strNum.length; i++) {
        if (typeof strNum[i] === 'string') {
            strArray.push(strNum[i]);
        } else if (typeof strNum[i] === 'number') {
            numArray.push(strNum[i]);
        }
    }

    return [strArray, numArray];
}
let mixArray = ['apple', 42, 'banana', 7, 'cherry', 14];

let [strings, numbers] = newArray(mixArray);

console.log('Strings', strings);
console.log('Numbers', numbers);




