// rewrite to while
// for (let i = 0; i < 3; i++) {
//   console.log( `number ${i}!` );
// }
// create a loop from 0 to 10, inside create a variable 'NotDivide', and assign numbers that can't divide 2
// and console every time that number.
// create loop with condition from 0 to 10, and jump to the next iteration when i is 5.
// create if/else for checking numbers, if lower than 10 console 'Hello', if higher than 10 console 'Bye'


// Task 1 rewrite to while

// for (let i = 0; i < 3; i++) 
// {
// console.log( `number ${i}!` )
// }


// Task 2 create a loop from 0 to 10, inside create a variable 'NotDivide', and assign numbers that can't divide 2
// and console every time that number.

    // for (let i = 0; i <= 10; i++) {
    // if (i % 2 !== 0) {
    // const NotDivide = i;

    // console.log(NotDivide);
    // }
    // }


    // Task 3 create loop with condition from 0 to 10, and jump to the next iteration when i is 5.

    // for (let i = 0; i <= 10; i++) {
    //     if (i === 5) {
    //       continue; 
    //     }
    //     console.log(i);
    //   }


    //   Task 4  create if/else for checking numbers, if lower than 10 console 'Hello', if higher than 10 console 'Bye'

const number = 15; 
if (number < 10) {
  console.log('Hello');
} else {
  console.log('Bye');
}