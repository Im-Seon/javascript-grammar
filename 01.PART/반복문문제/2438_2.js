let fs = require('fs');
let input = fs.readFileSync('dev/stdin2438').toString().split('\n');

let num = Number(input[0]);

let result = "";
for(let i = 0; i < num; i++){
    for(let j = 0; j <= i; j++){
        result += "*";
    }
    result += "\n";
}
console.log(result);