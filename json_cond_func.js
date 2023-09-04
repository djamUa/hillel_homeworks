// create a function that takes one param and inside makes the value Uppercase
// 	if the parameter not string type - console message about the incorrect type of data.
//  create js function that add properties for the object, allowing only number
// create JS object with 5 different properties
// with previously created function add a new property
// check the function syntax and if some issues propose
// let sum == function{a, b} (
//   return a + b;
// )


// Task 1 create a function that takes one param and inside makes the value Uppercase

// function upperFun(variableStr) {
//     if (typeof variableStr === 'string') {
//         return variableStr();}
//         else {
//       throw new Error('its string');
//     }    
//   }
// const upperFun2 = 'Nice';
// const upperFun3 = upperFun(upperFun2);

// console.log(upperFun3);  NOT TO USE!!!!!!!!!!!


// function upCase(input) {
//     return input.toUpperCase();
//   }
  
//   const origString = `it's ok!`;
//   const upperString = upCase(origString);
  
//   console.log(upperString);


// //   Task 2 create js function that add properties for the object, allowing only number

// function num1(obj, propertyName, propertyValue) {
//     if (typeof propertyValue === 'number') obj[propertyName] = propertyValue;
//     else console.error(`${propertyName}`);
//   }
  
//   const myObject = {};
//   num1(myObject, 'age', 31);
//   num1(myObject, 'Vlad', 'Dziub');
  
//   console.log(myObject);


// //   Task 3 create JS object with 5 different properties

//   const myAcc = {
//     firstName: "Vlad",
//     lastName: "Dziub",
//     age: 31,
//     city: "Kyiv",
//     dateOfBirth: "09-04-1992"
//   };
  
//   console.log(myAcc);
  
  
//   Task 4 with previously created function add a new property


// function addProp(obj, propertyName, propertyValue) {
//     if (typeof propertyValue === 'number') {
//       obj[propertyName] = propertyValue;
//     } else {
//       console.error(`Property "${propertyName}" must have a numeric value.`);
//     }
//   }
  
//   let myObject = {
//     firstName: "Vlad",
//     age: 31
//   };
  
//   addProp(myObject, 'dateOfBirth', 1992);
  
//   console.log(myObject);


// Task 5
//  check the function syntax and if some issues propose
// let sum == function{a, b} (
// return a + b;

let sum = function(a, b) {
    return a + b;
  };
  console.log(sum);
  