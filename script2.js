const prompt = require('prompt-sync')()


// get input from user

let x = prompt('What is your name? ')

console.log(`Welcome ${x}!`);

let first = prompt('Please input two numbers:');
let second = prompt('')
first = Number(first)  // first - 0, +first, first*1
second = Number(second)


console.log('Sum:        ', first + second);
console.log('Difference: ', first - second);
console.log('Product:    ', first * second);
