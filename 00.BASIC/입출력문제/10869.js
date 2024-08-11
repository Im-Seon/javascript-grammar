let fs = require('fs');
let input = fs.readFileSync('dev/stdin10869').toString().split('\n');
// [ '7 3' ]
let line = input[0].split(' ');

const num1 = Number(line[0]);
const num2 = Number(line[1]);

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(parseInt(num1 / num2));
console.log(num1 % num2);