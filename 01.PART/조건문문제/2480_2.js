let fs = require('fs');
let input = fs.readFileSync("dev/stdin2480").toString().split('\n');

let diceValue = input[0].split(' ').map(Number);

function getPrizeMoney(diceValue){
    const [num1, num2, num3] = diceValue;
   
    if (num1 === num2 && num2 === num3) {
        return 10000 + num1 * 1000;
    } else if (num1 === num2) {
        return 1000 + num1 * 100;
    } else if(num1 === num3){
        return 1000 + num1 * 100;
    } else if (num2 === num3) {
        return 1000 + num2 * 100;
    }
    const maxValue = Math.max(num1, num2, num3);
    return maxValue * 100;
}

const prize = getPrizeMoney(diceValue);
console.log(prize);
