let fs = require('fs');
let input = fs.readFileSync('dev/stdin2588').toString().split("\n");
// [ '472\r', '385' ]

const num1 = Number(input[0]);
const num2 = input[1];

num2.split("").reverse().forEach((num3)=>{
    console.log(num1 * Number(num3));
});

console.log(num1 * Number(num2));