// task 1
const sampleText = 'We are good';

console.log(sampleText);

// task 2
const messageKeyHello = "Hello";
const messageKeyWorld = "World";
const resultString = `${messageKeyHello} ${messageKeyWorld}`;

console.log(resultString);

// task 3
// чи вірно оголошена перевірка типу даних - і якщо ні - то змінити на вірний варіант
//let myVariable = 'value'
//typeof{'myVariable'}

const myVariable = 'value';
const type = typeof(myVariable);
const varTypeResultMessage = `${type} ${myVariable}`;
console.log(varTypeResultMessage)

// task 4 
//чи вірно оголошений код для отримання значення іншої змінної
//( `hello ${"name"}` )

const name = 'Vlad';
const helloMessage = `Hello, ${name}`;

console.log(helloMessage);