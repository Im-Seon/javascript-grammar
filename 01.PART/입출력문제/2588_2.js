let fs = require('fs');
let input = fs.readFileSync('dev/stdin2588').toString().split("\n");
// [ '472\r', '385' ]

const num1 = input[0];
const num2 = input[1];

// num2의 각 자릿수
const x_1 = num2[0]; // 일의 자리
const x_2 = num2[1]; // 십의 자리
const x_3 = num2[2]; // 백의 자리

console.log(Number(num1) * Number(x_1));
console.log(Number(num1) * Number(x_2));
console.log(Number(num1) * Number(x_3));
console.log(Number(num1) * Number(num2));