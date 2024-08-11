let fs = require('fs');
let input = fs.readFileSync('dev/stdin2438').toString().split('\n');

let num = Number(input[0]);

function printStart(num){
    let star = '';
    for(let i = 1; i <= num; i++){
        star += '*';
    }
    console.log(star);
}

for(let i = 1; i <= num; i++){
    printStart(i);
}