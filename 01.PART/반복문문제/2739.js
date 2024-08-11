let fs = require('fs');
let input = fs.readFileSync('dev/stdin2739').toString().split('\n');

const num = Number(input[0]);

function printGugudan(num){
    for(let i = 1; i <= 9; i++){
        console.log(`${num} * ${i} = ${num * i}`);
    }
}

printGugudan(num);