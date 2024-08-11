let fs = require('fs');
let input = fs.readFileSync("dev/stdin2480").toString().split('\n');

let diceValue = input[0].split(' ').map(Number);

function getPrizeMoney(diceValue){
    const [num1, num2, num3] = diceValue;
    // 1) 모두 동일한 경우
    if (num1 === num2 && num2 === num3) {
        return 10000 + num1 * 1000;
    } 
    // 2-1) num1 num2 || num1 num3이 동일한 경우
    if (num1 === num2 || num1 === num3) {
        return 1000 + num1 * 100;
    } 
    // 2-2) num2 num3이 동일한 경우
    if (num2 === num3) {
        return 1000 + num2 * 100;
    }
    // 3) 모두 다른 경우
    const maxValue = Math.max(num1, num2, num3);
    return maxValue * 100;
}

const prize = getPrizeMoney(diceValue);
console.log(prize);
