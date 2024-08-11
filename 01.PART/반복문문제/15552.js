let fs = require('fs');
let input = fs.readFileSync("dev/stdin15552").toString().split("\n");

const testCase = Number(input[0]);

let result = "";
for(let i = 1; i <= testCase; i++){
    // result += input[i].split(" ").map(Number).reduce((a, b) => a + b);
    // result += '\n';
    let [num1, num2] = input[i].split(" ").map(Number);
    result += num1 + num2 + '\n';
}
console.log(result);