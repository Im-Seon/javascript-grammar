let fs = require('fs'); 
let input = fs.readFileSync('dev/stdin1000').toString().split('\n');
// [ '1 2' ]

let line = input[0].split(' ');

const num1 = Number(line[0]);
const num2 = Number(line[1]);

console.log(num1 + num2);