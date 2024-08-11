let fs = require('fs');
let input = fs.readFileSync('dev/stdin8393').toString().split('\n');

const num = Number(input[0]);

function getSum(num){
    let sum = 0;
    for(let i = 1; i <= num; i++){
        sum += i;
    }
    return sum;
}

console.log(getSum(num));